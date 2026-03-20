const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app', 'services', '[slug]', 'page.tsx');

try {
    let text = fs.readFileSync(filePath, 'utf8');
    const target = '      "/images/services/business-cards/biz4.jpg"\n    ]\n  }\n}';
    const target2 = '      "/images/services/business-cards/biz4.jpg"\r\n    ]\r\n  }\r\n}';
    
    const insertText = `      "/images/services/business-cards/biz4.jpg"
    ]
  },
  "brochures-flyers": {
    title: "Brochures & Flyers",
    description: "Informative brochures and flyers for marketing campaigns.",
    longDescription: "Our premium brochures framing provide absolute vector layering for graphic layouts giving beautiful scaling for tri-fold structures and event flyer details mechanics.",
    image: "/images/services/brochures/flyer1.jpg",
    features: ["Tri-Fold precise creases", "High Gloss or Matte finish", "Double-Sided bulk offset framing"],
    benefits: ["Highly layout premium distribution", "Absolute high-definition vectoring", "Durable card texture thresholds"],
    gallery: [
      "/images/services/brochures/flyer1.jpg",
      "/images/services/brochures/brochure2.jpg",
      "/images/services/brochures/flyer3.jpg",
      "/images/services/brochures/flyer4.jpg"
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
