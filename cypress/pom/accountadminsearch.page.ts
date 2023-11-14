class AccountAdminSearchPage{
    search(){
        cy.get("#q-field").type(Cypress.env('SEARCH_USER_EMAIL'));
        cy.get('button').last().click()
    }

    view(){
        cy.get("a").contains("View").click()
    }
}

export default new AccountAdminSearchPage()