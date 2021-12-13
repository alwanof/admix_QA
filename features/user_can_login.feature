Feature: As a  user I can login successfully

    @TEST_TECH-7664
    Scenario Outline: As a  user I can login successfully
        Given I am on adv login page
        When I type "<username>" and "<password>"
        Then I should be told "<answer>"
        Examples:
            | title         | username    | password  | answer   |
            | Invalid Email | medo199.com | Zoom+9321 | InvEmail |