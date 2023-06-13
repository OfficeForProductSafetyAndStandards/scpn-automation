Feature: Submitting Product Specifications into SCPN as Responsible Person
As a user of the SCPN service
I  want to be able to submit new product specifications
So the data can be accessed by both search and submit users to ensure they comply to the Government's Product and Safety Standards
         
  Scenario: Verify Creation of Product Specification (No nanomaterials / no multi-items - Happy Path - COSBETA-2066)
    # authenticate responsible person
    Given the user visits the SCPN login page
    When the user logs into SCPN
    Then the user successfully authenticates using their check code

    When the user selects the responsible person
    And the user completes the first stage of creating a new product notification with the following details:
      | name          |
      | TestProduct2  |
    Then the details of the cosmetic product are successfully added to SCPN