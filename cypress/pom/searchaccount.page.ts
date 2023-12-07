import {submitButton} from "../support/common-helpers";

class SearchAccountPage{
    changeRole(role: string){
        cy.get('a:contains("Change")').eq(2).click()
        cy.get("fieldset").contains(role).click()
        cy.get("button").last().click()
    }
    changeName(name: string){
        cy.get('a:contains("Change")').eq(0).click()
        cy.get("#search-user-name-field").type(name)
        submitButton()
    }
}

export default new SearchAccountPage()