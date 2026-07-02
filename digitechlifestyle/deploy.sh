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

# Safety check — must pass before deploy proceeds
bash "$SCRIPT_DIR/scripts/pre-deploy-check.sh" >> "$LOG" 2>&1 || {
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] ❌ Pre-deploy checks FAILED — deploy aborted" >> "$LOG"
  exit 1
}

# Build
cd "$SCRIPT_DIR"
export PATH="/Users/joerobertson/.nvm/versions/node/v24.18.0/bin:$PATH"
# Clear Next.js fetch cache so WP articles are always fresh
rm -rf .next/cache/fetch-cache
npm run build >> "$LOG" 2>&1

echo "[$(date '+%Y-%m-%d %H:%M:%S')] Build done. Deploying..." >> "$LOG"

# Deploy
rsync -a --delete-after --ignore-errors \
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
  --exclude="wp-content/" \
  >> "$LOG" 2>&1

# Verify key pages made it to server
ssh -i "$SSH_KEY" -p "$SSH_PORT" -o StrictHostKeyChecking=no "$SSH_HOST" \
  "for p in scam-watch resources news tool-directory reviews newsletter about blog; do
    [ -f /home/u505433088/domains/digitechlifestyle.com/public_html/\$p/index.html ] && echo \"✅ \$p\" || echo \"❌ MISSING: \$p\";
  done" >> "$LOG" 2>&1

# Recreate uploads symlink (rsync --delete-after removes it every deploy)
ssh -i "$SSH_KEY" -p "$SSH_PORT" -o StrictHostKeyChecking=no "$SSH_HOST" \
  "ln -sf /home/u505433088/domains/digitechlifestyle-com-206789.hostingersite.com/public_html/wp-content/uploads /home/u505433088/domains/digitechlifestyle.com/public_html/wp-content/uploads" \
  >> "$LOG" 2>&1

echo "[$(date '+%Y-%m-%d %H:%M:%S')] Deploy complete." >> "$LOG"
