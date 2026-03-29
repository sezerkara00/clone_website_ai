import fs from 'fs';
import path from 'path';
import https from 'https';

const assets = [
  "https://layerstech.co.uk/wp-content/uploads/2025/09/Saydam-zeminde-orijinal-2.png",
  "https://layerstech.co.uk/wp-content/uploads/2026/02/s_logo-scaled.png",
  "https://layerstech.co.uk/wp-content/uploads/revslider/home-one-page1/video1-1.mp4",
  "https://layerstech.co.uk/wp-content/uploads/revslider/home-one-page1/video1-1_25.jpeg",
  "https://layerstech.co.uk/wp-content/uploads/revslider/home-one-page1/GALERI-scaled.jpg",
  "https://layerstech.co.uk/wp-content/uploads/2025/06/SLS2.png",
  "https://layerstech.co.uk/wp-content/uploads/2025/06/DMLS2-4.png",
  "https://layerstech.co.uk/wp-content/uploads/2025/06/png.png",
  "https://layerstech.co.uk/wp-content/uploads/2025/06/eklemeli-imalat-1.png",
  "https://layerstech.co.uk/wp-content/uploads/2025/06/3d-baski-hizmeti-1-1.png",
  "https://layerstech.co.uk/wp-content/uploads/2025/06/Secici-lazer-sinterleme-2.png",
  "https://layerstech.co.uk/wp-content/uploads/2024/04/ALUMIDE-1.webp",
  "https://layerstech.co.uk/wp-content/uploads/2024/04/DAHA-HAFIF-PARCALAR.png",
  "https://layerstech.co.uk/wp-content/uploads/2017/03/KALIP-CELIGI-.webp",
  "https://layerstech.co.uk/wp-content/uploads/2024/04/METAL-URETIM.png",
  "https://layerstech.co.uk/wp-content/uploads/2024/04/PA1101.png",
  "https://layerstech.co.uk/wp-content/uploads/2024/04/pa2200.png",
  "https://layerstech.co.uk/wp-content/uploads/2024/04/PA3200.png",
  "https://layerstech.co.uk/wp-content/uploads/2024/04/TPU.png",
  "https://layerstech.co.uk/wp-content/uploads/2026/01/product.png"
];

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      } else {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      reject(err);
    });
  });
};

const main = async () => {
  const publicDir = path.join(process.cwd(), 'public');
  const imgDir = path.join(publicDir, 'images');
  const vidDir = path.join(publicDir, 'videos');

  if (!fs.existsSync(imgDir)) fs.mkdirSync(imgDir, { recursive: true });
  if (!fs.existsSync(vidDir)) fs.mkdirSync(vidDir, { recursive: true });

  for (const url of assets) {
    try {
      const urlObj = new URL(url);
      const filename = path.basename(urlObj.pathname);
      const destDir = url.endsWith('.mp4') ? vidDir : imgDir;
      const dest = path.join(destDir, filename);
      console.log(`Downloading ${url}...`);
      await download(url, dest);
    } catch (e) {
      console.error(`Error downloading ${url}: ${e.message}`);
    }
  }
};

main();
