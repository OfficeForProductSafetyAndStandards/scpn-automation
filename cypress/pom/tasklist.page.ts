class TaskListPage {

    assertPageTitle() {
      cy.get("h1").should("contain", "Add a cosmetic product")
    }
  
    assertProductApplicationCompleted(product:string) {
      cy.get(".app-task-list__item b").should("contain", "Completed")
      cy.get("h1").should("contain", product)
    }

    selectCreateProduct() {
        cy.get("a").contains("Create the product").click()
        
    }

    selectProductDetails() {
      cy.get("a").contains("Product details").click()
    }

    selectAcceptandSubmit() {
      cy.get("a").contains("Accept and submit").click()
    }
  
  }
  
export default new TaskListPage;