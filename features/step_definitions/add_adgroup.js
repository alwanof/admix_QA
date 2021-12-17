require('dotenv').config();
var helper=require('./helpers/as_a_advertiser_i_can_login_successfully.helper.js')
const assert = require('assert');
const { Given, When, Then ,After,Before} = require('@cucumber/cucumber');
const {Builder,By,Key,Keys,until}=require('selenium-webdriver');




When("I add new group", {timeout: process.env.TIMEOUT * 1000}, async function () { 
    await driver.wait(until.elementLocated(By.xpath("/html/body/div[1]/div/section[2]/div/div/section/div/div/ul/li[1]/div[3]/div[2]/button")),20000).click()
    await driver.sleep(5000)
  
    for (let index = 0; index < 24; index++) {
        await driver.findElement(By.id("name")).sendKeys(Key.BACK_SPACE)
        
    }
    await driver.findElement(By.id("name")).sendKeys("MyNewAdGroup")
    await driver.findElement(By.id("price")).click()
    await driver.sleep(5000)
    await driver.findElement(By.xpath("/html/body/div[1]/div/section[2]/div/div/section/main/div[9]/button")).click()
});


Then("I see group added", {timeout: process.env.TIMEOUT * 1000}, async function () {
    var answer=await driver.wait(until.elementLocated(By.css(".ant-collapse-item:nth-child(2) > .ant-collapse-header .ant-typography")),20000).getText()
    assert(answer=='Ad group: MyNewAdGroup');
  
    if(process.env.LOCAL_TESTING == "false"){
      driver.executeScript("lambda-status=passed");
    }
});












