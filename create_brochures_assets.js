const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\Asus\\.gemini\\antigravity\\brain\\58dea96c-3598-49bb-b2c3-385f9cca27b7';
const destDir = 'c:\\Users\\Asus\\Desktop\\g-main\\g-main\\public\\images\\services\\brochures';

const files = [
  { src: 'media__1773761556393.jpg', dest: 'flyer1.jpg' },
  { src: 'media__1773761561412.jpg', dest: 'brochure2.jpg' },
  { src: 'media__1773761574740.jpg', dest: 'flyer3.jpg' },
  { src: 'media__1773761578361.jpg', dest: 'flyer4.jpg' }
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
  console.log("All brochures assets copied!");
} catch (err) {
  console.error("Error creating or copying assets:", err);
  process.exit(1);
}
