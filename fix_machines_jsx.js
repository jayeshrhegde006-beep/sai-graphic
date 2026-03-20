const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'components', 'machines-section.tsx');

try {
    let text = fs.readFileSync(filePath, 'utf8');
    
    // The previous replace removed the anchor closing and the div closing. 
    // Let's find the exact text and replace it with the correct full block.
    
    // Let me just recreate the whole Action Button block
    const regex = /\{\/\* Action Button \*\/\}([\s\S]*?)<\/div>\s*\}\)\(\)\}/; // wait, this might be tricky, let me just manually replace from `<svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>\n                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" \/>\n` until `\n                  \/\* Corner accents \*\/`
    
    const parts = text.split("</svg>");
    if (parts.length > 1) {
        text = parts[0] + "</svg>\n                      </a>\n" + 
`                      {machines[activeIndex].name === "Sublimation Machine" ? (
                        <a 
                          href={\`/machines/sublimation\`}
                          className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] hover:border-primary/40 hover:bg-primary/5 font-semibold px-5 py-2 text-center transition-all text-sm text-foreground hover:shadow-[0_0_15px_rgba(6,182,212,0.1)]"
                        >
                          Machine Details
                        </a>
                      ) : machines[activeIndex].name === "Flex Printing Machine" ? (
                        <a 
                          href={\`/machines/flex-printing\`}
                          className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] hover:border-primary/40 hover:bg-primary/5 font-semibold px-5 py-2 text-center transition-all text-sm text-foreground hover:shadow-[0_0_15px_rgba(6,182,212,0.1)]"
                        >
                          Machine Details
                        </a>
                      ) : (
                        <button className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] hover:border-primary/40 hover:bg-primary/5 font-semibold px-5 py-2 text-center transition-all text-sm text-foreground hover:shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                          Machine Details
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Corner accents */}
` + parts[1].substring(parts[1].indexOf('              {/* Corner accents */}') + '              {/* Corner accents */}'.length);
    }
    
    fs.writeFileSync(filePath, text, 'utf8');
    console.log("Fixed JSX syntax!");
} catch(e) {
    console.error(e);
}
