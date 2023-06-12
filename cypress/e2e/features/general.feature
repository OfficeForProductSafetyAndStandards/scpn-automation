Feature: Submitting Product Specifications into SCPN as Responsible Person
As a user of the SCPN service
I  want to be able to submit product specifications
So the data can be accessed by both search and submit users to ensure they comply to the Government Product and Safety Standards
         
  Scenario: Verify Creation of Product Specification (No nanomaterials / no multi-items - Happy Path - COSBETA-2066)
    # authenticate responsible person
    Given the user visits the SCPN login page
    When the user logs into SCPN
    Then the user successfully sees the check code page

    When the user selects the responsible person
    And the user completes the first stage of a new product notification with the following details:
      | Image     |
      | test.jpg  |