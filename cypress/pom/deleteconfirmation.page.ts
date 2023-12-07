import {submit, verifyPageTitle} from "../support/common-helpers";

class DeleteConfirmationPage {

    assertPageTitle() {
        verifyPageTitle("Do you want to delete this notification?")
    }

    deleteNotificaiton() {
        cy.get("#yes").click()
        submit()
    }

}

export default new DeleteConfirmationPage;