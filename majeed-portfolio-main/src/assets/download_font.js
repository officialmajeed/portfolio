import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    
    // Set a normal user agent
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
    
    await page.goto('https://bestfreefonts.com/sinistre', { waitUntil: 'networkidle2' });
    
    // Find the download button link
    const downloadHref = await page.evaluate(() => {
        const btn = document.querySelector('a.btn-download'); 
        if (!btn) return null;
        return btn.href;
    });
    
    if (downloadHref) {
        console.log("Found download URL:", downloadHref);
        
        const client = await page.target().createCDPSession();
        await client.send('Page.setDownloadBehavior', {
            behavior: 'allow',
            downloadPath: __dirname,
        });
        
        console.log("Starting download...");
        // Use a click to trigger download
        await page.evaluate(() => {
            const btn = document.querySelector('a.btn-download'); 
            if (btn) btn.click();
        });
        
        // Wait a bit for download to complete
        await new Promise(r => setTimeout(r, 8000));
        console.log("Download hopefully finished.");
        
    } else {
        console.log("Could not find download button.");
    }

    await browser.close();
})();
