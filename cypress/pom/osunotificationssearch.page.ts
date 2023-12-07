import {verifyPageTitle} from "../support/common-helpers";

class OSUNotificationsSearchPage{
    assertPageTitle(){
        verifyPageTitle('Search for cosmetic product notifications')
    }

    view(){
        cy.get('a').contains("Submitted date").click()
        cy.get('a').contains("View").click()
    }

}

export default new OSUNotificationsSearchPage();