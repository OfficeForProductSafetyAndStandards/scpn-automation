/// <reference types="cypress" />

import {verifyPageTitle} from "../support/common-helpers";

class ResponsiblePersonPage {


  assertUser(value: string) {
    cy.get(".govuk-summary-list__value").contains(value)
  }

  fillEmail(email: string) {
    cy.get("#email").type(email)
  }

  assertPageTitle() {
        verifyPageTitle("Responsible Person")
  }

  selectCosmeticProducts() {
    cy.get("a").contains("Cosmetic products").click()
  }

  selectNanomaterials() {
    cy.get("a").contains("Nanomaterials").click()
  }

}

export default new ResponsiblePersonPage;