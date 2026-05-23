const fs = require('fs');
const path = require('path');

function walk(dir) {
  fs.readdirSync(dir).forEach(file => {
    const p = path.join(dir, file);
    if (fs.statSync(p).isDirectory()) {
      walk(p);
    } else if (p.endsWith('.tsx') || p.endsWith('.ts')) {
      let content = fs.readFileSync(p, 'utf-8');
      
      // Fix imports from react-router to next/link
      content = content.replace(/import\s+{\s*Link.*?\s*}\s+from\s+['"]@tanstack\/react-router['"]/g, 'import Link from "next/link"');
      content = content.replace(/['"]@tanstack\/react-router['"]/g, '""'); // remove remaining router imports.
      // there actually is no useRouter, let's remove hooks
      content = content.replace(/useRouter\(\)/g, "({ invalidate: () => {}, reset: () => {} }) /* TODO: useRouter */");
      
      // Fix <Link to="..." to <Link href="..."
      content = content.replace(/<Link\b([^>]*?)to=/g, '<Link=');
      // For dynamic props like item.to, change to item.href
      content = content.replace(/to:\s*['"]\/(.*?)['"]/g, 'href: "/"');
      // and item.to to item.href inside mappings
      content = content.replace(/to={/g, 'href={');
      content = content.replace(/item\.to/g, 'item.href');
      
      fs.writeFileSync(p, content);
    }
  });
}

walk(path.join(__dirname, 'src'));
