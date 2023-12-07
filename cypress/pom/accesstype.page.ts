import {submit, verifyPageTitle} from "../support/common-helpers";

class AccessTypePage{
    assertPageTitle(){
        verifyPageTitle("How do you want to get an access code?")
    }
    choose(){
        cy.get("label").contains("Text message").click()
        submit()
        cy.get('#otp_code').type("11222")
        submit()
    }
}

export default new AccessTypePage()