Feature: Authenticate into SCPN as Responsible Person
  Scenario: Login user as Responsible Person
    When the user visits the SCPN login page
    And the user logs into SCPN
    Then the user successfully sees the check code page

    When the user selects the responsible person