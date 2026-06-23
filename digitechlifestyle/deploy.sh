#!/bin/bash
# DigiTech Lifestyle — build + deploy to Hostinger
# Runs nightly via launchd. Can also run manually: ./deploy.sh

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
LOG="$SCRIPT_DIR/deploy.log"
SSH_KEY="$HOME/.ssh/digitech_deploy"
SSH_HOST="u505433088@77.37.37.226"
SSH_PORT=65002
REMOTE_PATH="/home/u505433088/domains/digitechlifestyle.com/public_html/"

echo "[$(date '+%Y-%m-%d %H:%M:%S')] Build started" >> "$LOG"

# Build
cd "$SCRIPT_DIR"
export PATH="/Users/joerobertson/.nvm/versions/node/v24.15.0/bin:$PATH"
npm run build >> "$LOG" 2>&1

echo "[$(date '+%Y-%m-%d %H:%M:%S')] Build done. Deploying..." >> "$LOG"

# Deploy
rsync -a --delete-after \
  -e "ssh -i $SSH_KEY -p $SSH_PORT -o StrictHostKeyChecking=no" \
  "$SCRIPT_DIR/out/" \
  "$SSH_HOST:$REMOTE_PATH" \
  --exclude="index.php" \
  --exclude="default.php" \
  --exclude="license.txt" \
  --exclude=".htaccess" \
  --exclude="wp-api-proxy.php" \
  --exclude="wp-*.php" \
  --exclude="prices.php" \
  --filter="protect _next/static/chunks/***" \
  --filter="protect _next/static/css/***" \
  >> "$LOG" 2>&1

echo "[$(date '+%Y-%m-%d %H:%M:%S')] Deploy complete." >> "$LOG"
