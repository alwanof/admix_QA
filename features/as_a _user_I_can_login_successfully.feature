Feature: As a  user I can login successfully

    @TEST_TECH-7664
    Scenario Outline: As a  user I can login successfully
        Given I am on adv login page
        When I type "<username>" and "<password>"
        Then I should be told "<answer>"
        Examples:
            | title            | username                     | password   | answer        |
            | Authorized       | mohammed.murad@admixplay.com | Zoom+9321  | Authorized    |
            | Invalid Email    | medo199.com                  | Zoom+9321  | InvEmail      |
            | Invalid Password | mohammed.murad@admixplay.com | DsopF93+22 | InvPassword   |
            | Sgort Password   | mohammed.murad@admixplay.com | zoom94     | ShortPassword |