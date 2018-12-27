//Imports
const yaml = require('yaml');

var latestIssue = 1
const url = "https://raw.githubusercontent.com/yeo/betterdev.link/master/content/issues/" + latestIssue + ".yml"

/*
    Scrape web using url
    Create function to check date and do new scrape
    Save different links to a db
    Convert yaml to js-yaml for more functionality 
    modulaize functions
    create functions to retrieve from db
 */

//scrape web here and store as string
var text = ``

console.log(yaml.parse(text))
