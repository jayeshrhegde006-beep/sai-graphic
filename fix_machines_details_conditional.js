const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'components', 'machines-section.tsx');

try {
    let text = fs.readFileSync(filePath, 'utf8');

    const lines = text.split(/\r?\n/);

    let targetIndex = -1;
    for(let i=0; i < lines.length; i++) {
        if(lines[i].includes('<button className="inline-flex items-center gap-2 rounded-full border border-white/[0.08]') && lines[i+1].includes('Machine Details')) {
            targetIndex = i;
            break;
        }
    }

    if (targetIndex === -1) {
         console.error("Machine Details button not found for update!");
         process.exit(1);
    }

    const replacementLines = [
        `                      {machines[activeIndex].name === "Sublimation Machine" ? (`,
        `                        <a `,
        `                          href={\`/machines/sublimation\`}`,
        `                          className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] hover:border-primary/40 hover:bg-primary/5 font-semibold px-5 py-2 text-center transition-all text-sm text-foreground hover:shadow-[0_0_15px_rgba(6,182,212,0.1)]"`,
        `                        >`,
        `                          Machine Details`,
        `                        </a>`,
        `                      ) : (`,
        `                        <button className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] hover:border-primary/40 hover:bg-primary/5 font-semibold px-5 py-2 text-center transition-all text-sm text-foreground hover:shadow-[0_0_15px_rgba(6,182,212,0.1)]">`,
        `                          Machine Details`,
        `                        </button>`,
        `                      )}`
    ];

    lines.splice(targetIndex, 3, ...replacementLines); // Delete button node row indexes to replace conditional check insert

    fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
    console.log("Done");
} catch (err) {
    console.error(err);
    process.exit(1);
}
