class NanomaterialPlacedOnMarketPage {

    assertPageTitle() {
      cy.get("h1").should("contain", "When can you place products containing this nanomaterial on the market?")
    }
  
    submit() {
        cy.get('button[class="govuk-button"]').last().click()
     }

}
  
export default new NanomaterialPlacedOnMarketPage;