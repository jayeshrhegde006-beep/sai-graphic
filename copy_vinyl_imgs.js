const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\Asus\\.gemini\\antigravity\\brain\\58dea96c-3598-49bb-b2c3-385f9cca27b7';
const destDir = 'c:\\Users\\Asus\\Desktop\\g-main\\g-main\\public\\images\\services\\vinyl';

const files = [
  { src: 'smoothiesvan_hd_1773758094489.png', dest: 'smoothiesvan.png' },
  { src: 'pizzawindow_hd_1773758130597.png', dest: 'pizzawindow.png' },
  { src: 'electriccar_hd_1773758167229.png', dest: 'electriccar.png' },
  { src: 'floorsticker_hd_1773758202605.png', dest: 'floorsticker.png' },
  { src: 'wallmural_hd_1773758244515.png', dest: 'wallmural.png' }
];

files.forEach(file => {
  const srcPath = path.join(srcDir, file.src);
  const destPath = path.join(destDir, file.dest);
  try {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${file.src} to ${file.dest}`);
  } catch (err) {
    console.error(`Error copying ${file.src}:`, err);
    process.exit(1);
  }
});
console.log("All files copied!");
