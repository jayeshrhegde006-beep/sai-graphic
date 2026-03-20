const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\Asus\\.gemini\\antigravity\\brain\\58dea96c-3598-49bb-b2c3-385f9cca27b7';
const destDir = 'c:\\Users\\Asus\\Desktop\\g-main\\g-main\\public\\images\\services\\offset';

const files = [
  { src: 'media__1773758744299.jpg', dest: 'machine.jpg' },
  { src: 'media__1773758751918.jpg', dest: 'poster.jpg' },
  { src: 'media__1773758762395.jpg', dest: 'rollers_closeup.jpg' },
  { src: 'media__1773758776107.jpg', dest: 'rollers_sidetop.jpg' },
  { src: 'media__1773758783417.jpg', dest: 'diagram.jpg' }
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
  console.log("All offset assets copied!");
} catch (err) {
  console.error("Error creating or copying assets:", err);
  process.exit(1);
}
