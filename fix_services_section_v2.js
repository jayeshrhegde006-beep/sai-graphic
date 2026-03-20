const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'components', 'services-section.tsx');

try {
    let text = fs.readFileSync(filePath, 'utf8');
    
    const insertBlock = `  {
    slug: "offset-printing",
    icon: Printer,
    title: "Offset Printing",
    description: "Professional offset printing for bulk orders and publications",
    color: "from-green-500/20 to-emerald-500/20",
    image: "/images/services/offset/machine.jpg",
  },`;

    const searchStr = 'slug: "vinyl-printing"';
    const vinylIndex = text.indexOf(searchStr);

    if (vinylIndex !== -1) {
        console.log("Found vinyl at " + vinylIndex);
        
        // Find the next empty block { } following vinyl printing
        const partAfterVinyl = text.substring(vinylIndex);
        
        // Regex for { followed immediately or almost immediately by } with only whitespaces/newlines in between
        const match = partAfterVinyl.match(/\{\s*\}/);
        
        if (match) {
            console.log("Found empty block to replace!");
            const replacedPart = partAfterVinyl.replace(/\{\s*\}/, insertBlock);
            text = text.substring(0, vinylIndex) + replacedPart;
            fs.writeFileSync(filePath, text, 'utf8');
            console.log("Done");
        } else {
            console.error("No empty block found after vinyl-printing!");
        }
    } else {
        console.error("Vinyl printing block not found!");
    }

} catch (err) {
    console.error(err);
    process.exit(1);
}
