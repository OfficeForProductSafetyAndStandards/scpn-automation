import {submit, verifyPageTitle} from "../support/common-helpers";

class OSUNotificationsPage{
    assertPageTitle(){
        verifyPageTitle('Search for cosmetic product notifications')
    }
    search(product: string){
        cy.get('#q-field').type(product)
    }
    setStatus(status: string){
        cy.get('.govuk-fieldset').contains(status).click()
    }
    submit() {
        submit()
    }
}
export default new OSUNotificationsPage()