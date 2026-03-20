const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\Asus\\.gemini\\antigravity\\brain\\58dea96c-3598-49bb-b2c3-385f9cca27b7';
const destDir = 'c:\\Users\\Asus\\Desktop\\g-main\\g-main\\public\\images\\services\\business-cards';

const files = [
  { src: 'media__1773761041358.jpg', dest: 'biz1.jpg' },
  { src: 'media__1773761044674.jpg', dest: 'biz2.jpg' },
  { src: 'media__1773761049939.jpg', dest: 'biz3.jpg' },
  { src: 'media__1773761054054.jpg', dest: 'biz4.jpg' }
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
  console.log("All business assets copied!");
} catch (err) {
  console.error("Error creating or copying assets:", err);
  process.exit(1);
}
