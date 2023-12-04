Feature: Search for Products as a Search User
  As a user of the SCPN service
  I  want to be able to search for a product notification i created
  So that i can view the details of said product notification

  Background:

    #authenticate the submit user
    Given the user visits the url: "https://staging-search.cosmetic-product-notifications.service.gov.uk"
    When the user logs into the service
    Then the user successfully authenticates using their verification code

   Scenario: Verify Header
    Then the "Search" user sees the header information
    And the "Search" user sees the correct header information after signing out


   Scenario: Verify Footer
    Then the "Search" user sees the footer information
    And the "Search" user sees the correct footer information after signing out

   Scenario: Verify Search of Cosmetic Product (Archived) (COSBETA-2306)
     Then user searches for Archived product notification
     When user sees the results of their search
     Then user views the details of their archived result

  Scenario: Verify Search of Cosmetic Product (Notified) (COSBETA-2307)
    Then user searches for Notified product notification
    When user sees the results of their search
    Then user views the details of their notified result

  Scenario: Verify Search of Ingredient (COSBETA-2308)
    Then user searches for an Ingredient
    When user sees the results of their ingredient search
    Then user views the details of the ingredient

