const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'components', 'services-section.tsx');

try {
    let text = fs.readFileSync(filePath, 'utf8');
    const lines = text.split('\n');
    let targetIndex = -1;
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        const prev = i > 0 ? lines[i-1].trim() : '';
        const next = i + 1 < lines.length ? lines[i+1].trim() : '';
        const next2 = i + 2 < lines.length ? lines[i+2].trim() : '';
        const next3 = i+3 < lines.length ? lines[i+3] : '';

        if (line === '{' && next === '' && next2 === '},' && next3.includes('slug: "glow-sign-boards"')) {
            targetIndex = i;
            break;
        }
    }

    if (targetIndex !== -1) {
        console.log("Found pattern at index " + targetIndex);
        
        const insertBlock = `  {
    slug: "offset-printing",
    icon: Printer,
    title: "Offset Printing",
    description: "Professional offset printing for bulk orders and publications",
    color: "from-green-500/20 to-emerald-500/20",
    image: "/images/services/offset/machine.jpg",
  },`;
        
        lines.splice(targetIndex, 3, insertBlock);
        
        fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
        console.log("Done");
    } else {
        console.error("Layout target still ambiguous or not found!");
        process.exit(1);
    }

} catch (err) {
    console.error(err);
    process.exit(1);
}
