import {submit, verifyPageTitle} from "../support/common-helpers";

class OSUResponsiblePersonPage {
    assertPageTitle(){
        verifyPageTitle('Responsible Person account')
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
        submit()
    }
    changeContactName(name: string){
        cy.get('a:contains("Change")').eq(0).click()
        cy.get('#contact-person-name-field').clear().type(name);
        submit()
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
    assertAddress(address:string){
        cy.get('dt').contains("Address").siblings().contains(address)
    }
    changeBusinessType(type: string){
        cy.get('a:contains("Change")').eq(2).click()
        cy.get('label').contains(type).click()
        submit()
    }
    changeAddress(address: string, sndAddress: string, city: string, county: string, postcode: string){
        cy.get('a:contains("Change")').eq(1).click()
        cy.get('#responsible-person-address-line-1-field').clear().type(address);
        cy.get('#responsible-person-address-line-2-field').clear().type(sndAddress);
        cy.get('#responsible-person-city-field').clear().type(city);
        cy.get('#responsible-person-county-field').clear().type(county);
        cy.get('#responsible-person-postal-code-field').clear().type(postcode);
        submit()
    }
}

export default new OSUResponsiblePersonPage();