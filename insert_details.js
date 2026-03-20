const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app', 'services', '[slug]', 'page.tsx');

try {
    let text = fs.readFileSync(filePath, 'utf8');
    const target = `<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/8 rounded-full blur-[120px] -z-10 pointer-events-none" />`;
    
    if (!text.includes(target)) {
        console.error("Target string not found!");
        process.exit(1);
    }
    
    console.log("Found target!");
    
    // Replace empty space added previously
    const targetWithGap = target + `\n            \n\n            \n            <div className="grid grid-cols-1`;
    
    const replacement = target + `\n            
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                <h2 className="text-2xl font-bold text-white tracking-tight">Similar Types</h2>
              </div>
              <button className="rounded-full border border-white/[0.08] hover:bg-white/[0.02] font-semibold py-1.5 px-4 text-center transition-all text-sm text-foreground/80 hover:text-foreground">
                Details
              </button>
            </div>
            
            <div className="grid grid-cols-1`;

    if (text.includes(targetWithGap)) {
         text = text.replace(targetWithGap, replacement);
         console.log("Matched with gap!");
    } else {
         text = text.replace(target, replacement);
         console.log("Matched without gap!");
    }
    
    fs.writeFileSync(filePath, text, 'utf8');
    console.log("Done");
} catch (err) {
    console.error(err);
    process.exit(1);
}
