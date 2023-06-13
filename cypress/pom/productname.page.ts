class ProductNamePage {

    assertPageTitle() {
      cy.get("h1").should("contain", "What is the product name")
    }
  
    enterProductName(name: string) {
            cy.get("#notification_product_name").type(name)
    }

    submit() {
      cy.get('.govuk-button').last().click()
  }

}
   
export default new ProductNamePage;