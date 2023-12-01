class AccountAdminSearchPage{
    search(accountType:string){
        if(accountType == "submit") {
            cy.get("#q-field").type(Cypress.env('SUBMIT_USER_EMAIL'));
            cy.get('button[class="govuk-button moj-search__button"]').last().click()
        }
        else if (accountType == "search"){
            cy.get("#q-field").type(Cypress.env('SEARCH_USER_EMAIL'));
            cy.get('button[class="govuk-button moj-search__button"]').last().click()
        }
        else{
            cy.get("#q-field").type(accountType);
            cy.get('button[class="govuk-button moj-search__button"]').last().click()
        }
    }

    view(){
        cy.get("a").contains("View").click()
    }
}

export default new AccountAdminSearchPage()