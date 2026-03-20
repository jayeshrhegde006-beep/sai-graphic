const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app', 'services', '[slug]', 'page.tsx');

try {
    let text = fs.readFileSync(filePath, 'utf8');
    const target = '      "/images/services/wedding-cards/cards5.jpg"\n    ]\n  }\n}';
    const target2 = '      "/images/services/wedding-cards/cards5.jpg"\r\n    ]\r\n  }\r\n}';
    
    const insertText = `      "/images/services/wedding-cards/cards5.jpg"
    ]
  },
  "business-cards": {
    title: "Business Cards",
    description: "Premium business cards that make lasting impressions.",
    longDescription: "Our premium business cards framing provide absolute vector layering for graphic layouts giving beautiful scaling for gold-foil clip designs and transparent PET substrates framing mechanics.",
    image: "/images/services/business-cards/biz1.jpg",
    features: ["Gold foil stamping", "Matte soft-touch textures", "Transparent Acrylic sheets option"],
    benefits: ["Highly layout premium framing", "Absolute high-definition vectoring", "Durable card texture thresholds"],
    gallery: [
      "/images/services/business-cards/biz1.jpg",
      "/images/services/business-cards/biz2.jpg",
      "/images/services/business-cards/biz3.jpg",
      "/images/services/business-cards/biz4.jpg"
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
