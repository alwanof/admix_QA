require('dotenv').config();
var helper=require('./helpers/as_a_advertiser_i_can_login_successfully.helper.js')
const assert = require('assert');
const { Given, When, Then ,After,Before} = require('@cucumber/cucumber');
const {Builder,By,Key,until}=require('selenium-webdriver');
//const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');



Before(async function(scenario) {
  let title=scenario.pickle.steps[scenario.pickle.steps.length-1].text;
  
  if(process.env.LOCAL_TESTING=='true'){
    driver = await  new Builder()
    .forBrowser('chrome')
    .setChromeOptions((process.env.HEADLESS=='true')?new chrome.Options().headless():new chrome.Options())
    //.manage().window().setRect(1920, 1090)
    //.manage().window().minimize()
    .build();

  }else{
    const capabilities = {
        platform: 'Windows 10',
        browserName: 'Chrome',
        version: '92.0',
        resolution: '1024x768',
        network: true,
        visual: true,
        console: true,
        video: true,
        name: title, // name of the test
        build: 'Adv. QA Automation Testing' // name of the build
    }

    const gridUrl = process.env.GRID_HOST;
     driver = new Builder()
        .usingServer(gridUrl)
        .withCapabilities(capabilities)
        .build();
    
  }
  


      });

  After(async function(scenario) {

   let title=scenario.pickle.steps[scenario.pickle.steps.length-1].text;
    if(process.env.SCREENSHOT=='true' && process.env.LOCAL_TESTING=='true'){
      if (scenario.result.status === "FAILED") {
        await driver.takeScreenshot().then(
        function(image){
            let file=title+'_'+Math.random().toString(36).substring(7);
            require('fs').writeFileSync('screenshots/'+file+'.png', image, 'base64');
        })

      }
       

    }
    await driver.quit();

  });



Given("I am on adv login page", {timeout: process.env.TIMEOUT * 1000}, async function () {
    await driver.get(process.env.BASE_URL);
    this.actualAnswer = "none";
});













