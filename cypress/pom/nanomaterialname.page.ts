import {submitButton, verifyPageTitle} from "../support/common-helpers";

class NanomaterialNamePage {

    assertPageTitle() {
        verifyPageTitle("What is the name of the nanomaterial")
    }

    enterName(name: string) {
        cy.get("#nanomaterial_notification_name").type(name)
        submitButton()
    }

}

export default new NanomaterialNamePage;