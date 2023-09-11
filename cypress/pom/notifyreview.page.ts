class NotifyReviewPage {

    assertPageTitle() {
        cy.get("h1").should("contain", "Check your answers")
    }

    assertInfo(name: string) {
        cy.get(`.govuk-summary-list__row:contains("Name")`).find(`.govuk-summary-list__value:contains("${name}")`)
    }
    submit() {
        cy.get('.govuk-button').last().click()
    }

}

export default new NotifyReviewPage;