Feature: Verify Search Role type is only able to see permitted product notification information
  As a OSU portal Admin
  I want to verify that search users are only viewing what they are permitted to view on product notifications
  Background:

    #authenticate the support user
    Given the user visits the url: "https://staging-support.cosmetic-product-notifications.service.gov.uk"
    When the user logs into the service
    Then the user recieves text message and successfully authenticates using their verification code

  Scenario: Verify search for live product notification
    When the OSU portal user searches for previously created product notification
    Then user is displayed the correct product notification pertaining to the specified search user role

  Scenario: Verify Deletion and Recovery for live product notification
    When the OSU portal user searches for previously created product notification
    Then the OSU portal user deletes the live product notification
    When the user returns to the Dashboard and searches for the deleted product notification
    Then user is displayed the correct product notification pertaining to the specified search user role
    And the OSU portal user recovers the live product notification
    When the user returns to the Dashboard and searches for the recovered product notification
    Then user is displayed the correct product notification pertaining to the specified search user role

