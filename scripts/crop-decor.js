const sharp = require('sharp');
const path = require('path');

const src = path.resolve(__dirname, '../src/assets/pp.png');
const out = path.resolve(__dirname, '../src/assets/decor-row.png');
const rowHeight = parseInt(process.argv[2], 10) || 48; 
(async () => {
  try {
    const image = sharp(src);
    const meta = await image.metadata();
    const width = meta.width;
    const height = Math.min(rowHeight, meta.height);

    await image.extract({ left: 0, top: 0, width, height }).toFile(out);
    console.log(`Cropped top ${height}px row from ${path.basename(src)} -> ${path.basename(out)}`);
  } catch (err) {
    console.error('Crop failed:', err.message);
    process.exit(1);
  }
})();
