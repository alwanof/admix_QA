Feature: Campaign
    Scenario Outline: Campaign
        When I Auth
        And I create a new campaign
        And I fill in the campaign form
        Then I should be told that I have created a new campaign