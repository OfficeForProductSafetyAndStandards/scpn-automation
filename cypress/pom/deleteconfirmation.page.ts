import {submitButton, verifyPageTitle} from "../support/common-helpers";

class DeleteConfirmationPage {

    assertPageTitle() {
        verifyPageTitle("Do you want to delete this notification?")
    }

    deleteNotificaiton() {
        cy.get("#yes").click()
        submitButton()
    }

}

export default new DeleteConfirmationPage;