Feature: As a user I can set a targeting for any ad-group

    @TEST_TECH-7680
    Scenario: As a user I can set a targeting for any ad-group
        Given I am on adv login page
        When I type authorized
        And I create new campaign
        And I add targeting
        Then I see group targeting
        Then CLEAN
