const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app', 'services', '[slug]', 'page.tsx');

try {
    let text = fs.readFileSync(filePath, 'utf8');
    const target = '      "/images/services/hoardings/hoarding5.png"\n    ]\n  }\n}';
    const target2 = '      "/images/services/hoardings/hoarding5.png"\r\n    ]\r\n  }\r\n}';
    
    const insertText = `      "/images/services/hoardings/hoarding5.png"
    ]
  },
  "stickers-labels": {
    title: "Stickers & Labels",
    description: "Custom stickers and product labels in all shapes and sizes.",
    longDescription: "Our custom labels provide optimal product vectoring for glass and box frames setup giving beautiful scaling for cosmetic and liquid containers with lasting glue setup mechanics.",
    image: "/images/services/stickers/bottle.jpg",
    features: ["Waterproof Vinyl", "Die-Cut Custom Shapes", "Vibrant Product Labeling", "Durable Static Cling Setup"],
    benefits: ["Economical product scaling", "Surface aesthetic improvements", "Absolute high-definition vectoring"],
    gallery: [
      "/images/services/stickers/bottle.jpg",
      "/images/services/stickers/cosmetic.jpg",
      "/images/services/stickers/box.jpg",
      "/images/services/stickers/perfume.jpg"
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
