const fs = require('fs');
const path = require('path');

const routesDir = path.join(__dirname, 'src/routes');
const appDir = path.join(__dirname, 'src/app');

const files = fs.readdirSync(routesDir);

files.forEach(file => {
  if (file === '__root.tsx') return;
  const rawContent = fs.readFileSync(path.join(routesDir, file), 'utf-8');
  
  // Basic transforms
  let content = rawContent.replace(/@tanstack\/react-router/g, 'next/link');
  // replace <Link to=" to <Link href="
  content = content.replace(/<Link(.*?)to=/g, '<Link$1href=');
  // remove route exports
  content = content.replace(/import { createFileRoute.*?from "next\/link";/g, 'import Link from "next/link";');
  content = content.replace(/export const Route = createFileRoute.*?(\([\s\S]*?\))?;\n?/g, '');
  
  // The default export
  const componentName = file.split('.')[0] === 'index' ? 'Index' : (file.charAt(0).toUpperCase() + file.slice(1).split('.')[0]);
  content += `\nexport default ${componentName};\n`;

  let newPath = '';
  if (file === 'index.tsx') {
    newPath = path.join(appDir, 'page.tsx');
  } else {
    const routeName = file.replace('.tsx', '');
    fs.mkdirSync(path.join(appDir, routeName), { recursive: true });
    newPath = path.join(appDir, routeName, 'page.tsx');
  }
  
  fs.writeFileSync(newPath, content);
});
