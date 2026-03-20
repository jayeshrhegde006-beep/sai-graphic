const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\Asus\\.gemini\\antigravity\\brain\\58dea96c-3598-49bb-b2c3-385f9cca27b7';
const destDir = 'c:\\Users\\Asus\\Desktop\\g-main\\g-main\\public\\images\\services\\wedding-cards';

const files = [
  { src: 'media__1773760534893.jpg', dest: 'cards1.jpg' },
  { src: 'media__1773760541038.jpg', dest: 'cards2.jpg' },
  { src: 'media__1773760545583.jpg', dest: 'cards3.jpg' },
  { src: 'media__1773760559227.jpg', dest: 'cards4.jpg' },
  { src: 'media__1773760568574.jpg', dest: 'cards5.jpg' }
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
  console.log("All wedding assets copied!");
} catch (err) {
  console.error("Error creating or copying assets:", err);
  process.exit(1);
}
