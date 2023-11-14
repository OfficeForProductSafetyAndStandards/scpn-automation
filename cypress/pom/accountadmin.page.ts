class AccountAdminPage{
    assertPageTitle(){
        cy.get("h1").contains("Account administration")
    }
    gotoSearch(){
        cy.get("a").contains("Search for an account").click()
    }
    gotoAdd(){
        cy.get("a").contains("Add a new search user account").click()
    }


}

export default new AccountAdminPage()