require('dotenv').config();
var helper=require('./helpers/as_a_advertiser_i_can_login_successfully.helper.js')
const assert = require('assert');
const { Given, When, Then ,After,Before} = require('@cucumber/cucumber');
const {Builder,By,Key,Keys,until}=require('selenium-webdriver');


When("I edit campaign", {timeout: process.env.TIMEOUT * 1000}, async function () { 
    await driver.wait(until.elementLocated(By.css(".ant-table-row:nth-child(3) .item-title")),20000).click()
    await driver.sleep(5000)
    await driver.findElement(By.css(".reporting-menu-campaign-title")).click()
    await driver.sleep(5000)
    await driver.findElement(By.id("name")).click()
   
   

    
});

When("I add {string} targeting", {timeout: process.env.TIMEOUT * 1000}, async function (target) { 
    //await driver.wait(until.elementLocated(By.id("name")),20000).click()
    await driver.sleep(process.env.SLEEP_2X * 1000)
    await driver.findElement(By.css(".ant-row:nth-child(1) > .ant-col > .ant-form-item-control-input .sc-iJCRrE")).click()
    await driver.findElement(By.css(".focused > .sc-iJCRrE")).sendKeys("USA")
    await driver.findElement(By.css(".focused > .sc-iJCRrE")).sendKeys(Key.ENTER)
    await driver.findElement(By.css(".focused > .sc-iJCRrE")).click()
    await driver.findElement(By.css(".sc-ezzafa:nth-child(3) > .sc-iJCRrE")).click()
    {
      const element = await driver.findElement(By.css(".focused > .sc-iJCRrE"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
    try {
      await driver.findElement(By.css(".focused > .sc-iJCRrE")).sendKeys(target)
      await driver.findElement(By.css(".focused > .sc-iJCRrE")).sendKeys(Key.ENTER)
      await driver.findElement(By.css(".campaign-group-step-wrapper:nth-child(3) .campaign-step-content")).click()
      await driver.findElement(By.css(".admix-tag:nth-child(1) path")).click()
      await driver.findElement(By.id("price")).click()
      await driver.sleep(process.env.SLEEP_X * 1000)
      await driver.findElement(By.css(".ant-btn-primary > span")).click()
      await driver.sleep(process.env.SLEEP_X * 1000)
      await driver.findElement(By.css(".reporting-menu-campaign-title")).click()
      let getAnswer=await driver.wait(until.elementLocated(By.css(".admix-tag")),20000).getText()
      
      if(getAnswer==target){
        this.actualAnswer="OK";
        }else{
        this.actualAnswer="Nope";
      }
      
    } catch {
      this.actualAnswer="Nope";

    }
      
    
   
   
   

    
});


Then("I should be told targeting: {string}", {timeout: process.env.TIMEOUT * 1000}, async function (answer) {
    
    assert(answer==this.actualAnswer);
  
    if(process.env.LOCAL_TESTING == "false"){
      driver.executeScript("lambda-status=passed");
    }
});












