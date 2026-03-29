import fs from 'fs';
import path from 'path';

const html = fs.readFileSync('home_real.html', 'utf8');

// Extraction regexes
const srcRegex = /src="([^"]+\.(png|jpg|svg|webp|webm|mp4)[^"]*)"/gi;
const bgRegex = /background-image:\s*url\s*\(([^)]+)\)/gi;
const svgRegex = /<svg[^>]*>([\s\S]*?)<\/svg>/gi;

const assets = new Set();
let match;

while ((match = srcRegex.exec(html)) !== null) {
  assets.add(match[1]);
}

while ((match = bgRegex.exec(html)) !== null) {
  let url = match[1].trim();
  if (url.startsWith('"') || url.startsWith("'")) {
    url = url.slice(1, -1);
  }
  assets.add(url);
}

console.log(JSON.stringify(Array.from(assets), null, 2));
