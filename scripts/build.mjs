import { mkdir, copyFile, cp, readFile, access } from 'node:fs/promises';
import path from 'node:path';
const html = await readFile('index.html', 'utf8');
const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]));
let checked = 0;
for (const [, url] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
  if (/^https?:/.test(url)) continue;
  if (url.startsWith('#')) {
    if (!ids.has(url.slice(1))) throw new Error(`Missing section: ${url}`);
  } else { await access(path.resolve(url)); }
  checked++;
}
await mkdir('dist', { recursive: true });
await copyFile('index.html', 'dist/index.html');
await copyFile('LICENSE.txt', 'dist/LICENSE.txt');
await cp('images', 'dist/images', { recursive: true });
await mkdir('dist/assets/css', { recursive: true });
await mkdir('dist/assets/resume', { recursive: true });
await cp('assets/literature', 'dist/assets/literature', { recursive: true });
await copyFile('assets/css/portfolio.css', 'dist/assets/css/portfolio.css');
await copyFile('assets/resume/J.A.Belmonte.pdf', 'dist/assets/resume/J.A.Belmonte.pdf');
console.log(`Static build complete. Verified ${checked} local links, assets, and section targets.`);
