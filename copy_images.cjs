const fs = require('fs');
const path = require('path');

const srcDir = 'C:/Users/roude/.gemini/antigravity-ide/brain/72c70372-9d88-462f-8b0c-95cb96eb540d';
const destDir = path.join(__dirname, 'public', 'images');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = [
  { src: 'cusco_hero_banner_1790291012286.jpg', dest: 'hero.jpg' },
  { src: 'fleet_sprinter_1790291030583.jpg', dest: 'sprinter.jpg' },
  { src: 'fleet_minivan_1790291050785.jpg', dest: 'minivan.jpg' },
  { src: 'fleet_suv_1790291074402.jpg', dest: 'suv.jpg' }
];

files.forEach(f => {
  const sPath = path.join(srcDir, f.src);
  const dPath = path.join(destDir, f.dest);
  if (fs.existsSync(sPath)) {
    fs.copyFileSync(sPath, dPath);
    console.log(`Copied ${f.src} to ${f.dest}`);
  } else {
    console.log(`Missing ${sPath}`);
  }
});
