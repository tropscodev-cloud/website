const fs = require('fs');
let css = fs.readFileSync('src/app/globals.css', 'utf-8');
css = css.replace(/@import "tw-animate-css";/, '@import "tw-animate-css/dist/tw-animate.css";');
fs.writeFileSync('src/app/globals.css', css);
