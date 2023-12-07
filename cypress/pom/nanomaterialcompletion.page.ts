import {gotoTaskList} from "../support/common-helpers";

class NanomaterialCompletionPage {

    assertPageTitle() {
        cy.get("h3").should("contain", "The task has been completed")
    }

    submit() {
        gotoTaskList()
        //cy.get('a').contains('Go to the task list page').click()
    }
}

export default new NanomaterialCompletionPage;