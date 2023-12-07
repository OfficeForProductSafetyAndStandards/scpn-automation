import {submit, verifyPageTitle} from "../support/common-helpers";

class DeclarationPage {

    assertPageTitle() {
        verifyPageTitle("Accept and submit")
    }

    submit() {
        submit()
    }
  
}
  
export default new DeclarationPage;