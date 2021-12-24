require('dotenv').config();
var helper=require('./helpers/as_a_advertiser_i_can_login_successfully.helper.js')
const assert = require('assert');
const { Given, When, Then ,After,Before} = require('@cucumber/cucumber');
const {Builder,By,Key,Keys,until}=require('selenium-webdriver');




When("I add {string} freq", {timeout: process.env.TIMEOUT * 1000}, async function (freq) { 
    await driver.sleep(process.env.SLEEP_2X * 1000)
    await driver.wait(until.elementLocated(By.id("name")),20000).click()
    await driver.sleep(process.env.SLEEP_3X * 1000)

   await driver.findElement(By.xpath("/html/body/div[1]/div/section[2]/div/div/section/main/div[4]/div/div/div/div[2]/div/div/form/div/div[1]/div/div/div/div/div/button")).click()
   
    await driver.findElement(By.id("placementLimit")).click()
    {
      const element = await driver.findElement(By.id("placementLimit"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
    for (let index = 0; index < 3; index++) {
      
        await driver.findElement(By.id("placementLimit")).sendKeys(Key.BACK_SPACE)
        
    }
    try {
      await driver.findElement(By.id("placementLimit")).sendKeys(freq)
      await driver.findElement(By.id("intervalUnit")).click()
      await driver.findElement(By.css(".ant-select-item-option-active > .ant-select-item-option-content")).click()


      await driver.findElement(By.id("price")).click()
      await driver.sleep(process.env.SLEEP_X * 1000)
      await driver.findElement(By.css(".ant-btn-primary > span")).click()
      await driver.sleep(process.env.SLEEP_X * 1000)
      await driver.findElement(By.css(".reporting-menu-campaign-title")).click()
    let getAnswer=await driver.wait(until.elementLocated(By.id("placementLimit")),20000).getAttribute("value")
        
        if(getAnswer==freq){
          this.actualAnswer="OK";
          }else{
          this.actualAnswer="Nope";
        }
      
    } catch  {
      this.actualAnswer="Nope";
      
    }
    
    
});


Then("I should be told freq: {string}", {timeout: process.env.TIMEOUT * 1000}, async function (answer) {
    assert(answer==this.actualAnswer);
    if(process.env.LOCAL_TESTING == "false"){
      driver.executeScript("lambda-status=passed");
    }
});












