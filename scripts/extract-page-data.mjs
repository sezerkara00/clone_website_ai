import fs from 'fs';
import path from 'path';

const extractData = (filename) => {
  const html = fs.readFileSync(filename, 'utf8');
  
  // Very basic extraction logic based on the Lynxter Nuxt structure
  // Usually the data is in a __NUXT__ script or similar, but I'll grab titles and images
  const titleRegex = /<h1[^>]*>([\s\S]*?)<\/h1>/gi;
  const imgRegex = /https:\/\/media\.lynxter\.com\/([^"'\s)]+)/gi;
  
  const titles = [];
  let match;
  while ((match = titleRegex.exec(html)) !== null) {
    titles.push(match[1].replace(/<[^>]+>/g, '').trim());
  }
  
  const images = new Set();
  while ((match = imgRegex.exec(html)) !== null) {
    images.add(`https://media.lynxter.com/${match[1]}`);
  }
  
  return { titles, images: Array.from(images) };
};

const printers = extractData('printers_real.html');
const materials = extractData('materials_real.html');
const industries = extractData('industries_real.html');

console.log(JSON.stringify({ printers, materials, industries }, null, 2));
