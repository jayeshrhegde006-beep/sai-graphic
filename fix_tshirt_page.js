const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app', 'services', '[slug]', 'page.tsx');

try {
    let text = fs.readFileSync(filePath, 'utf8');
    const target = '      "/images/services/brochures/flyer4.jpg"\n    ]\n  }\n}';
    const target2 = '      "/images/services/brochures/flyer4.jpg"\r\n    ]\r\n  }\r\n}';
    
    const insertText = `      "/images/services/brochures/flyer4.jpg"
    ]
  },
  "t-shirt-printing": {
    title: "T-Shirt Printing",
    description: "Custom t-shirt printing for teams, events, and merchandise.",
    longDescription: "Our premium custom DTF transfers provide absolute vector layering for graphic layouts giving beautiful scaling for full color depth on fabric substrates setups with zero cracking durability.",
    image: "/images/services/tshirts/guy.jpg",
    features: ["Vibrant DTF Transfers", "No-Cracking Stretchable Adhesion", "Fade-Resistant Inks", "Wholesale Bulk Print Formats"],
    benefits: ["Economical mass replication", "Surface aesthetic improvements", "Absolute high-definition vectoring"],
    gallery: [
      "/images/services/tshirts/guy.jpg",
      "/images/services/tshirts/tshirt.jpg",
      "/images/services/tshirts/compare.jpg",
      "/images/services/tshirts/peel.jpg"
    ]
  }
}`;

    if (text.includes(target)) {
        text = text.replace(target, insertText);
    } else if (text.includes(target2)) {
        text = text.replace(target2, insertText);
    } else {
        console.error("Target string not found!");
        process.exit(1);
    }

    fs.writeFileSync(filePath, text, 'utf8');
    console.log("Done");
} catch (err) {
    console.error(err);
    process.exit(1);
}
