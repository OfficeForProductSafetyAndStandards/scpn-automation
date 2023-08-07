class TaskListPage {

  assertPageTitle() {
    cy.get("h1").should("contain", "Add a cosmetic product")
  }

  assertProductApplicationCompleted(product: string) {
    cy.get("#product-status").should("contain", "Completed")
    cy.get("h1").should("contain", product)
  }

  assertMultiItemApplicationCompleted() {
    cy.get("#multi-item-status").should("contain", "Completed")
  }

  assertFirstItemCompleted() {
    cy.get(".app-task-list__items opss-task-sub__list li:nth-child(1)").should("contain", "Completed")
  }

  selectFirstItem() {
    cy.get("a").contains("Item #1").click()
  }

  selectCreateProduct() {
    cy.get("a").contains("Create the product").click()
  }

  selectMultiItemKit() {
    cy.get("a").contains("Define the multi-item kit").click()
  }
  
  selectProductDetails() {
    cy.get("a").contains("Product details").click()
  }

  selectNanomaterials() {
    cy.get("a").contains("Nanomaterial #1").click()
  }
  selectAcceptandSubmit() {
    cy.get("a").contains("Accept and submit").click()
  }

}

export default new TaskListPage;