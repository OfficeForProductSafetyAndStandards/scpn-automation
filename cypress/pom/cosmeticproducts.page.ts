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
    selectNotification(value: number){
        if(value-1 > 20){
            let numClicks = value-1/20
            for(let i = 0; i < numClicks; i++){
                cy.get("a").contains("Next Page").click()
            }
            //i add + 1 because there is a view cookies "a" tag so it adds it to list of "a" containing View
            cy.get("a").filter(':contains("View")').eq(((value-1)%20)+1).click()
        }
        cy.get("a").filter(':contains("View")').eq(((value-1)%20)+1).click()
    }
  
  }
  
export default new CosmeticProductsPage;