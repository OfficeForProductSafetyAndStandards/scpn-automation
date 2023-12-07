import {select, submit, verifyPageTitle} from "../support/common-helpers";

class ExposureRoutesPage {

    assertPageTitle() {
        verifyPageTitle("How is the user likely to be exposed to the nanomaterials?")
    }
  
    choose(answer: string) {
        select(answer)
        submit()
     }
  
}
  
export default new ExposureRoutesPage;