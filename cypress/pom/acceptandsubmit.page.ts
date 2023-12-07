import {submit, verifyPageTitle} from "../support/common-helpers";

class AcceptAndSubmitPage {

  assertPageTitle() {
    verifyPageTitle("Accept and submit - review")
  }

  assertProductInfo(product: string, childrenunderthree: string, numofitems: string, shades: string, image: string, mixed: string) {
    cy.get(`.govuk-summary-list__row:contains("Product name")`).find(`.govuk-summary-list__value:contains("${product}")`)
    cy.get(`.govuk-summary-list__row:contains("For children under 3")`).find(`.govuk-summary-list__value:contains("${childrenunderthree}")`)
    cy.get(`.govuk-summary-list__row:contains("Number of items")`).find(`.govuk-summary-list__value:contains("${numofitems}")`)
    cy.get(`.govuk-summary-list__row:contains("Shades")`).find(`.govuk-summary-list__value:contains("${shades}")`)
    cy.get(`.govuk-summary-list__row:contains("Are the items mixed")`).find(`.govuk-summary-list__value:contains("${mixed}")`)
  }

  assertProductDetails(categoryofproduct: string, productsubcategory: string, productsubsubcategory: string, containscmrsustance: string, physicalform: string, applicatortype: string) {
    cy.get(`.govuk-summary-list__row:contains("Category of product")`).find(`.govuk-summary-list__value:contains("${categoryofproduct}")`)
    cy.get(`.govuk-summary-list__row:contains("Category of ${categoryofproduct.toLowerCase()}")`).find(`.govuk-summary-list__value:contains("${productsubcategory}")`)
    cy.get(`.govuk-summary-list__row:contains("Category of ${productsubcategory.toLowerCase()}")`).find(`.govuk-summary-list__value:contains("${productsubsubcategory}")`)
    cy.get(`.govuk-summary-list__row:contains("Contains CMR substances")`).find(`.govuk-summary-list__value:contains("${containscmrsustance}")`)
    cy.get(`.govuk-summary-list__row:contains("Physical form")`).find(`.govuk-summary-list__value:contains("${physicalform}")`)
    cy.get(`.govuk-summary-list__row:contains("Applicator type")`).find(`.govuk-summary-list__value:contains("${applicatortype}")`)
  }

  assertItemDetails(itemname: string, categoryofproduct: string, containscmrsustance: string, shade: string, nano: string, application: string, exposure: string, productsubcategory: string, productsubsubcategory: string, physicalform: string,
    applicatortype: string) {

    //key is itemname
    cy.hasKeyValueDetail(itemname, "Category of product", categoryofproduct)
    //cy.get("h3").contains(itemname).siblings(".govuk-summary-list").get(`.govuk-summary-list__row:contains( )`).find(`.govuk-summary-list__value:contains("${categoryofproduct}")`)
    cy.hasKeyValueDetail(itemname, "Contains CMR substances", containscmrsustance)
    cy.get("h3").contains(itemname).siblings(".govuk-summary-list").get(`.govuk-summary-list__row:contains("Contains CMR substances")`).find(`.govuk-summary-list__value:contains("${containscmrsustance}")`)
    cy.get("h3").contains(itemname).siblings(".govuk-summary-list").get(`.govuk-summary-list__row:contains("Shades")`).find(`.govuk-summary-list__value:contains("${shade}")`)
    cy.get("h3").contains(itemname).siblings(".govuk-summary-list").get(`.govuk-summary-list__row:contains("Nanomaterials")`).find(`.govuk-summary-list__value:contains("${nano}")`)
    cy.get("h3").contains(itemname).siblings(".govuk-summary-list").get(`.govuk-summary-list__row:contains("Application instruction")`).find(`.govuk-summary-list__value:contains("${application}")`)
    cy.get("h3").contains(itemname).siblings(".govuk-summary-list").get(`.govuk-summary-list__row:contains("Exposure condition")`).find(`.govuk-summary-list__value:contains("${exposure}")`)
    cy.get("h3").contains(itemname).siblings(".govuk-summary-list").get(`.govuk-summary-list__row:contains("Category of ${categoryofproduct.toLowerCase()}")`).find(`.govuk-summary-list__value:contains("${productsubcategory}")`)
    cy.get("h3").contains(itemname).siblings(".govuk-summary-list").get(`.govuk-summary-list__row:contains("Category of ${productsubcategory.toLowerCase()}")`).find(`.govuk-summary-list__value:contains("${productsubsubcategory}")`)
    cy.get("h3").contains(itemname).siblings(".govuk-summary-list").get(`.govuk-summary-list__row:contains("Physical form")`).find(`.govuk-summary-list__value:contains("${physicalform}")`)
    cy.get("h3").contains(itemname).siblings(".govuk-summary-list").get(`.govuk-summary-list__row:contains("Applicator type")`).find(`.govuk-summary-list__value:contains("${applicatortype}")`)
  }

  assertCMRSubstance(substancename: string, casno: string, ecno: string){
    cy.get(`.govuk-summary-list__row:contains("CMR substances")`).find(`.govuk-summary-list__value:contains("${substancename}")`)
    cy.get(`.govuk-summary-list__row:contains("CMR substances")`).find(`.govuk-summary-list__value:contains("${casno}")`)
    cy.get(`.govuk-summary-list__row:contains("CMR substances")`).find(`.govuk-summary-list__value:contains("${ecno}")`)
  }

  submit() {
    cy.get("a[class='govuk-button']").last().click()
  }


  edit(value: number ){
    cy.get("a").filter(':contains("Edit")').eq(value-1).click()
  }

}

export default new AcceptAndSubmitPage;