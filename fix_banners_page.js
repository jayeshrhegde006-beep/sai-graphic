const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app', 'services', '[slug]', 'page.tsx');

try {
    let text = fs.readFileSync(filePath, 'utf8');
    const target = '      "/images/services/stickers/perfume.jpg"\n    ]\n  }\n}';
    const target2 = '      "/images/services/stickers/perfume.jpg"\r\n    ]\r\n  }\r\n}';
    
    const insertText = `      "/images/services/stickers/perfume.jpg"
    ]
  },
  "banners-posters": {
    title: "Banners & Posters",
    description: "Vibrant banners and posters for events and marketing.",
    longDescription: "Our premium banners and posters framing provide absolute vector layering for graphic layouts and heavy equipment branding showcasing sharp color accuracy thresholds.",
    image: "/images/services/banners/tesla.jpg",
    features: ["Vibrant Offset ink mapping", "Gloss or Matte film overlay", "High static-clings thresholds"],
    benefits: ["Economical product scaling", "Surface aesthetic improvements", "Absolute high-definition vectoring"],
    gallery: [
      "/images/services/banners/tesla.jpg",
      "/images/services/banners/launch.png",
      "/images/services/banners/heavy.jpg",
      "/images/services/banners/flyer.jpg",
      "/images/services/banners/whitespace.png"
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
