class OsuNotificationsPage{
    assertPageTitle(){
        cy.get("h1").contains('Search for cosmetic product notifications')
    }
    search(product: string){
        cy.get('#q-field').type(product)
    }
    setStatus(status: string){
        cy.get('.govuk-fieldset').contains(status).click()
    }
    submit() {
        cy.get('.govuk-button').last().click()
    }
}
export default new OsuNotificationsPage()