const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app', 'machines', 'sublimation', 'page.tsx');

try {
    let text = fs.readFileSync(filePath, 'utf8');
    const lines = text.split(/\r?\n/);

    let targetIndex = -1;
    for(let i=0; i < lines.length; i++) {
        if(lines[i].includes('image: "/images/machines/sublimation/handle-lever.jpg",') && lines[i+2].trim() === '}') {
            targetIndex = i + 2;
            break;
        }
    }

    if (targetIndex === -1) {
         console.error("Handle / Lever item end index not found!");
         process.exit(1);
    }

    const appendLines = [
        `    },`,
        `    {`,
        `      title: "Control Board (Motherboard)",`,
        `      description: "Equipped to coordinate temperature regulation, timer functions, and safety mechanisms smoothly lines thresholds accurate specs layout.",`,
        `      specs: ["Manages thermal safety controls correctly", "Ensures continuous motherboard balance benchmarks"],`,
        `      image: "/images/machines/sublimation/control-board.jpg",`,
        `      icon: Cpu`,
        `    }`
    ];

    lines.splice(targetIndex, 1, ...appendLines); 

    fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
    console.log("Done");
} catch (err) {
    console.error(err);
    process.exit(1);
}
