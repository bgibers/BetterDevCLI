const rp = require('request-promise');
const puppeteer = require('puppeteer');
const url = 'https://betterdev.link/issues/1';
const articleTitles = [];
const articleUrls = [];


(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, {waitUntil: 'load'});

    let scrapedObject = await page.evaluate(() => {
        let articleTitles = [];
        let articleUrls = [];
        let articlePars = [];
        let container = document.querySelectorAll('div.issue-link');

        for (var element of container) {
            try {
                articleTitles.push(element.querySelector('a').innerText);
                articleUrls.push(element.querySelector('a').href);
                articlePars.push(element.querySelectorAll('p')[1].innerHTML);
            } catch(e) {
                // statements
                 console.log(e);
            }   
        }
        return {articleTitles,articleUrls,articlePars}
    }); 
    console.log(scrapedObject);
    await browser.close();
})();