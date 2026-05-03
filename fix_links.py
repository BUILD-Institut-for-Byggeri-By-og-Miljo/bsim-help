import os
import re

def get_file_number(filepath):
    parts = filepath.replace('\\', '/').split('/')
    if len(parts) < 3 or parts[1] != 'da':
        return None
    folder = parts[2]
    if folder.isdigit():
        return int(folder)
    else:
        return None

def process_file(filepath):
    number = get_file_number(filepath)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    def replace_link(match):
        link = match.group(0)
        # extract the url
        url_match = re.search(r'\]\(([^)]+)\)', link)
        if url_match:
            url = url_match.group(1)
            if url.startswith('/'):
                # absolute link
                parts = url.split('/')
                if len(parts) > 1:
                    first_part = parts[1]
                    if first_part.isdigit():
                        link_number = int(first_part)
                        if number is None or link_number != number:
                            # add ../
                            new_url = '../' + url[1:].replace('.html', '.md')
                        else:
                            new_url = url.replace('.html', '.md')
                    else:
                        # no number in link, but absolute, add ../
                        new_url = '../' + url[1:].replace('.html', '.md')
                else:
                    new_url = url.replace('.html', '.md')
                new_link = link.replace(url, new_url)
                return new_link
        return link
    
    new_content = re.sub(r'\[.*?\]\([^)]*\.html\)', replace_link, content)
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

# find all .md files in da/
for root, dirs, files in os.walk('da'):
    for file in files:
        if file.endswith('.md'):
            filepath = os.path.join(root, file)
            process_file(filepath)