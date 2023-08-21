class FormulationTypePage {

    assertPageTitle() {
      cy.get("h1").should("contain", "How will you provide")
    }
  
    choose(answer: string) {
        cy.get(".govuk-label").contains(answer).click()
        cy.get('button[class="govuk-button"]').last().click()
     }
  
}
  
export default new FormulationTypePage;