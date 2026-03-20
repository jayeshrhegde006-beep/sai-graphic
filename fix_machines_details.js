const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'components', 'machines-section.tsx');

try {
    let text = fs.readFileSync(filePath, 'utf8');

    // Add slugs to array
    text = text.replace('name: "Flex Printing Machine",', 'name: "Flex Printing Machine",\n    slug: "flex-printing",');
    text = text.replace('name: "Sublimation Machine",', 'name: "Sublimation Machine",\n    slug: "t-shirt-printing",');
    text = text.replace('name: "Laser Cutting Machine",', 'name: "Laser Cutting Machine",\n    slug: "glow-sign-boards",');
    text = text.replace('name: "Offset Printing Machine",', 'name: "Offset Printing Machine",\n    slug: "offset-printing",');
    text = text.replace('name: "Lamination Machine",', 'name: "Lamination Machine",\n    slug: "vinyl-printing",');
    text = text.replace('name: "Plotter Cutting Machine",', 'name: "Plotter Cutting Machine",\n    slug: "stickers-labels",');

    const lines = text.split(/\r?\n/);

    // Find the place after Active Display Content description
    // Inside MachinesSection rendering block
    let foundIndex = -1;
    for(let i=0; i < lines.length; i++) {
        if(lines[i].includes('{machines[activeIndex].description}') && lines[i+1].trim() === '</p>') {
            foundIndex = i + 1;
            break;
        }
    }

    if (foundIndex === -1) {
         console.error("Description area fallback not found!");
         process.exit(1);
    }

    const replacementLines = [
        `                  `,
        `                  {/* Specs */}`,
        `                  <div className="flex flex-wrap gap-2 mb-4">`,
        `                    {machines[activeIndex].specs.map((spec, idx) => (`,
        `                      <span`,
        `                        key={idx}`,
        `                        className="px-3 py-1.5 rounded-full bg-primary/10 backdrop-blur-sm text-sm text-primary font-medium border border-primary/20"`,
        `                      >`,
        `                        {spec}`,
        `                      </span>`,
        `                    ))}`,
        `                  </div>`,
        ``,
        `                  {/* Action Button */}`,
        `                  {machines[activeIndex].slug && (`,
        `                    <div className="mt-4">`,
        `                      <a `,
        `                        href={\`/services/\${machines[activeIndex].slug}\`}`,
        `                        className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground font-semibold px-5 py-2 text-center transition-all text-sm hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] glow-box"`,
        `                      >`,
        `                        View Details`,
        `                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>`,
        `                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />`,
        `                        </svg>`,
        `                      </a>`,
        `                    </div>`,
        `                  )}`
    ];

    lines.splice(foundIndex + 1, 1, ...replacementLines); // Insert contents after </p> and replacing empty index gap line

    fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
    console.log("Done");
} catch (err) {
    console.error(err);
    process.exit(1);
}
