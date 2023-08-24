class ExposureConditionPage {

    assertPageTitle() {
      cy.get("h1").should("contain", "intended to be rinsed off or left on?")
    }
  
    choose(answer: string) {
        cy.get(".govuk-label").contains(answer).click()
        cy.get('button[class="govuk-button"]').last().click()
     }
  
}
  
export default new ExposureConditionPage;