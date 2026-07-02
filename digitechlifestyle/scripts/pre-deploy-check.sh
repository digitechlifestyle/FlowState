#!/usr/bin/env bash
# Pre-deploy safety check for digitechlifestyle.com
# Run before every deploy. All checks must pass.

set -euo pipefail

PASS=0
FAIL=0
SSH_KEY="$HOME/.ssh/digitech_deploy"
SSH_HOST="u505433088@77.37.37.226"
SSH_PORT="65002"

ok()   { echo "✅ $1"; PASS=$((PASS+1)); }
fail() { echo "❌ $1"; FAIL=$((FAIL+1)); }

echo "=== DigiTech Pre-Deploy Checks ==="

# 1. articles.ts image rewrite is intact
if grep -q '"https://www.digitechlifestyle.com"' "$(dirname "$0")/../src/lib/articles.ts" && \
   grep -q '"https://digitechlifestyle.com"' "$(dirname "$0")/../src/lib/articles.ts"; then
  ok "articles.ts image rewrite intact"
else
  fail "articles.ts image rewrite MISSING or CHANGED — do not deploy"
fi

# 2. deploy.sh has wp-content exclude
if grep -q 'exclude="wp-content/"' "$(dirname "$0")/../deploy.sh"; then
  ok "deploy.sh has --exclude wp-content/"
else
  fail "deploy.sh MISSING --exclude wp-content/ — symlink will be deleted"
fi

# 3. deploy.sh has .htaccess exclude
if grep -q 'exclude=".htaccess"' "$(dirname "$0")/../deploy.sh"; then
  ok "deploy.sh has --exclude .htaccess"
else
  fail "deploy.sh MISSING --exclude .htaccess"
fi

# 4. Server symlink exists
SYMLINK=$(ssh -i "$SSH_KEY" -p "$SSH_PORT" -o StrictHostKeyChecking=no -o ConnectTimeout=10 "$SSH_HOST" \
  "test -L /home/u505433088/domains/digitechlifestyle.com/public_html/wp-content/uploads && echo ok || echo missing" 2>/dev/null)
if [ "$SYMLINK" = "ok" ]; then
  ok "Server uploads symlink exists"
else
  fail "Server uploads symlink MISSING — images will break after deploy"
fi

# 5. Test image returns 200
HTTP=$(curl -s -o /dev/null -w "%{http_code}" \
  "https://digitechlifestyle.com/wp-content/uploads/2026/06/the-psychology-of-crypto-investing-avoiding-fomo-a.jpg")
if [ "$HTTP" = "200" ]; then
  ok "Sample image returns 200"
else
  fail "Sample image returns $HTTP — images may be broken"
fi

# 6. hostingersite.com not exposed in articles.ts
if grep -q 'hostingersite.com' "$(dirname "$0")/../src/lib/articles.ts"; then
  fail "articles.ts exposes hostingersite.com subdomain — remove it"
else
  ok "articles.ts does not expose internal subdomain"
fi

echo ""
echo "=== Results: $PASS passed, $FAIL failed ==="

if [ "$FAIL" -gt 0 ]; then
  echo "❌ DEPLOY BLOCKED — fix failures above before deploying"
  exit 1
else
  echo "✅ All checks passed — safe to deploy"
  exit 0
fi
