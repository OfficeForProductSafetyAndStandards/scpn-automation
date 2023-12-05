Feature: Verify Search Role type is only able to see permitted product notification information
  As a OSU portal Admin
  I want to verify that search users are only viewing what they are permitted to view on product notifications
  Background:

    #authenticate the support user
    Given the user visits the url: "https://staging-support.cosmetic-product-notifications.service.gov.uk"
    When the user logs into the service
    Then the user recieves text message and successfully authenticates using their verification code

  Scenario: Verify Header
    Then the "OSU" user is shown header information
    And the "OSU" user is shown correct header information after signing out


  Scenario: Verify Footer
    Then the "OSU" user is shown footer information
    And the "OSU" user is shown correct footer information after signing out

  Scenario: Verify name change for OSU user
    When the OSU user views their account details
    Then the OSU user changes their name
    When the OSU checks the changes to their account name
    Then the OSU user reverts the changes

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
    When the OSU user views the history log
    Then the OSU user checks changes to product notification

  Scenario: Verify search/view and update of RP account
    When the OSU user looks for a Responsible Person
    Then the OSU user changes the RP name and business type
    When the OSU user verifies the change in RP name and business type
    Then the OSU user reverts the changes and verifies the information is correct
    When the OSU user views the history log
    Then the OSU user checks the changes they made to the "Responsible Person" account

  Scenario: Verify view/update of Search account
    When the OSU user looks for a "Search" account
    Then the OSU user changes the Search account Name and Role Type
    When the OSU user verifies the change in Search account name and roletype
    Then the OSU user reverts the changes to the Search account
    When the OSU user views the history log
    Then the OSU user checks the changes they made to the "Search" account

  Scenario: Verify view/update of Submit account
    When the OSU user looks for a "Submit" account
    Then the OSU user changes the Submit account Name and email address
    When the OSU user verifies the change in Submit account name and address
    Then the OSU user reverts the changes to the Submit account

  Scenario: History Log, verify reactivation and deactivation of search account
    When the OSU user looks for a search account
    Then the OSU user deactivates and reactivates an account
    When the OSU user views the history log
    Then the OSU user checks the changes they made to the product notification
