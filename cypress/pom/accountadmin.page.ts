import {verifyPageTitle} from "../support/common-helpers";

class AccountAdminPage{
    assertPageTitle(){
        verifyPageTitle("Account administration")
    }
    gotoSearch(){
        cy.get("a").contains("Search for an account").click()
    }
    gotoAdd(){
        cy.get("a").contains("Add a new search user account").click()
    }


}

export default new AccountAdminPage()