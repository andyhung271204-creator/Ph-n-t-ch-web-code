"""Gửi tin / file qua Telegram Bot và chờ người dùng trả lời. Token, chat id lấy từ biến môi trường.
  python marketing/scripts/gui-telegram.py --chat-id              # nhắn bot 1 tin rồi chạy: in chat id (lấy TELEGRAM_CHAT_ID)
  python marketing/scripts/gui-telegram.py "nội dung"             # gửi tin (tự cắt nếu > 4000 ký tự)
  python marketing/scripts/gui-telegram.py "chú thích" file.xlsx  # gửi file kèm chú thích
  python marketing/scripts/gui-telegram.py --cho [giờ]            # chờ tin trả lời tiếp theo (mặc định 12 giờ), in nội dung rồi thoát
Cần TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID. Chỉ nhận tin từ đúng TELEGRAM_CHAT_ID. Không bao giờ in token.
"""
import os
import sys
import time
from pathlib import Path

import requests

sys.stdout.reconfigure(encoding="utf-8")
sys.stderr.reconfigure(encoding="utf-8")
token = os.environ.get("TELEGRAM_BOT_TOKEN")
if not token:
    sys.exit("Thiếu biến môi trường TELEGRAM_BOT_TOKEN")
API = f"https://api.telegram.org/bot{token}/"


def call(method, timeout=60, **kw):
    try:
        d = requests.post(API + method, timeout=timeout, **kw).json()
    except Exception as e:  # không in e: thông báo lỗi chứa URL có token
        sys.exit(f"Lỗi mạng khi gọi {method}: {type(e).__name__}")
    if not d.get("ok"):
        sys.exit(f"LỖI {d.get('error_code')} {d.get('description')}")
    return d["result"]


def updates(offset, wait):
    return call("getUpdates", timeout=wait + 10, data={"offset": offset, "timeout": wait, "allowed_updates": '["message"]'})


args = sys.argv[1:]
chat_id = os.environ.get("TELEGRAM_CHAT_ID", "")

if args[:1] == ["--chat-id"]:
    for u in updates(0, 30):
        print(u["message"]["chat"]["id"], u["message"].get("from", {}).get("first_name", ""))
    sys.exit(0)

if not chat_id:
    sys.exit("Thiếu TELEGRAM_CHAT_ID — chạy --chat-id để lấy")

if args[:1] == ["--cho"]:
    deadline = time.time() + float(args[1] if len(args) > 1 else 12) * 3600
    old = updates(-1, 0)  # bỏ qua tin cũ, chỉ chờ tin mới
    offset = old[-1]["update_id"] + 1 if old else 0
    while time.time() < deadline:
        for u in updates(offset, 50):
            offset = u["update_id"] + 1
            m = u.get("message") or {}
            if str(m.get("chat", {}).get("id")) == chat_id and m.get("text"):
                updates(offset, 0)  # xác nhận đã đọc để lần chờ sau không nhận lại
                print("TRẢ LỜI TỪ TELEGRAM:", m["text"])
                sys.exit(0)
    sys.exit("Hết giờ chờ, chưa có trả lời trên Telegram")

if not args:
    sys.exit(__doc__)
text = args[0]
if len(args) > 1:
    p = Path(args[1])
    with p.open("rb") as f:
        call("sendDocument", data={"chat_id": chat_id, "caption": text[:1000]}, files={"document": (p.name, f)})
else:
    for i in range(0, len(text), 4000):  # giới hạn 4096 ký tự/tin
        call("sendMessage", data={"chat_id": chat_id, "text": text[i:i + 4000]})
print("OK")
