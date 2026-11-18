# Chạy skill quet-seeding không cần người. Task Scheduler gọi file này mỗi 5 giờ.
Set-Location (Split-Path (Split-Path $PSScriptRoot -Parent) -Parent)
$log = "noi-dung\seeding\log.txt"
"=== $(Get-Date -Format 'yyyy-MM-dd HH:mm') ===" | Out-File $log -Append -Encoding utf8
claude --chrome -p "/quet-seeding" --permission-mode acceptEdits --allowedTools "mcp__claude-in-chrome" "Bash(python marketing/scripts/xuat-seeding.py:*)" "Bash(python marketing/scripts/gui-zalo.py:*)" 2>&1 | Out-File $log -Append -Encoding utf8
