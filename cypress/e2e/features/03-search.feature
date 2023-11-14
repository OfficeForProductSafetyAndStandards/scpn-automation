Feature: Verify Search Role type is only able to see permitted product notification information
  As a OSU portal Admin
  I want to verify that search users are only viewing what they are permitted to view on product notifications

  Background:

    #authenticate the support user
    Given the user visits the url: "https://staging-support.cosmetic-product-notifications.service.gov.uk"
    When the user logs into the service
    Then the user successfully authenticates using their verification code