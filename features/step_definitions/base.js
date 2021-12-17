require('dotenv').config();
var helper=require('./helpers/as_a_advertiser_i_can_login_successfully.helper.js')
const assert = require('assert');
const { Given, When, Then ,After,Before} = require('@cucumber/cucumber');
const {Builder,By,Key,until}=require('selenium-webdriver');
//const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');



Before(async function(scenario) {
  let title=(scenario.pickle.steps[scenario.pickle.steps.length-1].text=='CLEAN')?scenario.pickle.steps[scenario.pickle.steps.length-2].text:scenario.pickle.steps[scenario.pickle.steps.length-1].text;
  
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
        resolution: '1920x1080',
        network: true,
        visual: true,
        console: true,
        video: true,
        name: title, // name of the test
        build: 'Adv. QA Testing '+new Date().toJSON().slice(0,10).replace(/-/g,'-'), // name of the build
    }

    const gridUrl = process.env.GRID_HOST;
     driver = new Builder()
        .usingServer(gridUrl)
        .withCapabilities(capabilities)
        .build();
    
  }
  


      });

  After(async function(scenario) {
    
   let title=(scenario.pickle.steps[scenario.pickle.steps.length-1].text=='CLEAN')?scenario.pickle.steps[scenario.pickle.steps.length-2].text:scenario.pickle.steps[scenario.pickle.steps.length-1].text;

   if(process.env.SCREENSHOT=='true' && process.env.LOCAL_TESTING=='true'){
      if (scenario.result.status === "FAILED") {
        await driver.takeScreenshot().then(
        function(image){
            let file=title+'_'+Math.random().toString(36).substring(7);
            require('fs').writeFileSync('screenshots/'+file+'.png', image, 'base64');
        })

      }
       

    }
    await driver.sleep(2000);
    if(process.env.EXIT_DRIVER=='true'){
      await driver.quit();
    }
    
    
    

  })



Given("I am on adv login page", {timeout: process.env.TIMEOUT * 1000}, async function () {
    await driver.get(process.env.BASE_URL+'/login');
   
    this.actualAnswer = "none";
});

When("I type authorized", {timeout: process.env.TIMEOUT * 1000}, async function () {
  
    let email = driver.findElement(By.id("email"));
    let password = driver.findElement(By.id("password"));
    let login=driver.findElement(By.xpath("//button[@type='submit']"));   
    await email.sendKeys(process.env.USER_LOGIN);
    await password.sendKeys(process.env.USER_PASSWORD);
    await login.click();
    
});

When("I create new campaign", {timeout: process.env.TIMEOUT * 1000}, async function () {
  
    await driver.wait(until.elementLocated(By.css(".ant-btn > .ant-row")),20000).click()
     await driver.wait(until.elementLocated(By.css(".card-content:nth-child(2) h4")),20000).click()
     await driver.findElement(By.id("name")).click()
    {
      const element = await driver.findElement(By.id("name"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
    await driver.findElement(By.id("name")).sendKeys("AUTO- Create Campaign");
     
    for (let index = 0; index < 24; index++) {
        await driver.findElement(By.id("startDate")).sendKeys(Key.BACK_SPACE)
        
    }
   
    await driver.findElement(By.id("startDate")).sendKeys("13/12/2025 14:38")
    await driver.findElement(By.id("startDate")).sendKeys(Key.ENTER)
    await driver.findElement(By.id("endDate")).sendKeys("13/11/2027 00:09")
    await driver.findElement(By.id("endDate")).sendKeys(Key.ENTER)
    await driver.findElement(By.id("dailyBudget")).sendKeys("10")
    await driver.findElement(By.id("totalBudget")).sendKeys("100")
    await driver.findElement(By.css(".submit-btn > span")).click()
    
});

Then("CLEAN", {timeout: process.env.TIMEOUT * 1000}, async function () {
    
    await driver.get("https://ads-dev.admixplay.com/overview")
    await driver.manage().window().maximize();
    await driver.findElement(By.css(".ant-table-row:nth-child(1) .campaigns-overview-menu-actions-wrapper svg")).click()
    await driver.findElement(By.xpath("/html/body/div[3]/div/div/ul/li[3]")).click() 
    await driver.findElement(By.xpath("/html/body/div[4]/div/div[2]/div/div[2]/div/div/button[2]")).click()
 });













