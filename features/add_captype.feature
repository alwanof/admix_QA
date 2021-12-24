Feature: As a user I can set cap type for any ad-group

    @TEST_TECH-7683
    Scenario Outline: As a user I can set cap type for any ad-group
        Given I am on adv login page
        When I type authorized
        And I create new campaign
        When I add "<Cap Type>" Cap Type, "<Daily Cap>" Daily Cap and "<Lifetime Cap>" Lifetime Cap
        Then I should be told "<answer>" Cap Type
        Then CLEAN
        Examples:
            | title    | Cap Type   | Daily Cap | Lifetime Cap | answer |
            | Numeric  | impression | 1         | 1            | OK     |
            | Negative | impression | -1        | -1           | Nope   |
