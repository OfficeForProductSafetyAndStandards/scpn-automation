class OsuResponsiblePersonPage {
    assertPageTitle(){
        cy.get('h1').contains('Responsible Person account')
    }
    assertView(name: string, address: string, businessType: string, contactName:string, email: string, contactNumber: string){
        cy.get('dt:contains("Name")').eq(0).siblings().contains(name)
        cy.get('dt').contains("Address").siblings().contains(address)
        cy.get('dt').contains("Business type").siblings().contains(businessType)
        cy.get('dt:contains("Name")').eq(1).siblings().contains(contactName)
        cy.get('dt').contains("Email").siblings().contains(email)
        cy.get('dt').contains("Contact number").siblings().contains(contactNumber)
    }
    changeName(name: string){
        cy.get('a:contains("Change")').eq(0).click()
        cy.get('#responsible-person-name-field').clear().type(name);
        cy.get('.govuk-button').last().click()
    }
    changeAddress(name: string){
        cy.get('a:contains("Change")').eq(0).click()
        cy.get('#responsible-person-address-line-1-field').type(name);
        cy.get('.govuk-button').last().click()
    }
    changeContactName(name: string){
        cy.get('a:contains("Change")').eq(0).click()
        cy.get('#contact-person-name-field').clear().type(name);
        cy.get('.govuk-button').last().click()
    }

    assertSuccess(){
        cy.get('.govuk-notification-banner__content').contains("has been updated")
    }

    assertName(name: string){
        cy.get('dt').contains("Name").siblings().contains(name)
    }
    assertBusinessType(type: string){
        cy.get('dt').contains("Business type").siblings().contains(type)
    }
    changeBusinessType(type: string){
        cy.get('a:contains("Change")').eq(2).click()
        cy.get('label').contains(type).click()
        cy.get('.govuk-button').last().click()
    }
}

export default new OsuResponsiblePersonPage();