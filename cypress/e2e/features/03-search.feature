Feature: Verify Search Role type is only able to see permitted product notification information
  As a OSU portal Admin
  I want to verify that search users are only viewing what they are permitted to view on product notifications

  Background:

    #authenticate the support user
    Given the user visits the url: "https://staging-support.cosmetic-product-notifications.service.gov.uk"
    When the user logs into the service
    Then the user recieves text message and successfully authenticates using their verification code

  Scenario: Assert view permissions of OPSS General search user
    Then the OSU portal user changes the search user role to: "OPSS General"

    When the user visits the url: "https://staging-search.cosmetic-product-notifications.service.gov.uk"
    And the user logs into the service
    Then the user successfully authenticates using their verification code

    When user sees the Search Dashboard
    And user searches for previously created product notification
    Then user is displayed the correct product notification pertaining to the specified search user role

  Scenario: Assert view permissions of OPSS Enforcement search user
    Then the OSU portal user changes the search user role to: "OPSS Enforcement"

    When the user visits the url: "https://staging-search.cosmetic-product-notifications.service.gov.uk"
    And the user logs into the service
    Then the user successfully authenticates using their verification code

    When user sees the Search Dashboard
    And user searches for previously created product notification
    Then user is displayed the correct product notification pertaining to the specified search user role

  Scenario: Assert view permissions of OPSS Science search user
    Then the OSU portal user changes the search user role to: "OPSS Science"

    When the user visits the url: "https://staging-search.cosmetic-product-notifications.service.gov.uk"
    And the user logs into the service
    Then the user successfully authenticates using their verification code

    When user sees the Search Dashboard
    And user searches for previously created product notification
    Then user is displayed the correct product notification pertaining to the specified search user role

  Scenario: Assert view permissions of Trading Standards search user
    Then the OSU portal user changes the search user role to: "Trading Standards"

    When the user visits the url: "https://staging-search.cosmetic-product-notifications.service.gov.uk"
    And the user logs into the service
    Then the user successfully authenticates using their verification code

    When user sees the Search Dashboard
    And user searches for previously created product notification
    Then user is displayed the correct product notification pertaining to the specified search user role

  Scenario: Assert view permissions of NPIS search user
    Then the OSU portal user changes the search user role to: "NPIS"

    When the user visits the url: "https://staging-search.cosmetic-product-notifications.service.gov.uk"
    And the user logs into the service
    Then the user successfully authenticates using their verification code

    When user sees the Search Dashboard
    And user searches for previously created product notification
    Then user is displayed the correct product notification pertaining to the specified search user role

