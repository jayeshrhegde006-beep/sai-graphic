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
    
    const replacement = target + `,\n    gallery: [\n      "/images/services/glow-sign/glow1.png",\n      "/images/services/glow-sign/glow2.png",\n      "/images/services/glow-sign/glow3.png",\n      "/images/services/glow-sign/glow4.png",\n      "/images/services/glow-sign/glow5.png"\n    ]`;

    text = text.replace(target, replacement);
    fs.writeFileSync(filePath, text, 'utf8');
    console.log("Done");
} catch (err) {
    console.error(err);
    process.exit(1);
}
