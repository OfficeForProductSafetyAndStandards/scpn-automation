class TaskListPage {

    assertPageTitle() {
      cy.get("h1").should("contain", "Add a cosmetic product")
    }
  
    assertProductApplicationCompleted() {
      cy.get(".app-task-list__item b").should("contain", "COMPLETED")
    }
    selectCreateProduct() {
        cy.get("a").contains("Create the product").click()
    }
  
  }
  
export default new TaskListPage;