import {verifyPageTitle} from "../support/common-helpers";

class OSUResponsiblePersonSearchResultPage {
    assertPageTitle(){
        verifyPageTitle('Search for a Responsible Person account')
    }
    view(){
        cy.get('a').contains("View").click()
    }
}

export default new OSUResponsiblePersonSearchResultPage();