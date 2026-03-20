const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\Asus\\.gemini\\antigravity\\brain\\58dea96c-3598-49bb-b2c3-385f9cca27b7';
const destDir = 'c:\\Users\\Asus\\Desktop\\g-main\\g-main\\public\\images\\services\\tshirts';

const files = [
  { src: 'media__1773762108950.jpg', dest: 'guy.jpg' },
  { src: 'media__1773762108959.jpg', dest: 'tshirt.jpg' },
  { src: 'media__1773762108975.jpg', dest: 'compare.jpg' },
  { src: 'media__1773762108974.jpg', dest: 'peel.jpg' }
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
  console.log("All tshirts assets copied!");
} catch (err) {
  console.error("Error creating or copying assets:", err);
  process.exit(1);
}
