class AcceptAndSubmitPage {

    assertPageTitle() {
      cy.get("h1").should("contain", "Accept and submit - review")
    }
  
    assertProductApplicationCompleted(product:string) {
      cy.get(".govuk-summary-list__row").contains("Product name").get(".govuk-summary-list__value").should("contain", product)
    }

    submit() {
        cy.get('.govuk-button').last().click()
    }
  
}
  
export default new AcceptAndSubmitPage;