class OsuResponsiblePersonSearchPage {
    assertPageTitle(){
        cy.get('h1').contains('Search for a Responsible Person account')
    }
    search(product: string){
        cy.get('#q-field').type(product)
    }
    submit() {
        cy.get('.govuk-button').last().click()
    }
}

export default new OsuResponsiblePersonSearchPage();