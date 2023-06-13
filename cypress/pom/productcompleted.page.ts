class ProductCompletedPage {

    assertSuccessfulCreation() {
      cy.get("h3").should("contain", "The task has been completed")
    }

    gotoTaskListPage() {
        cy.get('.govuk-button').contains("Go to the task list page").click()
    }

    submit() {
      cy.get('.govuk-button').contains("Continue").click()
  }

}
   
export default new ProductCompletedPage;