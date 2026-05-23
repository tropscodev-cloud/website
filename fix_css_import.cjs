const fs = require('fs');

let css = fs.readFileSync('src/app/globals.css', 'utf-8');
css = css.replace(/@import "tw-animate-css.*?;\n/, "");
fs.writeFileSync('src/app/globals.css', css);

let layout = fs.readFileSync('src/app/layout.tsx', 'utf-8');
if (!layout.includes('tw-animate-css')) {
  layout = layout.replace(/import '\.\/globals\.css';/, "import './globals.css';\nimport 'tw-animate-css/dist/tw-animate.css';");
  fs.writeFileSync('src/app/layout.tsx', layout);
}
