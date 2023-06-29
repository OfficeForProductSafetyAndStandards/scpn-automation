class ContainsSpecialApplicator {

    assertPageTitle() {
      cy.get("h1").should("contain", "What is the product contained in")
    }
  
    choose(answer: string) {
        cy.get(".govuk-radios__item").contains(answer).click()
     }

    submit() {
        cy.get('button[class="govuk-button"]').last().click()
    }
  
}
  
export default new ContainsSpecialApplicator;