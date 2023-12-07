import {submit, verifyPageTitle} from "../support/common-helpers";

class ItemNamePage {

    assertPageTitle() {
        verifyPageTitle("What is the item name?")
    }
  
    enterItemName(name: string) {
      cy.get("#component_name").type(name)
    }

    submit() {
        submit()
  }

}
   
export default new ItemNamePage;