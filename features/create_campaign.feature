Feature: As a  user I can create campain

    Scenario Outline: As a  user I can create campain
        Given I am on adv login page
        When I type authorized
        And I select the campain type
        And I navigate to the campain page
        And I fill campaign form with valid data
        And  I click campain - save and continue
        Then I should be told mission done
