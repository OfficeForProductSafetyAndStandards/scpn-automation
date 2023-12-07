import {submitButton, verifyPageTitle} from "../support/common-helpers";

class NotifiedNanomaterialPage {

    assertPageTitle() {
        verifyPageTitle("Select a notified nanomaterial")
    }

    choose(answer: string) {
        cy.get("#nanomaterial_notification").select(answer)
        submitButton()
    }

}

export default new NotifiedNanomaterialPage;