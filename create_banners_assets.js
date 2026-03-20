const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\Asus\\.gemini\\antigravity\\brain\\58dea96c-3598-49bb-b2c3-385f9cca27b7';
const destDir = 'c:\\Users\\Asus\\Desktop\\g-main\\g-main\\public\\images\\services\\banners';

const files = [
  { src: 'media__1773760097547.jpg', dest: 'tesla.jpg' },
  { src: 'media__1773760116530.png', dest: 'launch.png' },
  { src: 'media__1773760119967.jpg', dest: 'heavy.jpg' },
  { src: 'media__1773760124168.jpg', dest: 'flyer.jpg' },
  { src: 'media__1773760127960.png', dest: 'whitespace.png' }
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
  console.log("All banners assets copied!");
} catch (err) {
  console.error("Error creating or copying assets:", err);
  process.exit(1);
}
