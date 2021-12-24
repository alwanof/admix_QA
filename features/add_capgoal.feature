Feature: As a user I can set goal type for any ad-group

    @TEST_TECH-7682
    Scenario Outline: As a user I can set goal type for any ad-group
        Given I am on adv login page
        When I type authorized
        And I create new campaign
        When I type "<Goal Type>" Goal Type and "<Goal value>" Goal value
        Then I should be told goal: "<answer>"
        Then CLEAN
        Examples:
            | title    | Goal Type  | Goal value | answer |
            | Numeric  | Impression | 50         | OK     |
            | Numeric  | Percentage | 33         | OK     |
            | Negative | Percentage | -5         | Nope   |
