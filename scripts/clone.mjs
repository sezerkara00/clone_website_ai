import fs from 'fs';
import path from 'path';
import axios from 'axios';
import * as cheerio from 'cheerio';

const TARGET_FILE = 'TARGET.md';
const DATA_FILE = 'src/app/site-data.json';
const GLOBALS_CSS = 'src/app/globals.css';

async function main() {
    console.log('--- TAM OTOMATIK KLONLAMA BASLIYOR ---');
    
    // 1. Target URL oku
    const targetMd = fs.readFileSync(TARGET_FILE, 'utf8');
    const urlMatch = targetMd.match(/##\s*URL\s*\n\s*(https?:\/\/[^\s\n\r]+)/i) || 
                     targetMd.match(/Target URL:\s*(https?:\/\/[^\s\n\r]+)/i);
    if (!urlMatch) {
        console.error('HATA: TARGET.md icinde URL bulunamadi.');
        process.exit(1);
    }
    const targetUrl = urlMatch[1];
    console.log(`Hedef Site: ${targetUrl}`);

    // 2. HTML Cek
    const response = await axios.get(targetUrl, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
    });
    const html = response.data;
    const $ = cheerio.load(html);

    // 3. Veri Ayikla (Baslik, Aciklama, Navigasyon, Gorseller)
    const siteData = {
        title: $('title').text().trim() || 'Website Clone',
        description: $('meta[name="description"]').attr('content') || 'Cloned with AntiGravity AI',
        primary: '#000000',
        accent: '#0070f3',
        navLinks: [],
        sections: [],
        images: []
    };

    // Navigasyon linklerini cek
    $('nav a, header a').slice(0, 6).each((i, el) => {
        const text = $(el).text().trim();
        if (text && text.length < 20) {
            siteData.navLinks.push(text);
        }
    });

    // Ana basliklari ve icerikleri cek
    $('h1, h2, h3').slice(0, 10).each((i, el) => {
        const title = $(el).text().trim();
        const content = $(el).next('p').text().trim() || $(el).parent().find('p').first().text().trim();
        if (title) {
            siteData.sections.push({ title, content: content.slice(0, 200) });
        }
    });

    // Gorselleri cek (ilk 10 gercek gorsel)
    $('img').each((i, el) => {
        let src = $(el).attr('src');
        if (src && !src.startsWith('data:') && siteData.images.length < 12) {
            if (!src.startsWith('http')) src = new URL(src, targetUrl).href;
            siteData.images.push(src);
        }
    });

    // 4. Renk Ayiklama (Otomotik)
    const styleTags = $('style').text() + $('[style]').attr('style');
    const primaryMatch = styleTags.match(/primary:\s*([^;\}]+)/i) || styleTags.match(/--v-theme-primary:\s*([^;\}]+)/i);
    const accentMatch = styleTags.match(/accent:\s*([^;\}]+)/i) || styleTags.match(/--v-theme-accent:\s*([^;\}]+)/i);

    if (primaryMatch) siteData.primary = primaryMatch[1].trim();
    if (accentMatch) siteData.accent = accentMatch[1].trim();

    // 5. CSS ve JSON Guncelle
    fs.writeFileSync(DATA_FILE, JSON.stringify(siteData, null, 2));

    let globalsCss = fs.readFileSync(GLOBALS_CSS, 'utf8');
    // Renkleri degistir (eger gecersiz renkse varsayilan kalsin)
    if (siteData.primary.startsWith('#')) {
        globalsCss = globalsCss.replace(/--primary:\s*#[0-9A-Fa-f]{3,6}/, `--primary: ${siteData.primary}`);
    }
    if (siteData.accent.startsWith('#')) {
        globalsCss = globalsCss.replace(/--accent:\s*#[0-9A-Fa-f]{3,6}/, `--accent: ${siteData.accent}`);
    }
    fs.writeFileSync(GLOBALS_CSS, globalsCss);

}

main().catch(console.error);
