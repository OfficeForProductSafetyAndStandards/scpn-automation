class ProductRootCategoryPage {

    assertPageTitle() {
      cy.get("h1").should("contain", "What category of cosmetic product is it?")
    }
  
    choose(answer: string) {
        cy.get(".govuk-radios__item").contains(answer).click()
        cy.get('.govuk-button').last().click()
    }
  
}
  
export default new ProductRootCategoryPage;