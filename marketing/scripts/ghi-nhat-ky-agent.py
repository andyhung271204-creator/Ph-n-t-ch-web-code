"""Hook Claude Code: ghi nhật ký lượt chạy /len-lich-noi-dung để trang design/agent-workflow/ hiện trực tiếp.
Nhận JSON của hook qua stdin, ghi 1 dòng JSON vào design/agent-workflow/nhat-ky.jsonl.
Chỉ ghi phiên đang chạy skill (bắt đầu khi prompt hoặc Skill tool gọi len-lich-noi-dung). Luôn exit 0.
"""
import json
import re
import sys
import time
from pathlib import Path

DIR = Path(__file__).resolve().parent.parent.parent / "design/agent-workflow"
LOG, ACTIVE = DIR / "nhat-ky.jsonl", DIR / ".phien-dang-chay"
SKILL = "len-lich-noi-dung"
SCRIPTS = ("phan-bo-pillar", "xuat-bai-viet", "dang-facebook")


def short(x, n=220):
    x = x if isinstance(x, str) else json.dumps(x, ensure_ascii=False)
    x = re.sub(r"\s+", " ", x).strip()
    return x if len(x) <= n else x[:n] + "…"


def event(h):
    ev, tool, inp = h.get("hook_event_name"), h.get("tool_name", ""), h.get("tool_input") or {}
    who = h.get("agent_type") or "claude"  # có agent_type = lệnh do subagent gọi
    if ev == "UserPromptSubmit":
        return "user", "claude", short(h.get("prompt", ""))
    if ev == "Stop":
        return "claude", "user", "Dừng lượt, chờ bạn trả lời"
    if ev in ("SubagentStart", "SubagentStop"):
        a = h.get("agent_type", "subagent")
        return a, a, "Bắt đầu" if ev == "SubagentStart" else "Xong"
    if tool in ("Agent", "Task"):
        a = inp.get("subagent_type", "subagent")
        if ev == "PreToolUse":
            return "claude", a, f"Giao việc cho {a}: {short(inp.get('description') or inp.get('prompt', ''), 160)}"
        return a, "claude", "Trả kết quả: " + short(h.get("tool_response", ""), 300)
    if tool == "Bash":
        cmd = inp.get("command", "")
        s = next((s for s in SCRIPTS if s in cmd), None)
        if s and ev == "PreToolUse":
            return who, s, "Chạy " + short(cmd, 160)
        if s:
            r = h.get("tool_response") or {}
            return s, who, short(r.get("stdout", r) if isinstance(r, dict) else r, 400)
    if ev == "PreToolUse":  # thao tác khác: đọc file, tìm web, mở Chrome…
        target = inp.get("file_path") or inp.get("url") or inp.get("query") or inp.get("pattern") or inp.get("command") or ""
        return who, who, f"{tool.replace('mcp__claude-in-chrome__', 'Chrome: ')} {short(target, 140)}"
    return None


def main():
    h = json.loads(sys.stdin.buffer.read().decode("utf-8"))
    sid = h.get("session_id", "")
    start = (h.get("hook_event_name") == "UserPromptSubmit" and SKILL in h.get("prompt", "")) or \
            (h.get("tool_name") == "Skill" and SKILL in json.dumps(h.get("tool_input", {})) and h.get("hook_event_name") == "PreToolUse")
    if start and (not ACTIVE.exists() or ACTIVE.read_text() != sid):
        ACTIVE.write_text(sid)
        LOG.write_text("", encoding="utf-8")  # lượt chạy mới
    if not ACTIVE.exists() or ACTIVE.read_text() != sid:
        return
    e = event(h)
    if e:
        with LOG.open("a", encoding="utf-8") as f:
            f.write(json.dumps({"t": time.strftime("%H:%M:%S"), "from": e[0], "to": e[1], "text": e[2]}, ensure_ascii=False) + "\n")


try:
    main()
except Exception:
    pass  # hook ghi nhật ký không bao giờ được làm hỏng phiên làm việc
