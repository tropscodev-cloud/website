const fs = require('fs');

['src/components/NodeField.tsx', 'src/components/SiteHeader.tsx', 'src/components/Reveal.tsx'].forEach(p => {
  let content = fs.readFileSync(p, 'utf-8');
  if (!content.includes('"use client"')) {
    fs.writeFileSync(p, '"use client";\n' + content);
  }
});
