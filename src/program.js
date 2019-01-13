const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://betterdev.link/issues/1';

rp(url)
  .then(function(html){
    //success!
        const linkCount = $('.issue-link > a', html).length;
        const issueUrls = [];

        for(let i = 0; i < linkCount; i++) {
            issueUrls.push($('.issue-link > a', html)[i].attribs.href);
        }
        console.log(issueUrls);
    })
  .catch(function(err){
    //handle error
  });

