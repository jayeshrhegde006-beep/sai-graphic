const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app', 'services', '[slug]', 'page.tsx');

try {
    let text = fs.readFileSync(filePath, 'utf8');
    const target = '      "/images/services/banners/whitespace.png"\n    ]\n  }\n}';
    const target2 = '      "/images/services/banners/whitespace.png"\r\n    ]\r\n  }\r\n}';
    
    const insertText = `      "/images/services/banners/whitespace.png"
    ]
  },
  "wedding-cards": {
    title: "Wedding Cards",
    description: "Elegant invitation cards for weddings and special occasions.",
    longDescription: "Our premium wedding cards contain beautiful Golden mandala and jewel details over high-depth premium textured papers ideal for grand receptions formats scaling.",
    image: "/images/services/wedding-cards/cards1.jpg",
    features: ["Golden foil stampings", "Textured card frames decor", "Jeweled crystal overlay setups"],
    benefits: ["Highly layout premium framing", "Elegant aesthetic distribution", "Durable card texture thresholds"],
    gallery: [
      "/images/services/wedding-cards/cards1.jpg",
      "/images/services/wedding-cards/cards2.jpg",
      "/images/services/wedding-cards/cards3.jpg",
      "/images/services/wedding-cards/cards4.jpg",
      "/images/services/wedding-cards/cards5.jpg"
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
