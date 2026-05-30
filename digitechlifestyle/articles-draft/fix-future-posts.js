const https = require('https');
const AUTH = Buffer.from('digitechlifestyle@gmail.com:gdIF WLqo 4O8R y9uQ Uskd Htgw').toString('base64');

// 37 future posts — reassign to Jan 10 – Feb 15 2026 (past, before existing Mar 2026 content)
// Ordered oldest-first so they appear in logical sequence on blog
const ids = [
  421, 422, 423, 424, 425, 426, 427, 428, 429, 430, // batch6: Jan10-19
  431, 432, 433, 434, 435, 436, 437, 438, 439, 440, // batch7: Jan20-29
  441, 442, 443, 444, 445, 446, 447, 448, 449, 450, // batch8: Jan30-Feb8
  451, 452, 453, 454, 455, 456, 457                  // batch9: Feb9-15
];

// Generate sequential dates Jan 10 – Feb 15 2026
function getDate(index) {
  const start = new Date('2026-01-10T09:00:00');
  start.setDate(start.getDate() + index);
  return start.toISOString().slice(0, 19);
}

function updatePost(id, date) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({ status: 'publish', date });
    const options = {
      hostname: 'digitechlifestyle.com',
      path: `/wp-json/wp/v2/posts/${id}`,
      method: 'POST',
      headers: { 'Authorization': 'Basic ' + AUTH, 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) }
    };
    const req = https.request(options, res => {
      let d = ''; res.on('data', c => d += c);
      res.on('end', () => { try { const j = JSON.parse(d); resolve(j); } catch(e) { reject(e); } });
    });
    req.on('error', reject); req.write(body); req.end();
  });
}

async function main() {
  console.log('Fixing 37 future posts → publish with Jan 10 – Feb 15 2026 dates...');
  for (let i = 0; i < ids.length; i++) {
    const id = ids[i];
    const date = getDate(i);
    try {
      const r = await updatePost(id, date);
      if (r.status === 'publish') {
        console.log(`✅ ${id} → ${date} | ${r.title.rendered.slice(0,50)}`);
      } else {
        console.log(`⚠️  ${id} → ${date} status=${r.status} | ${(r.message||'').slice(0,60)}`);
      }
    } catch(err) {
      console.error(`❌ ${id}: ${err.message}`);
    }
  }
  console.log('Done.');
}

main();
