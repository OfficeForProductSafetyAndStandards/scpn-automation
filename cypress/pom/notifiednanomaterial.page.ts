import {submit, verifyPageTitle} from "../support/common-helpers";

class NotifiedNanomaterialPage {

    assertPageTitle() {
        verifyPageTitle("Select a notified nanomaterial")
    }

    choose(answer: string) {
        cy.get("#nanomaterial_notification").select(answer)
        submit()
    }

}

export default new NotifiedNanomaterialPage;