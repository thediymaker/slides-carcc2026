// One-off helper: rasterize the SVGs in images/ to PNG.
// Real diagram: architecture-diagram.svg -> architecture-diagram.png
// Placeholders: _placeholder-<name>.svg -> <name>.png
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'images');
const jobs = [
  ['architecture-diagram.svg', 'architecture-diagram.png'],
  ['_placeholder-hero-racks.svg', 'hero-racks.png'],
  ['_placeholder-portal-usage.svg', 'portal-usage.png'],
  ['_placeholder-gaudi2-node.svg', 'gaudi2-node.png'],
  ['_placeholder-obleth-dashboard.svg', 'obleth-dashboard.png'],
  ['_placeholder-campus-chatbot.svg', 'campus-chatbot.png'],
];

(async () => {
  for (const [src, out] of jobs) {
    const srcPath = path.join(dir, src);
    if (!fs.existsSync(srcPath)) { console.log('skip (missing):', src); continue; }
    await sharp(srcPath, { density: 192 }).png().toFile(path.join(dir, out));
    console.log(src, '->', out);
  }
})();
