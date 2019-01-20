const rp = require('request-promise');
const $ = require('cheerio');
const puppeteer = require('puppeteer');
const url = 'https://betterdev.link/issues/1';
const articleTitles = [];
const articleUrls = [];

// rp(url)
//   .then(function(html){
//     //success!
//         const linkCount = $('.issue-link > a', html).length;
//         const articleTitles = [];
//         const articleUrls = [];

//         for(let i = 0; i < linkCount; i++) {
//             articleUrls.push($('.issue-link > a', html)[i].attribs.href);
//         }
//         console.log(articleTitles);
//         console.log(articleUrls);
//     })
//   .catch(function(err){
//     //handle error
//   });

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
            articleTitles.push(element.querySelector('a').innerText);
            articleUrls.push(element.querySelector('a').href);
            articlePars.push(element.querySelectorAll('p')[1].textContent);
        }
        return {articleTitles,articleUrls,articlePars}
    }); 
    console.log(scrapedObject);
    await browser.close();
})();