const fs = require('fs');
const path = require('path');

function processDir(dir) {
    fs.readdirSync(dir).forEach(file => {
        let fullPath = path.join(dir, file);
        if (fs.lstatSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.jsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let original = content;

            // Remove unoptimized={true} and unoptimized
            content = content.replace(/unoptimized=\{true\}/g, '');
            content = content.replace(/unoptimized\s/g, ' ');

            if (content !== original) {
                fs.writeFileSync(fullPath, content);
                console.log('Optimized Next/Image configurations in: ' + fullPath);
            }
        }
    });
}

const appDir = path.join(__dirname, 'app');
if(fs.existsSync(appDir)) processDir(appDir);

const compDir = path.join(__dirname, 'components');
if(fs.existsSync(compDir)) processDir(compDir);
