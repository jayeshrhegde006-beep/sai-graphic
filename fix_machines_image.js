const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'components', 'machines-section.tsx');

try {
    let text = fs.readFileSync(filePath, 'utf8');

    // Due to tool truncation bug, it was deleted! Restoring it manually at the exact point it got lost
    const parts = text.split("            <div className=\"relative aspect-[4/3] rounded-2xl overflow-hidden glass\">\n\n              <div className=\"absolute inset-0 bg-gradient-to-t from-background");
    
    if (parts.length > 1) {
        text = parts[0] + "            <div className=\"relative aspect-[4/3] rounded-2xl overflow-hidden glass\">\n              {/* Machine Image */}\n              <Image\n                src={machines[activeIndex].image}\n                alt={machines[activeIndex].name}\n                fill\n                priority={true}\n                className=\"object-cover transition-all duration-500\"\n              />\n              \n              <div className=\"absolute inset-0 bg-gradient-to-t from-background" + parts[1];
        
        fs.writeFileSync(filePath, text, 'utf8');
        console.log("Restored Machine Section Image with Priority True");
    } else {
        console.log("Could not find anchor to inject.");
    }
} catch(e) {
    console.error(e);
}
