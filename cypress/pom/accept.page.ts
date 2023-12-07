import {submitButton, verifyPageTitle} from "../support/common-helpers";

class AcceptPage {

    assertPageTitle() {
        verifyPageTitle("Submission complete")
    }

    submit() {
        submitButton()
    }

    selectNotifiedProductsLink(){
        cy.contains('notified cosmetic products').click()
    }
  
}
  
export default new AcceptPage;