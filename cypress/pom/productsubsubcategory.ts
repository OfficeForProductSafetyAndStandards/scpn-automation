import {submit, verifyPageTitle} from "../support/common-helpers";

class ProductSubSubCategoryPage {

    assertPageTitle() {
        verifyPageTitle("What category of")
    }
  
    choose(answer: string) {
        cy.get(".govuk-radios__item").contains(answer).click()
        submit()
    }

}
  
export default new ProductSubSubCategoryPage;