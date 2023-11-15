class SearchAccountPage{
    changeRole(role: string){
        cy.get('a:contains("Change")').eq(2).click()
        cy.get("fieldset").contains(role).click()
        cy.get("button").last().click()
    }
    changeName(name: string){
        cy.get('a:contains("Change")').eq(0).click()
        cy.get("#search-user-name-field").type(name)
        cy.get('button[class="govuk-button"]').last().click()
    }
}

export default new SearchAccountPage()