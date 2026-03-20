const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app', 'services', '[slug]', 'page.tsx');

try {
    let text = fs.readFileSync(filePath, 'utf8');
    const target = '    benefits: ["24/7 Brand Visibility", "Attracts nocturnal customers", "Highly premium storefront feel"]';
    
    if (!text.includes(target)) {
        console.error("Target string not found!");
        process.exit(1);
    }
    
    console.log("Found target!");
    
    const replacement = target + `\n  },\n  "offset-printing": {\n    title: "Offset Printing",\n    description: "Professional offset printing for bulk orders and publications.",\n    longDescription: "Our offset printing solutions are optimized for high-volume jobs giving sharp vector text alignments with color accuracy spanning large print formats with consistent gradient blending layers.",\n    image: "/images/services/offset/machine.jpg",\n    features: ["High-speed Production", "Rich ink consistency", "Pre-press plate mapping", "Cost-effective bulk scaling"],\n    benefits: ["Economical mass replication", "Absolute high definition text vectoring", "Durable print density layers"],\n    gallery: [\n      "/images/services/offset/machine.jpg",\n      "/images/services/offset/poster.jpg",\n      "/images/services/offset/rollers_closeup.jpg",\n      "/images/services/offset/rollers_sidetop.jpg",\n      "/images/services/offset/diagram.jpg"\n    ]\n  }\n}`;

    // There might be empty lines before export default, we can replace that whole slice
    const lines = text.split('\n');
    let targetIndex = -1;
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes(target)) {
            targetIndex = i;
            break;
        }
    }

    if (targetIndex !== -1) {
        console.log("Replacing from line " + targetIndex);
        // Replace up to wherever export default starts
        let endIdx = targetIndex + 1;
        while (endIdx < lines.length && !lines[endIdx].includes('export default')) {
            endIdx++;
        }
        
        lines.splice(targetIndex + 1, endIdx - targetIndex - 1, `  },\n  "offset-printing": {\n    title: "Offset Printing",\n    description: "Professional offset printing for bulk orders and publications.",\n    longDescription: "Our offset printing solutions are optimized for high-volume jobs giving sharp vector text alignments with color accuracy spanning large print formats with consistent gradient blending layers.",\n    image: "/images/services/offset/machine.jpg",\n    features: ["High-speed Production", "Rich ink consistency", "Pre-press plate mapping", "Cost-effective bulk scaling"],\n    benefits: ["Economical mass replication", "Absolute high definition text vectoring", "Durable print density layers"],\n    gallery: [\n      "/images/services/offset/machine.jpg",\n      "/images/services/offset/poster.jpg",\n      "/images/services/offset/rollers_closeup.jpg",\n      "/images/services/offset/rollers_sidetop.jpg",\n      "/images/services/offset/diagram.jpg"\n    ]\n  }\n}\n`);
        
        fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
        console.log("Done");
    } else {
        console.error("Index not found!");
    }
} catch (err) {
    console.error(err);
    process.exit(1);
}
