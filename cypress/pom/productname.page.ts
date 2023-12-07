import {submit, verifyPageTitle} from "../support/common-helpers";

class ProductNamePage {

    assertPageTitle() {
        verifyPageTitle("What is the product name")
    }
  
    enterProductName(name: string) {
      cy.get("#notification_product_name").type(name)
    }

    submit() {
        submit()
  }

}
   
export default new ProductNamePage;