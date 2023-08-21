class NanomaterialNotifiedePage {

    assertPageTitle() {
      cy.get("h1").should("contain", "Have you submitted a notification about this nanomaterial in GB since 1 January 2021?")
    }
  
    choose(answer: string) {
        cy.get(".govuk-label").contains(answer).click()
        cy.get('button[class="govuk-button"]').last().click()
     }

}
  
export default new NanomaterialNotifiedePage;