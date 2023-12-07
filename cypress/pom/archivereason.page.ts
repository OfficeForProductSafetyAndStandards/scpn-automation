import {select, submitButton, verifyPageTitle} from "../support/common-helpers";

class ArchiveReasonPage {

    assertPageTitle() {
        verifyPageTitle("Reason for archiving")
    }
  
    choose(answer: string) {
        select(answer)
        submitButton()
    }

  }
  
export default new ArchiveReasonPage;