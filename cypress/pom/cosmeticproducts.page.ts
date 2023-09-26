class CosmeticProductsPage {

    assertPageTitle() {
      cy.get("h1").should("contain", "Product notifications")
    }

    assertArchiveSuccess() {
      cy.get("h3").should("contain", "has been archived")
    }

    assertDeletionSuccess(name: string) {
      cy.get("p").should("contain", `${name} notification deleted`)
    }

    assertUnarchiveSuccess() {
      cy.get("h3").should("contain", "has been unarchived")
    }
  
    selectCreateNewProduct() {
        cy.get("a").contains("Create a new product notification").click()
    }

    selectArchivedNotifications() {
      cy.get("a").contains("Archived notifications").click()
  }

    selectLastCreatedProduct(name:string){
      cy.contains('tr', name).within(() => {
        cy.contains('a', 'View').click();
      });
    }
  
  }
  
export default new CosmeticProductsPage;