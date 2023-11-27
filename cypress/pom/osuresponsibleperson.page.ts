class OsuResponsiblePersonPage {
    assertPageTitle(){
        cy.get('h1').contains('Responsible Person account')
    }
    changeName(name: string){
        cy.get('a:contains("Change")').eq(0).click()
        cy.get('#responsible-person-name-field').type(name);
        cy.get('.govuk-button').last().click()
    }
    changeAddress(name: string){
        cy.get('a:contains("Change")').eq(0).click()
        cy.get('#responsible-person-address-line-1-field').type(name);
        cy.get('.govuk-button').last().click()
    }
    changeContactName(name: string){
        cy.get('a:contains("Change")').eq(0).click()
        cy.get('#contact-person-name-field').type(name);
        cy.get('.govuk-button').last().click()
    }

    assertSuccess(){
        cy.get('govuk-notification-banner__content').contains("has been updated")
    }
}

export default new OsuResponsiblePersonPage();