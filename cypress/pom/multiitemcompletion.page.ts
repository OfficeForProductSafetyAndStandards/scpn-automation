import {gotoTaskList, verifyPageTitle} from "../support/common-helpers";

class MultiItemCompletionPage {

    assertPageTitle() {
        cy.get("h3").should("contain", "The task has been completed")
    }

    submit() {
        //cy.get('a').contains('Go to the task list page').click()
        gotoTaskList()
    }
}

export default new MultiItemCompletionPage;