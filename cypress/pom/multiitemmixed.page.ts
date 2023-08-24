class MultiItemMixedPage {

    assertPageTitle() {
      cy.get("h1").should("contain", "Does the kit contain items that need to be mixed?")
    }
  
    choose(answer: string) {
        cy.get(".govuk-label").contains(answer).click()
        cy.get('button[class="govuk-button"]').last().click()
     }

}
  
export default new MultiItemMixedPage;