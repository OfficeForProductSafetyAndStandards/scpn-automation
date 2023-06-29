class AddPhysicalFormPage {

    assertPageTitle() {
      cy.get("h1").should("contain", "What is the physical form of the product")
    }
  
    choose(answer: string) {
        cy.get(".govuk-radios__item").contains(answer).click()
      }
  
    submit() {
      cy.get('.govuk-button').last().click()
    }
}
  
export default new AddPhysicalFormPage;