class ExposureRoutesPage {

    assertPageTitle() {
      cy.get("h1").should("contain", "How is the user likely to be exposed to the nanomaterials?")
    }
  
    choose(answer: string) {
        cy.get(".govuk-label").contains(answer).click()
        cy.get('button[class="govuk-button"]').last().click()
     }
  
}
  
export default new ExposureRoutesPage;