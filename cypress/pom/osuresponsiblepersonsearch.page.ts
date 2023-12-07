import {submit, verifyPageTitle} from "../support/common-helpers";

class OSUResponsiblePersonSearchPage {
    assertPageTitle(){
        verifyPageTitle('Search for a Responsible Person account')
    }
    search(product: string){
        cy.get('#q-field').type(product)
    }
    submit() {
        cy.get("button[class='govuk-button moj-search__button']").last().click()
    }
}

export default new OSUResponsiblePersonSearchPage();