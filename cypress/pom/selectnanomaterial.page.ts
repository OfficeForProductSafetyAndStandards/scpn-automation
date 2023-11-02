class SelectNanomaterialPage {

    assertPageTitle() {
        cy.get("h1").should("contain", "Select which nanomaterials are included in the item")
    }

    choose(answer: string) {
        cy.get(".govuk-label").contains(answer).click()
        cy.get('button[class="govuk-button"]').last().click()
    }

    chooseMulti(list: string[]) {
        for (let i = 0; i < list.length; i++) {
            cy.get(".govuk-label").contains(list[i]).click()
        }
        cy.get('button[class="govuk-button"]').last().click()
    }
}

export default new SelectNanomaterialPage;