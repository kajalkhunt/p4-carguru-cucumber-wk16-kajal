Feature: Search usedcars
  As a user I want to search usedcars

  Scenario Outline: Search the used car with model
    Given I am on homepage
    When I mouse hover on “buy+sell” tab
    And I click ‘Used’ link
    Then I navigate to ‘Used Cars For Sale’ page
    And I select make "<make>"
    And I select model "<model>"
    And I select location "<location>"
    And I select price "<price>"
    And I click on Find My Next Car tab
    Then I should see the make "<make>" in results
    Examples:
      | make       | model     | location              | price   |
      | Alfa Romeo | Any Model | NSW - Central Coast   | $60,000 |
      | Audi       | A1        | NSW - Far North Coast | $80,000 |
      | Holden     | Adventra  | NSW - Central Coast   | $45,000 |
      | Audi       | A4        | QLD - All             | $40,000 |
      | Hyundai    | Accent    | NSW - All             | $60,000 |
      | Mazda      | 6         | QLD - All             | $40,000 |