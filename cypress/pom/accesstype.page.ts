import {submitButton, verifyPageTitle} from "../support/common-helpers";

class AccessTypePage{
    assertPageTitle(){
        verifyPageTitle("How do you want to get an access code?")
    }
    choose(){
        cy.get("label").contains("Text message").click()
        submitButton()
        cy.get('#otp_code').type("11222")
        submitButton()
    }
}

export default new AccessTypePage()