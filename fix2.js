const fs = require('fs');
let c = fs.readFileSync('app/page.js', 'utf8');
c = c.replace(/\{\/\* ===== SHEET A-12 \/\/ LET'S WORK ===== \*\/\}/, '</section>\n\n      {/* ===== SHEET A-12 // LET\'S WORK ===== */}');
c = c.replace(/\?"/g, '—');
fs.writeFileSync('app/page.js', c, 'utf8');
