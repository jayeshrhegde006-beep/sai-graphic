const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\Asus\\.gemini\\antigravity\\brain\\58dea96c-3598-49bb-b2c3-385f9cca27b7';
const destDir = 'c:\\Users\\Asus\\Desktop\\g-main\\g-main\\public\\images\\services\\glow-sign';

const files = [
  { src: 'media__1773758981363.png', dest: 'glow1.png' },
  { src: 'media__1773758988864.png', dest: 'glow2.png' },
  { src: 'media__1773758994840.png', dest: 'glow3.png' },
  { src: 'media__1773759002149.png', dest: 'glow4.png' },
  { src: 'media__1773759013898.png', dest: 'glow5.png' }
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
  console.log("All glow sign assets copied!");
} catch (err) {
  console.error("Error creating or copying assets:", err);
  process.exit(1);
}
