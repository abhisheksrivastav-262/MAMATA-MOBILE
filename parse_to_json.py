import re
import json

with open('/Users/abhisheksrivastav/.gemini/antigravity-ide/brain/513b4615-47f0-4b92-9dc4-fd13e04c6f7e/updated_prices.txt', 'r') as f:
    lines = f.read().split('\n')[4:] # skip header

def get_brand(name):
    name_up = name.upper()
    if 'MI' in name_up or 'POCO' in name_up or 'REDMI' in name_up or 'NOTE' in name_up: return 'Xiaomi / Redmi'
    if '1+' in name_up or 'NORD' in name_up: return 'OnePlus'
    if 'RM' in name_up or 'REALME' in name_up: return 'Realme'
    if 'RENO' in name_up or 'FIND' in name_up or 'OPPO' in name_up: return 'Oppo'
    if name_up.startswith('Y') or name_up.startswith('V ') or 'V' in name_up: return 'Vivo'
    if name_up.startswith('A') or name_up.startswith('M') or name_up.startswith('F') or name_up.startswith('S') or name_up.startswith('J'): return 'Samsung'
    if name_up.startswith('X') or 'HOT' in name_up or 'SPARK' in name_up or 'TECNO' in name_up: return 'Infinix / Tecno'
    if 'IPHONE' in name_up or 'PRO MAX' in name_up or name_up.startswith('11') or name_up.startswith('12') or name_up.startswith('13') or name_up.startswith('14') or name_up.startswith('15') or name_up.startswith('16') or name_up.startswith('X'): return 'Apple'
    return 'Other Brands'

brands = {}

for line in lines:
    line = line.strip()
    if not line: continue
    
    # Simple trick: Split line into tokens. Find all indices of tokens that are fully digits >= 3 chars.
    # Each price is preceded by the model name tokens.
    tokens = line.split()
    
    current_name = []
    for token in tokens:
        if re.match(r'^\d{3,}$', token):
            price = token
            name = ' '.join(current_name).strip()
            
            # special case for categories headers which don't have prices
            if name:
                brand = get_brand(name)
                if brand not in brands: brands[brand] = []
                brands[brand].append({"name": name, "price": int(price)})
                
            current_name = []
        else:
            current_name.append(token)

with open('prices.json', 'w') as f:
    json.dump(brands, f, indent=2)

