const fs = require('fs');
const path = require('path');

function fix(dir) {
  fs.readdirSync(dir).forEach(file => {
    const p = path.join(dir, file);
    if (fs.statSync(p).isDirectory()) {
      fix(p);
    } else if (p === 'page.tsx') {
      let content = fs.readFileSync(p, 'utf-8');
      
      const match = content.match(/function\s+([A-Z][a-zA-Z0-9]+)\s*\(/);
      if (match) {
        const funcName = match[1];
        // find export default
        content = content.replace(/export default [A-Za-z0-9_]+/, `export default ${funcName}`);
        fs.writeFileSync(p, content);
      }
    }
  });
}
fix(path.join(__dirname, 'src/app'));
