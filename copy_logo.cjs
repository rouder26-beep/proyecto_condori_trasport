const fs = require('fs');
const path = require('path');

const srcLogo = 'C:/Users/roude/.gemini/antigravity-ide/brain/72c70372-9d88-462f-8b0c-95cb96eb540d/.user_uploaded/media_1790295707316.png';
const destLogo = path.join(__dirname, 'public', 'images', 'logo.png');

if (fs.existsSync(srcLogo)) {
  fs.copyFileSync(srcLogo, destLogo);
  console.log('Copied official logo to public/images/logo.png successfully!');
} else {
  console.log('Source logo file not found');
}
