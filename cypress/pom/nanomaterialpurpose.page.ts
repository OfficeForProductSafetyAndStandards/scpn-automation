class NanomaterialPurposePage {

    assertPageTitle() {
      cy.get("h1").should("contain", "What is the purpose of this nanomaterial?")
    }
  
    choose(answer: string) {
        cy.get(".govuk-label").contains(answer).click()
        cy.get('button[class="govuk-button"]').last().click()
     }

}
  
export default new NanomaterialPurposePage;