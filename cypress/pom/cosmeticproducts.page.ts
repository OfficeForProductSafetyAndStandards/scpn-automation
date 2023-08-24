class CosmeticProductsPage {

    assertPageTitle() {
      cy.get("h1").should("contain", "Product notifications")
    }
  
    selectCreateNewProduct() {
        cy.get("a").contains("Create a new product notification").click()
    }

    selectLastCreatedProduct(name:string){
      cy.contains('tr', name).within(() => {
        cy.contains('a', 'View').click();
      });
    }
  
  }
  
export default new CosmeticProductsPage;