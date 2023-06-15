class CheckCodePage {

    assertPageTitle() {
      cy.get("h1").should("contain", "Check your phone")
    }
  
    fillOtpcode(code:string) {
      cy.get("#otp_code").type(code)
    }
  
    submit() {
      cy.get('.govuk-button').last().click()
    }
}
  
export default new CheckCodePage;