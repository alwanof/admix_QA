require('dotenv').config();
var helper=require('./helpers/as_a_advertiser_i_can_login_successfully.helper.js')
const assert = require('assert');
const { Given, When, Then ,After,Before} = require('@cucumber/cucumber');
const {Builder,By,Key,until}=require('selenium-webdriver');



When("I type authorized", {timeout: process.env.TIMEOUT * 1000}, async function () {
  
    let email = driver.findElement(By.id("email"));
    let password = driver.findElement(By.id("password"));
    let login=driver.findElement(By.xpath("//button[@type='submit']"));   
    await email.sendKeys(process.env.USER_LOGIN);
    await password.sendKeys(process.env.USER_PASSWORD);
    await login.click();
    
});
When("I select the campain type", {timeout: process.env.TIMEOUT * 1000}, async function () { 
   await driver.wait(until.elementLocated(By.css(".ant-btn > .ant-row")),20000).click() 
});

When("I navigate to the campain page", {timeout: process.env.TIMEOUT * 1000}, async function () { 
   await driver.wait(until.elementLocated(By.css(".card-content:nth-child(2) h4")),20000).click() 
});

When("I fill campaign form with valid data", {timeout: process.env.TIMEOUT * 1000}, async function () { 
    await driver.findElement(By.id("name")).sendKeys("Demo Camp1")
    await driver.findElement(By.id("startDate")).sendKeys("13/09/2026 00:09")
    await driver.findElement(By.id("startDate")).sendKeys(Key.ENTER)
    await driver.findElement(By.id("endDate")).sendKeys("13/11/2027 00:09")
    await driver.findElement(By.id("endDate")).sendKeys(Key.ENTER)
    await driver.findElement(By.id("dailyBudget")).sendKeys("10")
    await driver.findElement(By.id("totalBudget")).sendKeys("100")

});
When("I click campain - save and continue", {timeout: process.env.TIMEOUT * 1000}, async function () { 
    await driver.findElement(By.css(".submit-btn > span")).click()

});

Then("I should be told mission done", {timeout: process.env.TIMEOUT * 1000}, async function () {
    var answer=await driver.wait(until.elementLocated(By.css(".campaign-step-filter-apps h2")),20000).getText()
    //await driver.findElement(By.css(".campaign-step-filter-apps h2")).getText() == "Filter Apps"
    assert(answer,'Filter Apps');
    if(process.env.LOCAL_TESTING == "false"){
      driver.executeScript("lambda-status=passed");
    }
});











