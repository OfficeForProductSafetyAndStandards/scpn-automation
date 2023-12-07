import {select, submit, verifyPageTitle} from "../support/common-helpers";

class ArchiveReasonPage {

    assertPageTitle() {
        verifyPageTitle("Reason for archiving")
    }
  
    choose(answer: string) {
        select(answer)
        submit()
    }

  }
  
export default new ArchiveReasonPage;