class AccountAdminViewPage{
    assertEmail(){
        cy.get('dt').contains("Email").next().contains(Cypress.env('SEARCH_USER_EMAIL'))
    }
    assertEmailChanged(email: string){
        cy.get('dt').contains("Email").next().contains(email)
    }
    changeRole(role: string){
        cy.get('a:contains("Change")').eq(2).click()
        cy.get("fieldset").contains(role).click()
        cy.get("button").last().click()
    }
    changeNameSubmit(name: string){
        cy.get('a:contains("Change")').eq(0).click()
        cy.get("#submit-user-name-field").clear().type(name);
        cy.get('button[class="govuk-button"]').last().click()
    }

    changeNameSearch(name: string){
        cy.get('a:contains("Change")').eq(0).click()
        cy.get("#search-user-name-field").clear().type(name);
        cy.get('button[class="govuk-button"]').last().click()
    }

    changeEmailSubmit(email:string){
        cy.get('dt').contains("Email").next().next().click()
        cy.get('#submit-user-email-field').clear().type(email)
        cy.get('button[class="govuk-button"]').last().click()
    }

    changeEmailSearch(email:string){
        cy.get('dt').contains("Email").next().next().click()
        cy.get('#search-user-email-field').clear().type(email)
        cy.get('button[class="govuk-button"]').last().click()
    }
    assertSuccess(){
        cy.get('.govuk-notification-banner__content').contains("has been updated")
    }

    assertName(name: string){
        cy.get('dt').contains("Name").siblings().contains(name)
    }

    assertRoleType(role: string){
        cy.get('dt').contains("Role type").siblings().contains(role)
    }

}

export default new AccountAdminViewPage()