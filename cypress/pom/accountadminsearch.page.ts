class AccountAdminSearchPage{
    search(email: string){
        cy.get("#q-field").type(email);
        cy.get('button').last().click()
    }

    view(){
        cy.get("a").contains("View").click()
    }
}

export default new AccountAdminSearchPage()