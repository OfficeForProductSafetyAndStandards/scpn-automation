class NotifiedNanomaterialPage {

    assertPageTitle() {
        cy.get("h1").should("contain", "Select a notified nanomaterial")
    }

    choose(answer: string) {
        cy.get("#nanomaterial_notification").select(answer)
        cy.get('button[class="govuk-button"]').last().click()
    }

}

export default new NotifiedNanomaterialPage;