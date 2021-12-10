const webdriver = require('selenium-webdriver');
 
// username: Username can be found at automation dashboard
const USERNAME = "mohammed.murad";
 
// Accesskey:  Accesskey can be generated from automation dashboard or profile section
const KEY = '3WFRg5mNiCsdaZ5uI6tlSh6ZUfDLDPvOhRCr0HFxKx7GAP3GFa';
 
// gridUrl: gridUrl can be found at automation dashboard
const GRID_HOST = 'hub.lambdatest.com/wd/hub';
 
function searchTextOnGoogle() {
    // Setup Input capabilities
    const capabilities = {
        platform: 'Windows 10',
        browserName: 'Chrome',
        version: '92.0',
        resolution: '1024x768',
        network: true,
        visual: true,
        console: true,
        video: true,
        name: 'Test 1', // name of the test
        build: 'NodeJS build' // name of the build
    }
 
    // URL: https://{username}:{accessKey}@{GRID_HOST}
    const gridUrl = 'https://' + USERNAME + ':' + KEY + '@' + GRID_HOST;
 
    // setup and build selenium driver object
    const driver = new webdriver.Builder()
        .usingServer(gridUrl)
        .withCapabilities(capabilities)
        .build();
 
    // navigate to a url, search for a text and get title of page
    driver.get('https://ads-dev.admixplay.com/login').then(function() {
        driver.getTitle().then(function(title) {
                setTimeout(function() {
                    console.log(title);
                    driver.quit();
                }, 5000);
            });
    });
}

searchTextOnGoogle();