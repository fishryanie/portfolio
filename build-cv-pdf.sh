#!/usr/bin/env bash
set -euo pipefail

# Resolve project root from this script location.
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

HTML_FILE="$ROOT_DIR/public/cv/Phan-Hong-Quan-Executive-CV.html"
PDF_FILE="$ROOT_DIR/public/cv/Phan-Hong-Quan-Executive-CV.pdf"

# Default Chrome binary path on macOS.
CHROME_BIN="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

if [[ ! -f "$HTML_FILE" ]]; then
  echo "Khong tim thay file HTML: $HTML_FILE" >&2
  exit 1
fi

if [[ ! -x "$CHROME_BIN" ]]; then
  echo "Khong tim thay Google Chrome tai: $CHROME_BIN" >&2
  echo "Hay cap nhat bien CHROME_BIN trong script neu ban dung Chromium/duong dan khac." >&2
  exit 1
fi

"$CHROME_BIN" \
  --headless \
  --disable-gpu \
  --run-all-compositor-stages-before-draw \
  --virtual-time-budget=10000 \
  --no-pdf-header-footer \
  --print-to-pdf="$PDF_FILE" \
  "file://$HTML_FILE"

echo "Da tao PDF: $PDF_FILE"
