class NumberOfShadesPage {

    assertPageTitle() {
      cy.get("h1").should("contain", "available in different shades")
    }
  
    choose(answer: string) {
        cy.get(".govuk-label").contains(answer).click()
        cy.get('.govuk-button').last().click()
      }
  
}
  
export default new NumberOfShadesPage;