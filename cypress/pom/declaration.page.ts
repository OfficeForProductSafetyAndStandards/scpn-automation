import {submitButton, verifyPageTitle} from "../support/common-helpers";

class DeclarationPage {

    assertPageTitle() {
        verifyPageTitle("Accept and submit")
    }

    submit() {
        submitButton()
    }
  
}
  
export default new DeclarationPage;