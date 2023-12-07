import {submitButton, verifyPageTitle} from "../support/common-helpers";

class CheckCodePage {

    assertPageTitle() {
        verifyPageTitle("Check your phone")
    }
  
    fillOtpcode(code:string) {
      cy.get("#otp_code").type(code)
        submitButton()
    }
}
  
export default new CheckCodePage;