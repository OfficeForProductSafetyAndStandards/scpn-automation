class CosmeticProductsPage {

    assertPageTitle() {
      cy.get("h1").should("contain", "Product notifications")
    }
  
    selectCreateNewProduct() {
        cy.get("a").contains("Create a new product notification").click()
    }
  
  }
  
export default new CosmeticProductsPage;