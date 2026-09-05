import os
import glob

for file in glob.glob('src/components/*.tsx'):
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace "{t("key")}" with t("key")
    new_content = content.replace('"{t(', 't(').replace(')}"', ')')
    new_content = new_content.replace("'{t(", 't(').replace(")}'", ')')
    
    if new_content != content:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f'Fixed {file}')
