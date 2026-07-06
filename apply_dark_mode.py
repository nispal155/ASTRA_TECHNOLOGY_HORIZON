import os

replacements = {
    "bg-white/80": "bg-white/80 dark:bg-brand-primary/90",
    "bg-white border-b": "bg-white dark:bg-brand-primary border-b dark:border-slate-800",
    "text-slate-600": "text-slate-600 dark:text-slate-300",
    "text-slate-700": "text-slate-700 dark:text-slate-200",
    "text-slate-900": "text-slate-900 dark:text-white",
    "text-brand-text": "text-brand-text dark:text-white",
    "bg-brand-light-slate": "bg-brand-light-slate dark:bg-slate-900",
    "bg-white rounded-3xl": "bg-white dark:bg-slate-800 rounded-3xl",
    "bg-white rounded-2xl": "bg-white dark:bg-slate-800 rounded-2xl",
    "bg-brand-light-bg": "bg-brand-light-bg dark:bg-slate-900",
    "bg-white": "bg-white dark:bg-brand-primary",
    "border-slate-200": "border-slate-200 dark:border-slate-700",
    "border-slate-300": "border-slate-300 dark:border-slate-600",
    "border-slate-100": "border-slate-100 dark:border-slate-800",
    "border-brand-light-slate": "border-brand-light-slate dark:border-slate-800",
    "bg-slate-50": "bg-slate-50 dark:bg-slate-900",
}

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    # We must be careful about order of replacements or multiple replacements
    # so we'll do exact string replacements for specific class strings.
    # Actually, a simpler way is to replace word by word, but some are compound.
    # We'll just do sequential replace.
    new_content = content
    for old, new in replacements.items():
        new_content = new_content.replace(old, new)
        
    # Some specific fixes
    # Fix double darks if they happened
    new_content = new_content.replace("dark:bg-brand-primary dark:bg-slate-800", "dark:bg-slate-800")
    new_content = new_content.replace("dark:bg-slate-900 dark:bg-slate-900", "dark:bg-slate-900")
    
    with open(filepath, 'w') as f:
        f.write(new_content)

components_dir = "src/components"
for filename in os.listdir(components_dir):
    if filename.endswith(".tsx"):
        process_file(os.path.join(components_dir, filename))

# Also apply to the pages we created
pages_dir = "src/app"
for root, dirs, files in os.walk(pages_dir):
    for file in files:
        if file.endswith(".tsx"):
            process_file(os.path.join(root, file))

print("Dark mode classes injected.")
