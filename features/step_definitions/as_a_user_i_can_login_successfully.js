require('dotenv').config();
var helper=require('./helpers/as_a_advertiser_i_can_login_successfully.helper.js')
const assert = require('assert');
const { Given, When, Then ,After,Before} = require('@cucumber/cucumber');
const {Builder,By,Key,until}=require('selenium-webdriver');



When("I type {string} and {string}", {timeout: process.env.TIMEOUT * 1000}, async function (username,pass) {
  let logic=helper.catchLogic(username,pass);
    let email = driver.findElement(By.id("email"));
    let password = driver.findElement(By.id("password"));
    let login=driver.findElement(By.xpath("//button[@type='submit']"));
        
    await email.sendKeys(username);
    await password.sendKeys(pass);
    await login.click();
    switch (logic) {
      case "Authorized":
        if(await driver.wait(until.elementLocated(By.css("#Overview > .title")),20000).getText() == "Overview"){
          this.actualAnswer = "Authorized";
        }
        break;
      case "InvPassword":
        try {
            this.actualAnswer = "InvPassword";
            await driver.wait(until.elementLocated(By.css(".ant-message-notice:nth-child(1) span:nth-child(2)")),5000);
            
          } catch  {
           this.actualAnswer = "none"; 
          }
        break;
        case "ShortPassword":
        try {
            this.actualAnswer = "ShortPassword";
            await driver.wait(until.elementLocated(By.css(".ant-message-notice:nth-child(1) span:nth-child(2)")),5000); 
          } catch  {
           this.actualAnswer = "none"; 
          }
        break;
        case "InvEmail":
        if(await driver.wait(until.elementLocated(By.css(".ant-form-item-explain > div")),20000).getText() == "Please enter a valid email!"){
          this.actualAnswer = "InvEmail";
        }
        break;
    }
    
});

Then("I should be told {string}", {timeout: process.env.TIMEOUT * 1000}, async function (answer) {
    assert(answer == this.actualAnswer);
    driver.executeScript("lambda-status=passed");
    


});











