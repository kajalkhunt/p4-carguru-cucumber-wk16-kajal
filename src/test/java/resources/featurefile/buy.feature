Feature: Search functionality
  As a user I want to search functionality

  Scenario Outline: Search the buy car with model
    Given I am on homepage
    When I mouse hover on “buy+sell” tab
    And I click ‘Search Cars’ link
    Then I navigate to ‘new and used car search’ page
    And I select make "<make>"
    And I select model "<model>"
    And I select location "<location>"
    And I select price "<price>"
    And I click on Find My Next Car tab
    Then I should see the make "<make>" in results
    Examples:
      | make          | model       | location     | price   |
      | Honda         | Accord      | NSW - Sydney | $20,000 |
      | BMW           | Any Model   | ACT - All    | $10,000 |
      | Nissan        | Any Model   | NT - North   | $15,000 |
      | Land Rover    | Discovery 4 | QLD - All    | $60,000 |
      | Mazda         | 6           | Any Location | $5,000  |
      | Mercedes-Benz | Any Model   | NSW - Hunter | $10,000 |







