const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app', 'services', '[slug]', 'page.tsx');

try {
    let text = fs.readFileSync(filePath, 'utf8');
    const target = '      "/images/services/tshirts/peel.jpg"\n    ]\n  }\n}';
    const target2 = '      "/images/services/tshirts/peel.jpg"\r\n    ]\r\n  }\r\n}';
    
    const insertText = `      "/images/services/tshirts/peel.jpg"
    ]
  },
  "safety-signs": {
    title: "Safety Signs",
    description: "Industrial and workplace safety signage solutions.",
    longDescription: "Our premium industrial safety signs provide absolute vector layering for high-contrast graphic layouts and emergency setups with weatherproof durability standards.",
    image: "/images/services/safety/signs1.jpg",
    features: ["Vibrant High-Contrast Overlays", "Weatherproof UV-Resistant coatings", "Ready-to-mount adhesives options"],
    benefits: ["Economical product scaling", "Surface aesthetic improvements", "Absolute high-definition vectoring"],
    gallery: [
      "/images/services/safety/signs1.jpg",
      "/images/services/safety/exit_up.jpg",
      "/images/services/safety/mandatory.jpg",
      "/images/services/safety/exit_down.jpg"
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
