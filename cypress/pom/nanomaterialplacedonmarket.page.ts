import {submit, verifyPageTitle} from "../support/common-helpers";

class NanomaterialPlacedOnMarketPage {

    assertPageTitle() {
        verifyPageTitle("When can you place products containing this nanomaterial on the market?")
    }
  
    submit() {
        submit()
     }

}
  
export default new NanomaterialPlacedOnMarketPage;