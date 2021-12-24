require('dotenv').config();
var helper=require('./helpers/as_a_advertiser_i_can_login_successfully.helper.js')
const assert = require('assert');
const { Given, When, Then ,After,Before} = require('@cucumber/cucumber');
const {Builder,By,Key,Keys,until}=require('selenium-webdriver');
const by = require('selenium-webdriver/lib/by');




When("I add {string} Cap Type, {string} Daily Cap and {string} Lifetime Cap", {timeout: process.env.TIMEOUT * 1000}, async function (capType,dailyCap,lifeTimeCap) { 
    
    await driver.sleep(process.env.SLEEP_2X * 1000)
    await driver.wait(until.elementLocated(By.id("name")),20000).click()
    await driver.sleep(process.env.SLEEP_3X * 1000)

    try {
         await driver.wait(until.elementLocated(By.xpath("//*[@id='root']/div/section[2]/div/div/section/main/div[6]/div/div/div/div[2]/div/div/form/div/div[1]/div/div[2]/div/div/div")),20000).click()
        await driver.wait(until.elementLocated(By.xpath("//*[@id='root']/div/section[2]/div/div/section/main/div[6]/div/div/div/div[2]/div/div/form/div/div[1]/div/div[2]/div/div/div/div[2]/div/div/div/div[2]/div[1]/div/div/div[2]/div")),20000).click()
        await driver.findElement(By.id("dailyCapAmount")).click()
        await driver.findElement(By.id("dailyCapAmount")).sendKeys(dailyCap)
        await driver.findElement(By.id("lifetimeCapAmount")).click()
        await driver.findElement(By.id("lifetimeCapAmount")).sendKeys(lifeTimeCap)

        await driver.sleep(process.env.SLEEP_X * 1000)
        await driver.findElement(By.css(".ant-btn-primary > span")).click()
        await driver.sleep(process.env.SLEEP_X * 1000)
        await driver.findElement(By.css(".reporting-menu-campaign-title")).click()
        let getDailyCap=await driver.wait(until.elementLocated(By.id("dailyCapAmount")),20000).getAttribute("value")
        let getLifeTimeCap=await driver.wait(until.elementLocated(By.id("dailyCapAmount")),20000).getAttribute("value")
            
        if(getDailyCap==dailyCap && getLifeTimeCap==lifeTimeCap){
            this.actualAnswer="OK";
        }else{
            this.actualAnswer="Nope";
        }
        
    } catch  {
         this.actualAnswer="Nope";
    }
    
    
});
Then("I should be told {string} Cap Type", {timeout: process.env.TIMEOUT * 1000}, async function (answer) {
    //const elements = await driver.findElements(By.css(".campaign-page-type"))
      assert(answer,this.actualAnswer)
  
    if(process.env.LOCAL_TESTING == "false"){
        if(answer==this.actualAnswer)
    {
        driver.executeScript("lambda-status=passed");
    }
    else
    {
        driver.executeScript("lambda-status=failed");
    }
    }
});












