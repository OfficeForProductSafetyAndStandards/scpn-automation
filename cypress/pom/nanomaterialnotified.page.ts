import {select, submitButton, verifyPageTitle} from "../support/common-helpers";

class NanomaterialNotifiedePage {

    assertPageTitle() {
        verifyPageTitle("Have you submitted a notification about this nanomaterial in GB since 1 January 2021?")
    }
  
    choose(answer: string) {
        select(answer)
        submitButton()
     }

}
  
export default new NanomaterialNotifiedePage;