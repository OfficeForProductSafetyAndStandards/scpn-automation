import {select, submit, verifyPageTitle} from "../support/common-helpers";

class NanomaterialNotifiedePage {

    assertPageTitle() {
        verifyPageTitle("Have you submitted a notification about this nanomaterial in GB since 1 January 2021?")
    }
  
    choose(answer: string) {
        select(answer)
        submit()
     }

}
  
export default new NanomaterialNotifiedePage;