class NotifiedToEUPage {

    assertPageTitle() {
        cy.get("h1").should("contain", "Was the EU notified")
    }

    choose(answer: string) {
        cy.get(".govuk-label").contains(answer).click()
        cy.get("label").contains("Day")
            .next()
            .type("19")
        cy.get("label").contains("Month")
            .next()
            .type("09")
        cy.get("label").contains("Year")
            .next()
            .type("2019")
        cy.get('button[class="govuk-button"]').last().click()
    }

}

export default new NotifiedToEUPage;