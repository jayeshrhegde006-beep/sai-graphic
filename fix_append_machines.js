const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app', 'machines', 'sublimation', 'page.tsx');

try {
    let text = fs.readFileSync(filePath, 'utf8');
    const lines = text.split(/\r?\n/);

    let targetIndex = -1;
    for(let i=0; i < lines.length; i++) {
        if(lines[i].includes('image: "/images/machines/sublimation/safety-features.jpg",') && lines[i+3].includes('return (')) {
            targetIndex = i;
            break;
        }
    }

    if (targetIndex === -1) {
         console.error("Safety features item end index not found!");
         process.exit(1);
    }

    const appendLines = [
        `      icon: ShieldCheck`,
        `    },`,
        `    {`,
        `      title: "Temperature Controller (Digital Panel)",`,
        `      description: "Displays and controls optimal pressing temperature and time intervals precisely during operations.",`,
        `      specs: ["Essential for 180-200°C setups", "Pressing time intervals usually set to 30-60 seconds"],`,
        `      image: "/images/machines/sublimation/temp-controller.jpg",`,
        `      icon: Thermometer`,
        `    },`,
        `    {`,
        `      title: "Pressure Adjustment Setup",`,
        `      description: "Allows users to exert manual or auto-driven downward force precisely for smooth transfers.",`,
        `      specs: ["Supports diverse media substrates", "Ensures sharp and consistent transfer accuracy thresholds"],`,
        `      image: "/images/machines/sublimation/pressure-adjustment-knob.jpg",`,
        `      icon: Settings`,
        `    },`,
        `    {`,
        `      title: "Heating Element",`,
        `      description: "Thermal transfer matrix that converts electrical current grid nodes into even temperatures consistently.",`,
        `      specs: ["Supports fast heating warmup nodes", "Maintains optimal temperature balancing evenly all night"],`,
        `      image: "/images/machines/sublimation/heating-element.jpg",`,
        `      icon: Thermometer`,
        `    },`,
        `    {`,
        `      title: "Timer System",`,
        `      description: "Works directly with the operations controller node to alert complete operations guides accurately.",`,
        `      specs: ["Equipped with audible warnings/buzzer", "Monitors absolute pressing duration accuracy specs"],`,
        `      image: "/images/machines/sublimation/timer-system.jpg",`,
        `      icon: Settings`,
        `    },`,
        `    {`,
        `      title: "Handle / Lever",`,
        `      description: "Equipped to lock down top-press weights effortlessly scaling bulk manual press setups guidelines safely.",`,
        `      specs: ["No-friction heavy-duty design", "Provides steady ergonomic support threshold weights"],`,
        `      image: "/images/machines/sublimation/handle-lever.jpg",`,
        `      icon: Maximize2`,
        `    }`,
        `  ]`,
        ``
    ];

    lines.splice(targetIndex + 1, 2, ...appendLines); // Insert after </a>

    fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
    console.log("Done");
} catch (err) {
    console.error(err);
    process.exit(1);
}
