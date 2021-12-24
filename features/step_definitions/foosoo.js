require('dotenv').config();
var helper=require('./helpers/as_a_advertiser_i_can_login_successfully.helper.js')
const assert = require('assert');
const { Given, When, Then ,After,Before} = require('@cucumber/cucumber');
const {Builder,By,Key,Keys,until}=require('selenium-webdriver');
var remote = require('selenium-webdriver/remote');
const by = require('selenium-webdriver/lib/by');




When("Make action", {timeout: process.env.TIMEOUT * 1000}, async function () { 
  
    driver.setFileDetector(new remote.FileDetector);
    await driver.sleep(process.env.SLEEP_2X * 1000)
    await driver.wait(until.elementLocated(By.id("name")),20000).click()
    await driver.sleep(process.env.SLEEP_3X * 1000)

    await driver.findElement(By.css(".reporting-menu-campaign-title")).click()
    await driver.findElement(By.css(".ant-col:nth-child(1) .description")).click()
    //await driver.findElement(By.css(".anticon-cloud-upload path:nth-child(1)")).click()
    
    await driver.findElement(By.xpath("//input[@type=\'file\']")).sendKeys(__dirname+'/images/300x250.jpg')
    
    
    
    
});













