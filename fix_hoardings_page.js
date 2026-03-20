const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app', 'services', '[slug]', 'page.tsx');

try {
    let text = fs.readFileSync(filePath, 'utf8');
    const target = '      "/images/services/offset/diagram.jpg"\n    ]\n  }\n}';
    const target2 = '      "/images/services/offset/diagram.jpg"\r\n    ]\r\n  }\r\n}';
    
    const insertText = `      "/images/services/offset/diagram.jpg"
    ]
  },
  "hoardings": {
    title: "Hoardings",
    description: "Large format outdoor advertising solutions with premium raw frames.",
    longDescription: "We provide high-quality manufacturing with premium raw frames for crisp detailing to ensure optimal advertising depth and performance triggers scaling bulk sizes seamlessly.",
    image: "/images/services/hoardings/hoarding1.png",
    features: ["Heavy-Duty Steel Frames", "High-Wind Resistance", "Vibrant Giant Overlays", "Same-Day Panel Mounting Setup"],
    benefits: ["Mass visible range reach", "Weather-proof durability", "Ultimate impactful static views"],
    gallery: [
      "/images/services/hoardings/hoarding1.png",
      "/images/services/hoardings/hoarding2.png",
      "/images/services/hoardings/hoarding3.png",
      "/images/services/hoardings/hoarding4.png",
      "/images/services/hoardings/hoarding5.png"
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
