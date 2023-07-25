class AcceptAndSubmitPage {

    assertPageTitle() {
      cy.get("h1").should("contain", "Accept and submit - review")
    }
  
    assertProductInfo(product:string, childrenunderthree:string, numofitems:string, shades:string, image:string, mixed:string) {
      cy.get(".govuk-summary-list__row").contains("Product name").get(".govuk-summary-list__value").should("contain", product)
      cy.get(".govuk-summary-list__row").contains("For children under 3").get(".govuk-summary-list__value").should("contain", childrenunderthree)
      cy.get(".govuk-summary-list__row").contains("Number of items").get(".govuk-summary-list__value").should("contain", numofitems)
      cy.get(".govuk-summary-list__row").contains("Shades").get(".govuk-summary-list__value").should("contain", shades)
      cy.get(".govuk-summary-list__row").contains("Are the items mixed").get(".govuk-summary-list__value").should("contain", mixed)
    }

    assertProductDetails(containscmrsustance:string, physicalform:string, applicatortype:string) {
      cy.get(".govuk-summary-list__row").contains("Contains CMR substances").get(".govuk-summary-list__value").should("contain", containscmrsustance)
      cy.get(".govuk-summary-list__row").contains("Physical form").get(".govuk-summary-list__value").should("contain", physicalform)
      cy.get(".govuk-summary-list__row").contains("Applicator type").get(".govuk-summary-list__value").should("contain", applicatortype)
    }

    submit() {
        cy.get('.govuk-button').last().click()
    }
  
}
  
export default new AcceptAndSubmitPage;