Feature: Verify Search Role type is only able to see permitted product notification information
  As a OSU portal Admin
  I want to verify that search users are only viewing what they are permitted to view on product notifications
  Background:

    #authenticate the support user
    Given the user visits the url: "https://staging-support.cosmetic-product-notifications.service.gov.uk"
    When the user logs into the service
    Then the user recieves text message and successfully authenticates using their verification code

  Scenario: Verify search for live product notification
    When the OSU user searches for previously created product notification
    Then OSU user is displayed the correct product notification information

  Scenario: Verify Deletion and Recovery for live product notification
    When the OSU user searches for previously created product notification
    Then the OSU user deletes the live product notification
    When the user returns to the Dashboard and searches for the deleted product notification
    Then OSU user is displayed the correct product notification information
    And the OSU user recovers the live product notification
    When the user returns to the Dashboard and searches for the recovered product notification
    Then OSU user is displayed the correct product notification information

  Scenario: Verify update of RP account
    When the OSU user looks for a Responsible Person
    Then the OSU user changes the RP name