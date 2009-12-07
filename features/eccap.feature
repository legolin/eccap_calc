Feature: Use Calculator
  As the developer of ECCAP Calculator
  I want to test all functionality.

  Scenario: See Personal Page
    Given I visit "http://localhost:4020/eccap_calc"
    Then I should see "Personal"
