const fs = require('fs');
const path = require('path');

function walk(dir) {
  fs.readdirSync(dir).forEach(file => {
    const p = path.join(dir, file);
    if (fs.statSync(p).isDirectory()) {
      walk(p);
    } else if (p.endsWith('.tsx') || p.endsWith('.ts')) {
      let content = fs.readFileSync(p, 'utf-8');
      
      content = content.replace(/<Link=/g, '<Link href=');
      
      fs.writeFileSync(p, content);
    }
  });
}

walk(path.join(__dirname, 'src'));

let contact = fs.readFileSync('src/app/contact/page.tsx', 'utf-8');
if (!contact.includes('"use client"')) {
  fs.writeFileSync('src/app/contact/page.tsx', '"use client";\n' + contact);
}

const cssPath = 'src/app/globals.css';
let css = fs.readFileSync(cssPath, 'utf-8');
css = css.replace(/@import "tailwindcss" source\(none\);/, '@import "tailwindcss";');
// remove @source
css = css.replace(/@source ".*?";/, '');
fs.writeFileSync(cssPath, css);

