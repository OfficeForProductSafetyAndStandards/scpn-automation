class CheckCodePage {

    assertPageTitle() {
      cy.get("h1").should("contain", "Check your phone")
    }
  
    fillOtpcode() {
      cy.fixture("users.json")
          .as("users")
          .then((users) => {
            cy.get("#otp_code").type(users.opss.code)
          })
    }
  
    submit() {
      cy.get('.govuk-button').last().click()
  
  }
}
  
export default new CheckCodePage;