import {submit, verifyPageTitle} from "../support/common-helpers";

class AcceptPage {

    assertPageTitle() {
        verifyPageTitle("Submission complete")
    }

    submit() {
        submit()
    }

    selectNotifiedProductsLink(){
        cy.contains('notified cosmetic products').click()
    }
  
}
  
export default new AcceptPage;