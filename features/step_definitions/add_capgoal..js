require('dotenv').config();
var helper=require('./helpers/as_a_advertiser_i_can_login_successfully.helper.js')
const assert = require('assert');
const { Given, When, Then ,After,Before} = require('@cucumber/cucumber');
const {Builder,By,Key,Keys,until}=require('selenium-webdriver');




When("I type {string} Goal Type and {string} Goal value", {timeout: process.env.TIMEOUT * 1000}, async function (goalType,goalValue) { 
    await driver.sleep(process.env.SLEEP_2X * 1000)
    await driver.wait(until.elementLocated(By.id("name")),20000).click()
    await driver.sleep(process.env.SLEEP_3X * 1000)

    try {
        if(goalType=="Impression")
        {
            
            await driver.findElement(By.xpath("//*[@id='root']/div/section[2]/div/div/section/main/div[5]/div/div/div/div[2]/div/div/form/div/div[1]/div/div[2]/div/div/div/div[1]")).click()
            await driver.sleep(process.env.SLEEP * 1000)
            await driver.findElement(By.xpath("/html/body/div[1]/div/section[2]/div/div/section/main/div[5]/div/div/div/div[2]/div/div/form/div/div[1]/div/div[2]/div/div/div/div[2]/div/div/div/div[2]/div[1]/div/div/div[1]/div")).click()
        }
        await driver.wait(until.elementLocated(By.id("goalAmount")),20000).click() 
        await driver.findElement(By.id("goalAmount")).sendKeys(Key.BACK_SPACE)
        await driver.findElement(By.id("goalAmount")).sendKeys(Key.BACK_SPACE)
        await driver.findElement(By.id("goalAmount")).sendKeys(Key.BACK_SPACE)
        await driver.findElement(By.id("goalAmount")).sendKeys(goalValue)
        await driver.findElement(By.id("goalAmount")).sendKeys(Key.ENTER)

        
        await driver.sleep(process.env.SLEEP_X * 1000)
        await driver.findElement(By.css(".ant-btn-primary > span")).click()
        await driver.sleep(process.env.SLEEP_X * 1000)
        await driver.findElement(By.css(".reporting-menu-campaign-title")).click()
        let getAnswer=await driver.wait(until.elementLocated(By.id("goalAmount")),20000).getAttribute("value")
     
        if(getAnswer==goalValue){
            this.actualAnswer="OK";
        }else{
            this.actualAnswer="Nope";
        }
        
    } catch  {
        this.actualAnswer="Nope";
        
    }
    
});
Then("I should be told goal: {string}", {timeout: process.env.TIMEOUT * 1000}, async function (answer) {
    assert(answer==this.actualAnswer);
    if(process.env.LOCAL_TESTING == "false"){
      driver.executeScript("lambda-status=passed");
    }
});












