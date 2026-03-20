const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'components', 'machines-section.tsx');

try {
    let text = fs.readFileSync(filePath, 'utf8');

    const lines = text.split(/\r?\n/);

    // 1. Add state for dialog if needed (could do simple button first, let's just make it look good)
    
    // 2. Find position of `<div className="mt-4">` inside Action Button check
    let foundIndex = -1;
    for(let i=0; i < lines.length; i++) {
        if(lines[i].includes('<div className="mt-4">') && lines[i-1].includes('machines[activeIndex].slug')) {
            foundIndex = i;
            break;
        }
    }

    if (foundIndex === -1) {
         console.error("Action button wrapper not found!");
         process.exit(1);
    }

    lines[foundIndex] = `                    <div className="mt-4 flex flex-wrap items-center gap-3">`;

    // 3. Find closing position `</a>` and update to append second button
    let closeIndex = -1;
    for(let i=foundIndex; i < lines.length; i++) {
        if(lines[i].includes('</a>')) {
            closeIndex = i;
            break;
        }
    }

    if (closeIndex === -1) {
         console.error("Closing anchor tag not found!");
         process.exit(1);
    }

    const appendLines = [
        `                      <button className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] hover:border-primary/40 hover:bg-primary/5 font-semibold px-5 py-2 text-center transition-all text-sm text-foreground hover:shadow-[0_0_15px_rgba(6,182,212,0.1)]">`,
        `                        Machine Details`,
        `                      </button>`
    ];

    lines.splice(closeIndex + 1, 0, ...appendLines); // Insert after </a>

    fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
    console.log("Done");
} catch (err) {
    console.error(err);
    process.exit(1);
}
