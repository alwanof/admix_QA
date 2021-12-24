Feature: As a user I can set freq. capping for any ad-group

    @TEST_TECH-7681
    Scenario: As a user I can set freq. capping for any ad-group
        Given I am on adv login page
        When I type authorized
        And I create new campaign
        And I add "<freq>" freq
        Then I should be told freq: "<answer>"
        Then CLEAN
        Examples:
            | title   | freq | answer |
            | Numeric | 9    | OK     |
            | invalid | -2   | Nope   |
            | Letter  | foo  | Nope   |
