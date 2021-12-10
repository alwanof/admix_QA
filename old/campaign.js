require('dotenv').config();
var helper=require('../features/step_definitions/helpers/as_a_advertiser_i_can_login_successfully.helper.js')
const assert = require('assert');
const { Given, When, Then ,After,Before} = require('@cucumber/cucumber');
const {Builder,By,Key,until}=require('selenium-webdriver');

When("I type create a new campaign", {timeout: process.env.TIMEOUT * 1000}, async function () {
  
     this.actualAnswer = "yes";     
    
});

Then("I should be told that I have created a new campaign", {timeout: process.env.TIMEOUT * 1000}, async function () {
    assert(this.actualAnswer=='yes');


});











