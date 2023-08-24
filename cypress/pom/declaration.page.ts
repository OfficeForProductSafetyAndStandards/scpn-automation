class DeclarationPage {

    assertPageTitle() {
      cy.get("h1").should("contain", "Accept and submit")
    }

    submit() {
        cy.get('.govuk-button').last().click()
    }
  
}
  
export default new DeclarationPage;