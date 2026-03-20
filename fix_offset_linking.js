const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'components', 'machines-section.tsx');

try {
    let text = fs.readFileSync(filePath, 'utf8');

    const replaceText = `                      {machines[activeIndex].name === "Sublimation Machine" ? (
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
                      ) : machines[activeIndex].name === "Laser Cutting Machine" ? (
                        <a 
                          href={\`/machines/laser-cutting\`}
                          className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] hover:border-primary/40 hover:bg-primary/5 font-semibold px-5 py-2 text-center transition-all text-sm text-foreground hover:shadow-[0_0_15px_rgba(6,182,212,0.1)]"
                        >
                          Machine Details
                        </a>
                      ) : machines[activeIndex].name === "Offset Printing Machine" ? (
                        <a 
                          href={\`/machines/offset-printing\`}
                          className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] hover:border-primary/40 hover:bg-primary/5 font-semibold px-5 py-2 text-center transition-all text-sm text-foreground hover:shadow-[0_0_15px_rgba(6,182,212,0.1)]"
                        >
                          Machine Details
                        </a>
                      ) : (
                        <button className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] hover:border-primary/40 hover:bg-primary/5 font-semibold px-5 py-2 text-center transition-all text-sm text-foreground hover:shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                          Machine Details
                        </button>
                      )}
                    </div>`;

    
    const parts = text.split("</svg>\n                      </a>");
    if (parts.length > 1) {
        text = parts[0] + "</svg>\n                      </a>\n" + replaceText + "\n                  )}\n                </div>\n              </div>" + parts[1].substring(parts[1].indexOf('              \n              {/* Corner accents */}'));
    }

    fs.writeFileSync(filePath, text, 'utf8');
    console.log("Fixed linking for offset printing");
} catch(e) {
    console.error(e);
}
