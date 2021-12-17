Feature: As a user I can add a new ad-group from campaign sidebar

    @TEST_TECH-7676
    Scenario: As a user I can add a new ad-group from campaign sidebar
        Given I am on adv login page
        When I type authorized
        And I create new campaign
        And I add new group
        Then I see group added
        Then CLEAN
