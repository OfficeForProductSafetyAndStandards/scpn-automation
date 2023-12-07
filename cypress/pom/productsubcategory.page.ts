import {submit, verifyPageTitle} from "../support/common-helpers";

class ProductSubCategoryPage {

    assertPageTitle() {
        verifyPageTitle("What category of")
    }
  
    choose(answer: string) {
        cy.get(".govuk-radios__item").contains(answer).click()
        submit()
    }

}
  
export default new ProductSubCategoryPage;