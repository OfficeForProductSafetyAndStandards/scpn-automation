class ProductSubSubCategoryPage {

    assertPageTitle() {
      cy.get("h1").should("contain", "What category of")
    }
  
    choose(answer: string) {
        cy.get(".govuk-radios__item").contains(answer).click()
      }
  
    submit() {
      cy.get('.govuk-button').last().click()
    }
}
  
export default new ProductSubSubCategoryPage;