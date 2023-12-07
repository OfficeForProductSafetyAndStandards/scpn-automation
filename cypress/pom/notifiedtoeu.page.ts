import {submit, verifyPageTitle} from "../support/common-helpers";

class NotifiedToEUPage {

    assertPageTitle() {
        verifyPageTitle("Was the EU notified")
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
        submit()
    }

}

export default new NotifiedToEUPage;