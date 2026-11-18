"""Gửi tin hoặc file qua Zalo Bot. Token và chat id lấy từ biến môi trường, không ghi trong repo.
  python marketing/scripts/gui-zalo.py --chat-id                 # in chat id của người đã nhắn bot (chạy 1 lần để lấy ZALO_CHAT_ID)
  python marketing/scripts/gui-zalo.py "nội dung"                # gửi tin nhắn
  python marketing/scripts/gui-zalo.py "chú thích" file.xlsx     # gửi file kèm chú thích
Cần: ZALO_BOT_TOKEN (và ZALO_CHAT_ID khi gửi). Chỉ in ASCII, không bao giờ in token.
"""
import os
import sys
from pathlib import Path

import requests

API = "https://bot-api.zaloplatforms.com/bot{}/{}"
token = os.environ.get("ZALO_BOT_TOKEN")
if not token:
    sys.exit("Thieu bien moi truong ZALO_BOT_TOKEN")


def call(method, **kw):
    try:
        r = requests.post(API.format(token, method), timeout=60, **kw)
        return r.json()
    except Exception as e:  # không in e: thông báo lỗi của requests chứa URL có token
        sys.exit(f"Loi mang khi goi {method}: {type(e).__name__}")


args = sys.argv[1:]
if args == ["--chat-id"]:
    print("Dang cho tin nhan (toi da ~2 phut). Hay nhan bot 1 tin tren Zalo ngay bay gio...", flush=True)
    for _ in range(5):  # getUpdates chỉ chờ ~25s mỗi lần
        d = call("getUpdates", data={"timeout": "25"})
        if d.get("ok"):
            msg = (d.get("result") or {}).get("message") or {}
            cid = (msg.get("chat") or {}).get("id")
            if cid:
                print(cid)
                sys.exit(0)
        elif d.get("error_code") != 408:
            sys.exit(f"LOI {d.get('error_code')} {d.get('description')}")
    sys.exit("Het gio, chua nhan duoc tin nao. Kiem tra dung ten bot roi chay lai.")

chat_id = os.environ.get("ZALO_CHAT_ID")
if not args or not chat_id:
    sys.exit("Dung: gui-zalo.py \"noi dung\" [file]  (can ZALO_CHAT_ID)")
text = args[0]
if len(args) > 1:
    p = Path(args[1])
    with p.open("rb") as f:
        d = call("sendFile", data={"chat_id": chat_id, "caption": text[:2000], "file_name": p.name},
                 files={"file": (p.name, f)})
else:
    d = call("sendMessage", json={"chat_id": chat_id, "text": text[:2000]})
print("OK" if d.get("ok") else f"LOI {d.get('error_code')} {d.get('description')}")
sys.exit(0 if d.get("ok") else 1)
