const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\Asus\\.gemini\\antigravity\\brain\\58dea96c-3598-49bb-b2c3-385f9cca27b7';
const destDir = 'c:\\Users\\Asus\\Desktop\\g-main\\g-main\\public\\images\\services\\hoardings';

const files = [
  { src: 'hoarding_blue_1773759693661.png', dest: 'hoarding1.png' },
  { src: 'hoarding_red_1773759732741.png', dest: 'hoarding2.png' },
  { src: 'hoarding_gold_1773759769242.png', dest: 'hoarding3.png' },
  { src: 'hoarding_sunset_1773759810297.png', dest: 'hoarding4.png' },
  { src: 'hoarding_night_dark_1773759847874.png', dest: 'hoarding5.png' }
];

try {
  if (!fs.existsSync(destDir)){
      fs.mkdirSync(destDir, { recursive: true });
  }

  files.forEach(file => {
    const srcPath = path.join(srcDir, file.src);
    const destPath = path.join(destDir, file.dest);
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${file.src} to ${file.dest}`);
  });
  console.log("All hoarding assets copied!");
} catch (err) {
  console.error("Error creating or copying assets:", err);
  process.exit(1);
}
