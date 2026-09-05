import json

with open('prices.json', 'r') as f:
    prices = json.load(f)

with open('src/app/compatible-models/page.tsx', 'r') as f:
    content = f.read()

# Replace MODELS
models_str = "const MODELS = " + json.dumps(prices, indent=2) + ";\n"

import re
content = re.sub(r'const MODELS = \{.*?\};\n', models_str, content, flags=re.DOTALL)

# Replace the rendering part
old_render = '''              <div className="mt-4 grid gap-2">
                {list.map((m)=>(
                  <div key={m} className="flex items-center justify-between rounded-xl bg-slate-50 border border-slate-200 px-4 py-3">
                    <span className="text-sm font-semibold text-slate-800">{m}</span>
                    <span className="text-[11px] font-bold tracking-widest text-emerald-600">COMPATIBLE</span>
                  </div>
                ))}
              </div>'''

new_render = '''              <div className="mt-4 grid gap-2">
                {list.map((m, idx)=>(
                  <div key={idx} className="flex items-center justify-between rounded-xl bg-slate-50 border border-slate-200 px-4 py-3">
                    <span className="text-sm font-semibold text-slate-800">{m.name}</span>
                    <span className="text-sm font-bold text-emerald-600">₹{m.price}</span>
                  </div>
                ))}
              </div>'''

content = content.replace(old_render, new_render)

with open('src/app/compatible-models/page.tsx', 'w') as f:
    f.write(content)
