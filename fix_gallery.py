import sys
with open(r"c:\Users\Asus\Desktop\g-main\g-main\app\services\[slug]\page.tsx", "r", encoding="utf-8") as f:
    text = f.read()
target = '            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/8 rounded-full blur-[120px] -z-10 pointer-events-none" />'
if target not in text:
    print("Target not found!")
    sys.exit(1)
else:
    print("Found target!")
    replacement = target + """
            
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
              <h2 className="text-2xl font-bold text-white tracking-tight">Similar Types</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">"""
    text = text.replace(target, replacement)
    with open(r"c:\Users\Asus\Desktop\g-main\g-main\app\services\[slug]\page.tsx", "w", encoding="utf-8") as f:
        f.write(text)
    print("Done")
