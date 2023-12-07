import {submit} from "../support/common-helpers";

class OSUAccountSettingsPage{
    changeName(Name: string){
        cy.get('a:contains("Change")').eq(0).click()
        cy.get('.govuk-input').clear().type(Name)
        submit()
    }
    verifyNameChange(Name: string){
        cy.get(".govuk-header").within(function (){
            cy.get("a").contains("OSU Support Portal").click()
        })
        cy.get('.govuk-body').contains(Name)
    }
}
export default new OSUAccountSettingsPage()