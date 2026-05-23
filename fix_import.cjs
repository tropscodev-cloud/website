const fs = require('fs');

let layout = fs.readFileSync('src/app/layout.tsx', 'utf-8');
layout = layout.replace(/import 'tw-animate-css.*';/, "import 'tw-animate-css';");
fs.writeFileSync('src/app/layout.tsx', layout);

let css = fs.readFileSync('src/app/globals.css', 'utf-8');
css = css.replace(/@import "tw-animate-css.*?;\n/, "");
fs.writeFileSync('src/app/globals.css', css);

