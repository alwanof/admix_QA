Feature: As a user I can set pricing for any ad-group

    @TEST_TECH-7684
    Scenario Outline: As a user I can set pricing for any ad-group
        Given I am on adv login page
        When I type authorized
        And I create new campaign
        And I add "<price>" price
        Then I should be told price: "<answer>"
        Then CLEAN
        Examples:
            | title   | price | answer |
            | Numeric | 10    | OK     |
            | invalid | -2    | Nope   |
            | Letter  | foo   | Nope   |