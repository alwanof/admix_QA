require('dotenv').config();
var helper=require('./helpers/as_a_advertiser_i_can_login_successfully.helper.js')
const assert = require('assert');
const { Given, When, Then ,After,Before} = require('@cucumber/cucumber');
const {Builder,By,Key,Keys,until}=require('selenium-webdriver');




When("I add {string} price", {timeout: process.env.TIMEOUT * 1000}, async function (pricing) { 
    await driver.sleep(process.env.SLEEP_2X * 1000)
    await driver.wait(until.elementLocated(By.id("name")),20000).click()
    await driver.sleep(process.env.SLEEP_3X * 1000)

    try {
        await driver.findElement(By.id("price")).sendKeys(pricing)
        await driver.findElement(By.id("price")).sendKeys(Key.ENTER)

        await driver.findElement(By.id("price")).click()
        await driver.sleep(process.env.SLEEP_X * 1000)
        await driver.findElement(By.css(".ant-btn-primary > span")).click()
        await driver.sleep(process.env.SLEEP_X * 1000)
        await driver.findElement(By.css(".reporting-menu-campaign-title")).click()
        let getAnswer=await driver.wait(until.elementLocated(By.id("price")),20000).getAttribute("value")
            
        if(getAnswer==pricing){
            this.actualAnswer="OK";
        }else{
            this.actualAnswer="Nope";
        }
        
    } catch  {
        this.actualAnswer="Nope";
        
    }
    
});
Then("I should be told price: {string}", {timeout: process.env.TIMEOUT * 1000}, async function (answer) {
    assert(answer==this.actualAnswer);
    if(process.env.LOCAL_TESTING == "false"){
      driver.executeScript("lambda-status=passed");
    }
});












