class SpecialApplicatorType {

    assertPageTitle() {
      cy.get("h1").should("contain", "What type of applicator?")
    }
  
    choose(answer: string) {
        cy.get(".govuk-label").contains(answer).click()
     }

    submit() {
        cy.get('button[class="govuk-button"]').last().click()
    }
  
}
  
export default new SpecialApplicatorType;