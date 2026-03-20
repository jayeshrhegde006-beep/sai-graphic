import sys

filepath = r"c:\Users\Asus\Desktop\g-main\g-main\app\services\[slug]\page.tsx"

with open(filepath, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Verify the location
line_302 = lines[301].strip() # 0-indexed
line_306_orig = lines[305].strip() 

target_header = """            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                <h2 className="text-2xl font-bold text-white tracking-tight">Similar Types</h2>
              </div>
              <button className="rounded-full border border-white/[0.08] hover:bg-white/[0.02] font-semibold py-1.5 px-4 text-center transition-all text-sm text-foreground/80 hover:text-foreground">
                Details
              </button>
            </div>
"""

lines.insert(303, target_header)

with open(filepath, 'w', encoding='utf-8') as f:
    f.writelines(lines)

print("Insertion complete")
