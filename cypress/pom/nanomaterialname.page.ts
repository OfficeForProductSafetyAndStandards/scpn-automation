class NanomaterialNamePage {

    assertPageTitle() {
        cy.get("h1").should("contain", "What is the name of the nanomaterial")
    }

    enterName(name: string) {
        cy.get("#nanomaterial_notification_name").type(name)
        cy.get('.govuk-button').last().click()
    }

}

export default new NanomaterialNamePage;