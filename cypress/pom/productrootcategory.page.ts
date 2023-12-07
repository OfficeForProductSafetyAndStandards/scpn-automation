import {submit, verifyPageTitle} from "../support/common-helpers";

class ProductRootCategoryPage {

    assertPageTitle() {
        verifyPageTitle("What category of cosmetic product is it?")
    }
  
    choose(answer: string) {
        cy.get(".govuk-radios__item").contains(answer).click()
        submit()
    }
  
}
  
export default new ProductRootCategoryPage;