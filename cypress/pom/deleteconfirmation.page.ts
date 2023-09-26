class DeleteConfirmationPage {

    assertPageTitle() {
        cy.get("h1").should("contain", "Do you want to delete this notification?")
    }

    deleteNotificaiton() {
        cy.get("#yes").click()
        cy.get('.govuk-button').last().click()
    }

}

export default new DeleteConfirmationPage;