# DigiTech Lifestyle — Site Rules for Claude

**READ THIS BEFORE TOUCHING ANYTHING. NO EXCEPTIONS.**

---

## ⛔ NEVER TOUCH THESE — EVER

### 1. `src/lib/articles.ts` image rewrite
This line must NEVER be changed, removed, or "improved":
```typescript
const wpImage = rawImage?.replace(
  "https://www.digitechlifestyle.com",
  "https://digitechlifestyle.com"
);
```
- DO NOT change target to `hostingersite.com` → 422 errors
- DO NOT change target to `www.digitechlifestyle.com` → SSL broken
- DO NOT remove it → images 404

### 2. `deploy.sh` rsync excludes
These excludes must NEVER be removed:
```
--exclude="wp-content/"
--exclude=".htaccess"
--exclude="wp-api-proxy.php"
--exclude="wp-*.php"
--exclude="prices.php"
```
Removing `--exclude="wp-content/"` deletes the uploads symlink on the server → ALL images break.

### 3. Server symlink — never recreate unless it's actually missing
Path: `/home/u505433088/domains/digitechlifestyle.com/public_html/wp-content/uploads`
→ `/home/u505433088/domains/digitechlifestyle-com-206789.hostingersite.com/public_html/wp-content/uploads`
Verify it exists BEFORE assuming it's broken. Only recreate if `ls -la` confirms it's gone.

### 4. NEVER expose `digitechlifestyle-com-206789.hostingersite.com` in public-facing HTML
This is the internal WP subdomain. It must never appear in rendered page content.

---

## ✅ BEFORE EVERY DEPLOY — RUN THIS CHECK

```bash
bash /Users/joerobertson/Claude\ -\ Flowstate/digitechlifestyle/scripts/pre-deploy-check.sh
```

All checks must pass. If any fail, fix the root cause — do NOT deploy with failures.

---

## ✅ BEFORE TOUCHING ANY FILE

1. Read the file first — understand what it does
2. Confirm the change is ONLY what was asked
3. If the change touches `articles.ts`, `deploy.sh`, or `.htaccess` → re-read this CLAUDE.md first

---

## ✅ AFTER EVERY DEPLOY

Wait 60 seconds, then verify:
- `https://digitechlifestyle.com/` returns recent articles (not old dates)
- `https://digitechlifestyle.com/wp-content/uploads/2026/06/the-psychology-of-crypto-investing-avoiding-fomo-a.jpg` returns 200
- No console errors on main pages

---

## Architecture — Know This Before Touching Anything

- **Static Next.js site** — `output: "export"`, built locally, rsynced to Hostinger
- **WP on separate subdomain** — `digitechlifestyle-com-206789.hostingersite.com`
- **Images served via symlink** — server symlink bridges WP uploads to static site domain
- **CDN** — Hostinger `hcdn` caches HTML at edge nodes. TTL ~1 hour. No API to purge.
- **`.htaccess`** — `CacheEnable off` prevents new caching after deploy. Kept via rsync `--exclude`.
- **WP API proxy** — `wp-api-proxy.php` proxies `/wp-json/` to 206789 subdomain. Never delete it.
- **Publishing** — Articles publish via launchd queue (`queue-publisher.mjs`) at 9am, 2x/day

---

## Common Mistakes I Keep Making — Stop Doing These

1. **Saying "fixed" before verifying from the user's perspective** — always fetch the URL and check status 200 before claiming fixed
2. **"Improving" articles.ts image rewrite** — do not touch it
3. **Running rsync without the excludes** — always check deploy.sh has all excludes before running
4. **Not checking if symlink exists before recreating it** — always `ls -la` first
5. **Testing from my location and assuming UK CDN is the same** — CDN edge nodes differ by geography
