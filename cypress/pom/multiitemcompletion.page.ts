class MultiItemCompletionPage {

    assertPageTitle() {
        cy.get("h3").should("contain", "The task has been completed")
    }

    submit() {
        cy.get('a').contains('Go to the task list page').click()
    }
}

export default new MultiItemCompletionPage;