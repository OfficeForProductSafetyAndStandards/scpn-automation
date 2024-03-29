import { Given, When, Then, After, Before } from "@badeball/cypress-cucumber-preprocessor";
import { generateRandomNumber } from '../utils';


import loginPage from "../../pom/login.page"
import checkCodePage from "../../pom/checkcode.page"
import selectResponsiblePersonPage from "../../pom/selectresponsibleperson.page"
import cosmeticProductsPage from "../../pom/cosmeticproducts.page"
import taskListPage from "../../pom/tasklist.page"
import productNamePage from "../../pom/productname.page"
import childrenUnderThreePage from "../../pom/childrenunderthree.page"
import containsNanomaterialsPage from "../../pom/containsnanomaterials.page"
import singleorMulticomponentPage from "../../pom/singleormulticomponent.page"
import addproductimagePage from "../../pom/addproductimage.page"
import productcompletedPage from "../../pom/productcompleted.page"
import numberofshadesPage from "../../pom/numberofshades.page";
import addphysicalformPage from "../../pom/addphysicalform.page";
import specialapplicatortypePage from "../../pom/specialapplicatortype.page";
import containscmrsPage from "../../pom/containscmrs.page";
import productRootcategoryPage from "../../pom/productrootcategory.page";
import productsubcategoryPage from "../../pom/productsubcategory.page";
import ProductSubSubCategoryPage from "../../pom/productsubsubcategory";
import specialapplicatorPage from "../../pom/specialapplicator.page";
import formulationtypePage from "../../pom/formulationtype.page";
import uploadingredientsfilePage from "../../pom/uploadingredientsfile.page";
import selectphoptionPage from "../../pom/selectphoption.page";
import acceptandsubmitPage from "../../pom/acceptandsubmit.page";
import declarationPage from "../../pom/declaration.page";
import acceptPage from "../../pom/accept.page";
import productPage from "../../pom/product.page";
import nanomaterialpurposePage from "../../pom/nanomaterialpurpose.page";
import nanomaterialnotifiedPage from "../../pom/nanomaterialnotified.page";
import nanomaterialplacedonmarketPage from "../../pom/nanomaterialplacedonmarket.page";
import notifiednanomaterialPage from "../../pom/notifiednanomaterial.page";
import nanomaterialcompletionPage from "../../pom/nanomaterialcompletion.page";
import multiitemmixedPage from "../../pom/multiitemmixed.page";
import multiitemcompletionPage from "../../pom/multiitemcompletion.page";
import tasklistPage from "../../pom/tasklist.page";
import itemnamePage from "../../pom/itemname.page";
import selectnanomaterialPage from "../../pom/selectnanomaterial.page";
import exposureconditionPage from "../../pom/exposurecondition.page";
import exposureroutesPage from "../../pom/exposureroutes.page";
import ingredientexactconcentrationPage from "../../pom/ingredientexactconcentration.page";
import cmrsubstancePage from "../../pom/cmrsubstance.page";
import nanomaterialPage from "../../pom/nanomaterial.page";
import nanomaterialnamePage from "../../pom/nanomaterialname.page";
import notifiedtoeuPage from "../../pom/notifiedtoeu.page";
import internalReferencePage from "../../pom/internalreference.page";
import nanomaterialuploadPage from "../../pom/nanomaterialupload.page";
import notifyreviewPage from "../../pom/notifyreview.page";
import responsiblepersonPage from "../../pom/responsibleperson.page";
import archivereasonPage from "../../pom/archivereason.page";
import headerPage from "../../pom/header.page";
import footerPage from "../../pom/footer.page";
import notificationsearchPage from "../../pom/notificationsearch.page";
import notificationresultPage from "../../pom/notificationresult.page";
import osudashboardPage from "../../pom/osudashboard.page";
import accountadminPage from "../../pom/accountadmin.page";
import accountadminsearchPage from "../../pom/accountadminsearch.page";
import searchaccountPage from "../../pom/searchaccount.page";
import searchproductPage from "../../pom/searchproduct.page";
import accesstypePage from "../../pom/accesstype.page";

import * as fs from 'fs';
import "cypress-fs";
import osunotificationsPage from "../../pom/osunotifications.page";
import osunotificationssearchPage from "../../pom/osunotificationssearch.page";
import osuresponsiblepersonsearchPage from "../../pom/osuresponsiblepersonsearch.page";
import osuresponsiblepersonsearchresultPage from "../../pom/osuresponsiblepersonsearchresult.page";
import osuresponsiblepersonPage from "../../pom/osuresponsibleperson.page";
import accountadminviewPage from "../../pom/accountadminview.page";
import {link} from "fs";
import osuhistoryPage from "../../pom/osuhistory.page";
import osuaccountsettingsPage from "../../pom/osuaccountsettings.page";


let journeytype: string
let roleType: string
let archived: boolean
let notified: boolean
let perfect: boolean
let storeArchived: string
let storeNotified:string
let completeProduct: string
let cosmeticNumber: string
let dateNotified: string
let OSUUserName: string
let RPAddress: string [] = []
beforeEach(function () {
  cy.fixture('product.json').then(function (product) {
    product.nanomaterial.name = `Test Nano ${generateRandomNumber(2)}`
    product.nonanonomultiitemnocmr.productname = `TestProduct ${generateRandomNumber(3)}`
    product.nanonmaterialmultiitemnocmr.productname = `TestProduct ${generateRandomNumber(3)}`
    product.nanomaterialnomultiitemcmr.productname = `TestProduct ${generateRandomNumber(3)}`
    product.nanonmaterialmultiitemcmr.productname = `TestProduct ${generateRandomNumber(3)}`
    product.nanonmaterialmultiitemcmr.substance1 = `Test Substance ${generateRandomNumber(3)}`
    product.nanonmaterialmultiitemcmr.substance1casno = `${generateRandomNumber(4)}-${generateRandomNumber(2)}-${generateRandomNumber(1)}`
    product.nanonmaterialmultiitemcmr.substance1ecno = `${generateRandomNumber(3)}-${generateRandomNumber(3)}-${generateRandomNumber(1)}`
    product.nanonmaterialmultiitemcmr.substance2 = `Test Substance ${generateRandomNumber(3)}`
    product.nanonmaterialmultiitemcmr.substance2casno = `${generateRandomNumber(4)}-${generateRandomNumber(2)}-${generateRandomNumber(1)}`
    product.nanonmaterialmultiitemcmr.substance2ecno = `${generateRandomNumber(3)}-${generateRandomNumber(3)}-${generateRandomNumber(1)}`
    product.nanonmaterialmultiitemcmr.ingredient1CAS = `${generateRandomNumber(4)}-${generateRandomNumber(2)}-${generateRandomNumber(1)}`
    product.nanonmaterialmultiitemcmr.ingredient2CAS = `${generateRandomNumber(4)}-${generateRandomNumber(2)}-${generateRandomNumber(1)}`
    product.nanomaterialnomultiitemcmr.substance1 = `Test Substance ${generateRandomNumber(3)}`
    product.nanomaterialnomultiitemcmr.substance1casno = `${generateRandomNumber(4)}-${generateRandomNumber(2)}-${generateRandomNumber(1)}`
    product.nanomaterialnomultiitemcmr.substance1ecno = `${generateRandomNumber(3)}-${generateRandomNumber(3)}-${generateRandomNumber(1)}`
    product.nanonmaterialmultiitemnocmr.itemname1 = `Item Name ${generateRandomNumber(3)}`
    product.nanonmaterialmultiitemnocmr.itemname2 = `Item Name ${generateRandomNumber(3)}`
    product.nanonmaterialmultiitemcmr.itemname1 = `Item Name ${generateRandomNumber(3)}`
    product.nanonmaterialmultiitemcmr.itemname2 = `Item Name ${generateRandomNumber(3)}`
    product.nanonmaterialmultiitemnocmr.ingredientname1 = `Ingredient ${generateRandomNumber(3)}`
    product.nanonmaterialmultiitemnocmr.ingredientname2 = `Ingredient ${generateRandomNumber(3)}`
    product.nanonmaterialmultiitemcmr.ingredientname1 = `Ingredient ${generateRandomNumber(3)}`
    product.nanonmaterialmultiitemcmr.ingredientname2 = `Ingredient ${generateRandomNumber(3)}`
    product.nanonmaterialmultiitemcmr.ingredientweight = `${generateRandomNumber(2)}`
    product.nanonmaterialmultiitemcmr.ingredientweight1 = `${generateRandomNumber(2)}`
    cy.writeFile('cypress/fixtures/product.json', product);
    this.product = product
  })
  cy.readFile('cypress/fixtures/search.json').then(function (search) {
    this.search = search;
  })
});


afterEach(function () {
  const name = Cypress.currentTest.title
  const sceanrioStatus = (Cypress as any).mocha.getRunner().suite.ctx.currentTest.state
  if (sceanrioStatus === 'failed') {
    cy.log(name)
    cy.sendOpsGenieAlert(name, sceanrioStatus);
  }

  if(archived && notified && perfect){
    cy.readFile('cypress/fixtures/search.json').then(function (product) {
      product.status.archived = storeArchived
      product.status.notified = storeNotified
      product.status.completeProduct = completeProduct
      product.completeProduct.cosmeticnumber = cosmeticNumber
      product.completeProduct.uknotified = dateNotified
      product.completeProduct.productname = this.product.nanonmaterialmultiitemcmr.productname
      product.completeProduct.forchildrenunderthree = this.product.nanonmaterialmultiitemcmr.forchildrenunderthree
      product.completeProduct.numnberofitems = this.product.nanonmaterialmultiitemcmr.numnberofitems
      product.completeProduct.shades = this.product.nanonmaterialmultiitemcmr.shades
      product.completeProduct.areitemsmixed = this.product.nanonmaterialmultiitemcmr.areitemsmixed
      product.completeProduct.containscmrsubstances = this.product.nanonmaterialmultiitemcmr.containscmrsubstances
      product.completeProduct.nanomaterials = this.product.nanonmaterialmultiitemcmr.nanomaterials
      product.completeProduct.nanomaterialspurpose = this.product.nanonmaterialmultiitemcmr.nanomaterialspurpose
      product.completeProduct.nanomaterialnotified = this.product.nanonmaterialmultiitemcmr.nanomaterialnotified
      product.completeProduct.substance1 = this.product.nanonmaterialmultiitemcmr.substance1
      product.completeProduct.substance1casno = this.product.nanonmaterialmultiitemcmr.substance1casno
      product.completeProduct.substance1ecno = this.product.nanonmaterialmultiitemcmr.substance1ecno
      product.completeProduct.substance2 = this.product.nanonmaterialmultiitemcmr.substance2
      product.completeProduct.substance2casno = this.product.nanonmaterialmultiitemcmr.substance2casno
      product.completeProduct.substance2ecno = this.product.nanonmaterialmultiitemcmr.substance2ecno
      product.completeProduct.ingredient1CAS = this.product.nanonmaterialmultiitemcmr.ingredient1CAS
      product.completeProduct.ingredient2CAS = this.product.nanonmaterialmultiitemcmr.ingredient2CAS
      product.completeProduct.notifiednanomaterial = this.product.nanonmaterialmultiitemcmr.notifiednanomaterial
      product.completeProduct.exposurecondition = this.product.nanonmaterialmultiitemcmr.exposurecondition
      product.completeProduct.exposurecondition1 = this.product.nanonmaterialmultiitemcmr.exposurecondition1
      product.completeProduct.exposureroutes  = this.product.nanonmaterialmultiitemcmr.exposureroutes
      product.completeProduct.exposureroutes1  = this.product.nanonmaterialmultiitemcmr.exposureroutes1
      product.completeProduct.multiitemmixed = this.product.nanonmaterialmultiitemcmr.multiitemmixed
      product.completeProduct.itemname1 = this.product.nanonmaterialmultiitemcmr.itemname1
      product.completeProduct.itemname2 = this.product.nanonmaterialmultiitemcmr.itemname2
      product.completeProduct.itemcategoryofproduct = this.product.nanonmaterialmultiitemcmr.itemcategoryofproduct
      product.completeProduct.itemcategoryofproduct1 = this.product.nanonmaterialmultiitemcmr.itemcategoryofproduct1
      product.completeProduct.itemproductsubcategory = this.product.nanonmaterialmultiitemcmr.itemproductsubcategory
      product.completeProduct.itemproductsubcategory1 = this.product.nanonmaterialmultiitemcmr.itemproductsubcategory1
      product.completeProduct.itemproductsubsubcategory = this.product.nanonmaterialmultiitemcmr.itemproductsubsubcategory
      product.completeProduct.itemproductsubsubcategory1 = this.product.nanonmaterialmultiitemcmr.itemproductsubsubcategory1
      product.completeProduct.itemphysicalform = this.product.nanonmaterialmultiitemcmr.itemphysicalform
      product.completeProduct.itemphysicalform1 = this.product.nanonmaterialmultiitemcmr.itemphysicalform1
      product.completeProduct.itemapplicatortype = this.product.nanonmaterialmultiitemcmr.itemapplicatortype
      product.completeProduct.itemcontainscmrsubstances = this.product.nanonmaterialmultiitemcmr.itemcontainscmrsubstances
      product.completeProduct.ingredientname1 = this.product.nanonmaterialmultiitemcmr.ingredientname1
      product.completeProduct.ingredientname2 = this.product.nanonmaterialmultiitemcmr.ingredientname2
      product.completeProduct.ingredientweight = this.product.nanonmaterialmultiitemcmr.ingredientweight
      product.completeProduct.ingredientweight1 = this.product.nanonmaterialmultiitemcmr.ingredientweight1
      archived = false;
      notified = false;
      perfect = false;
      cy.writeFile('cypress/fixtures/search.json', product)   
    })
  }
});

Then("the user sees the SCPN cookie banner", function () {
  cy.get("h2").should("contain", "Cookies on Cosmetics Notification Service")
});

When("the user accepts the cookies and hides item", function () {
  cy.get('button').contains("Accept analytics cookies").click()
  cy.get("button").should("contain", "Hide cookie message")
  cy.get('button').contains("Hide cookie message").click()
});

Then("the cookie banner is no longer displayed", function () {
  cy.get('button').contains("Hide cookie message").should('not.exist')
});

Then("the notification is successfully archived", function () {
  switch (journeytype) {

    case 'nanonmaterialmultiitemnocmr':
      cosmeticProductsPage.selectLastCreatedProduct(this.product.nanonmaterialmultiitemnocmr.productname)
      productPage.assertPageTitle(this.product.nanonmaterialmultiitemnocmr.productname)
      break

    case 'nanomaterialnomultiitemcmr':
      cosmeticProductsPage.selectLastCreatedProduct(this.product.nanomaterialnomultiitemcmr.productname)
      productPage.assertPageTitle(this.product.nanomaterialnomultiitemcmr.productname)
      break

    case 'nonanonomultiitemnocmr':
      cosmeticProductsPage.selectLastCreatedProduct(this.product.nonanonomultiitemnocmr.productname)
      productPage.assertPageTitle(this.product.nonanonomultiitemnocmr.productname)
      break
  }

});

When("the user deletes unarchived product notification", function (){
  cy.get('a').contains('Back').click()
  cosmeticProductsPage.selectLastCreatedProduct(this.product.nonanonomultiitemnocmr.productname)
  productPage.assertPageTitle(this.product.nonanonomultiitemnocmr.productname)
  productPage.selectDeleteNotificationLink()

})

When("the user deletes the product notification", function () {

  switch (journeytype) {
    case 'nanonmaterialmultiitemnocmr':
      productPage.selectUnarchiveNotificationLink()
      cosmeticProductsPage.assertUnarchiveSuccess()
      cosmeticProductsPage.selectLastCreatedProduct(this.product.nanonmaterialmultiitemnocmr.productname)
      productPage.assertPageTitle(this.product.nanonmaterialmultiitemnocmr.productname)
      productPage.selectDeleteNotificationLink()
      checkCodePage.fillOtpcode("11222")
      break

    case 'nanomaterialnomultiitemcmr':
      productPage.selectUnarchiveNotificationLink()
      cosmeticProductsPage.assertUnarchiveSuccess()
      cosmeticProductsPage.selectLastCreatedProduct(this.product.nanomaterialnomultiitemcmr.productname)
      productPage.assertPageTitle(this.product.nanomaterialnomultiitemcmr.productname)
      productPage.selectDeleteNotificationLink()
      checkCodePage.fillOtpcode("11222")
      break

    case 'nonanonomultiitemnocmr':
      productPage.selectUnarchiveNotificationLink()
      cosmeticProductsPage.assertUnarchiveSuccess()
      cosmeticProductsPage.selectLastCreatedProduct(this.product.nonanonomultiitemnocmr.productname)
      productPage.assertPageTitle(this.product.nonanonomultiitemnocmr.productname)
      productPage.selectDeleteNotificationLink()
      cy.url().then($link =>{
        const http = $link
        if(http == "https://staging-submit.cosmetic-product-notifications.service.gov.uk/two-factor/sms"){
          checkCodePage.fillOtpcode('11222')
        }
      })
      break
  }

});


Then("the notification is successfully deleted", function () {

  switch (journeytype) {
    case 'nanonmaterialmultiitemnocmr':
      cosmeticProductsPage.assertDeletionSuccess(this.product.nanonmaterialmultiitemnocmr.productname)
      break

    case 'nanomaterialnomultiitemcmr':
      cosmeticProductsPage.assertDeletionSuccess(this.product.nanomaterialnomultiitemcmr.productname)
      break

    case 'nonanonomultiitemnocmr':
      cosmeticProductsPage.assertDeletionSuccess(this.product.nonanonomultiitemnocmr.productname)
      break
  }

});

When("the user archives the last created product notification", function () {
  switch (journeytype) {
    case 'nanonmaterialmultiitemnocmr':
      productPage.assertPageTitle(this.product.nanonmaterialmultiitemnocmr.productname)
      productPage.checkCopyArchiveDelete()
      productPage.selectArchiveNotificationLink()
      archivereasonPage.assertPageTitle()
      archivereasonPage.choose('Product no longer available on the market')
      cosmeticProductsPage.assertArchiveSuccess()
      cosmeticProductsPage.selectArchivedNotifications()
      storeArchived = this.product.nanonmaterialmultiitemnocmr.productname
      break

    case 'nanomaterialnomultiitemcmr':
      productPage.assertPageTitle(this.product.nanomaterialnomultiitemcmr.productname)
      productPage.checkCopyArchiveDelete()
      productPage.selectArchiveNotificationLink()
      archivereasonPage.assertPageTitle()
      archivereasonPage.choose('Product no longer available on the market')
      cosmeticProductsPage.assertArchiveSuccess()
      cosmeticProductsPage.selectArchivedNotifications()
      storeArchived = this.product.nanomaterialnomultiitemcmr.productname
      break

    case 'nonanonomultiitemnocmr':
      productPage.assertPageTitle(this.product.nonanonomultiitemnocmr.productname)
      productPage.checkCopyArchiveDelete()
      productPage.selectArchiveNotificationLink()
      archivereasonPage.assertPageTitle()
      archivereasonPage.choose('Product no longer available on the market')
      cosmeticProductsPage.assertArchiveSuccess()
      cosmeticProductsPage.selectArchivedNotifications()
      storeArchived = this.product.nonanonomultiitemnocmr.productname
      break
  }
  archived = true

});

Given("the user creates a notified nanomaterial", function (this: any) {
  responsiblepersonPage.selectNanomaterials()

  nanomaterialPage.assertPageTitle()
  nanomaterialPage.selectAddNanomaterial()

  nanomaterialnamePage.assertPageTitle()
  nanomaterialnamePage.enterName(this.product.nanomaterial.name)

  notifiedtoeuPage.assertPageTitle()
  notifiedtoeuPage.choose(this.product.nanomaterial.eunotified)

  nanomaterialuploadPage.assertPageTitle()
  nanomaterialuploadPage.chooseFile('Test-PDF.pdf')

});

Then("the nanomaterial is successfully created", function (this: any) {
  notifyreviewPage.assertPageTitle()
  notifyreviewPage.assertInfo(this.product.nanomaterial.name)
  notifyreviewPage.submit()
});

When("the user uploads an ingredient csv with concentration range", function () {
  formulationtypePage.assertPageTitle()
  formulationtypePage.choose('Upload a CSV file for ingredients and their concentration range')
  uploadingredientsfilePage.assertPageTitle()
  uploadingredientsfilePage.chooseFile('ingredient-range.csv')
  uploadingredientsfilePage.submit()
  uploadingredientsfilePage.submit()
  selectphoptionPage.assertPageTitle()
  selectphoptionPage.choose('The minimum pH is 3 or higher, and the maximum pH is 10 or lower')
});

When("the user uploads an ingredient csv with exact concentration", function () {
  formulationtypePage.assertPageTitle()
  formulationtypePage.choose('Upload a CSV file for ingredients and their exact concentration')
  uploadingredientsfilePage.assertPageTitle()
  uploadingredientsfilePage.chooseFile('ingredient-exact.csv')
  uploadingredientsfilePage.submit()
  uploadingredientsfilePage.submit()
  selectphoptionPage.assertPageTitle()
  selectphoptionPage.choose('The minimum pH is 3 or higher, and the maximum pH is 10 or lower')

});

When("the user creates the product notification details", function (this: any) {

  switch (journeytype) {

    case 'nonanonomultiitemnocmr':
      taskListPage.selectProductDetails()
      numberofshadesPage.assertPageTitle()
      numberofshadesPage.choose('No')
      addphysicalformPage.assertPageTitle()
      addphysicalformPage.choose(this.product.nonanonomultiitemnocmr.physicalform)
      specialapplicatorPage.assertPageTitle()
      specialapplicatorPage.choose('pressurised container')
      specialapplicatortypePage.assertPageTitle()
      specialapplicatortypePage.choose(this.product.nonanonomultiitemnocmr.applicatortype)
      containscmrsPage.assertPageTitle()
      containscmrsPage.choose(this.product.nonanonomultiitemnocmr.containscmrsubstances)
      productRootcategoryPage.assertPageTitle()
      productRootcategoryPage.choose(this.product.nonanonomultiitemnocmr.categoryofproduct)
      productsubcategoryPage.assertPageTitle()
      productsubcategoryPage.choose(this.product.nonanonomultiitemnocmr.productsubcategory)
      ProductSubSubCategoryPage.assertPageTitle()
      ProductSubSubCategoryPage.choose(this.product.nonanonomultiitemnocmr.productsubsubcategory)
      break

    case 'nanomaterialnomultiitemcmr':
      taskListPage.selectProductDetails()
      selectnanomaterialPage.assertPageTitle()
      selectnanomaterialPage.choose(this.product.nanomaterialnomultiitemcmr.notifiednanomaterial)
      exposureconditionPage.assertPageTitle()
      exposureconditionPage.choose(this.product.nanomaterialnomultiitemcmr.exposurecondition)
      exposureroutesPage.assertPageTitle()
      exposureroutesPage.choose(this.product.nanomaterialnomultiitemcmr.exposureroutes)
      numberofshadesPage.assertPageTitle()
      numberofshadesPage.choose('No')
      addphysicalformPage.assertPageTitle()
      addphysicalformPage.choose(this.product.nanomaterialnomultiitemcmr.physicalform)
      specialapplicatorPage.assertPageTitle()
      specialapplicatorPage.choose('pressurised container')
      specialapplicatortypePage.assertPageTitle()
      specialapplicatortypePage.choose(this.product.nanomaterialnomultiitemcmr.applicatortype)
      containscmrsPage.assertPageTitle()
      containscmrsPage.choose(this.product.nanomaterialnomultiitemcmr.containscmrsubstances)
      cmrsubstancePage.assertPageTitle()
      cmrsubstancePage.enterSubstanceDetails(this.product.nanomaterialnomultiitemcmr.substance1, this.product.nanomaterialnomultiitemcmr.substance1casno, this.product.nanomaterialnomultiitemcmr.substance1ecno)
      productRootcategoryPage.assertPageTitle()
      productRootcategoryPage.choose(this.product.nanomaterialnomultiitemcmr.categoryofproduct)
      productsubcategoryPage.assertPageTitle()
      productsubcategoryPage.choose(this.product.nanomaterialnomultiitemcmr.productsubcategory)
      ProductSubSubCategoryPage.assertPageTitle()
      ProductSubSubCategoryPage.choose(this.product.nanomaterialnomultiitemcmr.productsubsubcategory)
      break
  }

});

When("the user accepts and submits the product notification", function (this: any) {
  switch (journeytype) {

    case 'nonanonomultiitemnocmr':
      taskListPage.goToSummary()
      acceptandsubmitPage.assertPageTitle()
      acceptandsubmitPage.assertProductInfo(this.product.nonanonomultiitemnocmr.productname, this.product.nonanonomultiitemnocmr.forchildrenunderthree,
          this.product.nonanonomultiitemnocmr.numnberofitems, this.product.nonanonomultiitemnocmr.shades, this.product.nonanonomultiitemnocmr.image, this.product.nonanonomultiitemnocmr.areitemsmixed)
      acceptandsubmitPage.assertProductDetails(this.product.nonanonomultiitemnocmr.categoryofproduct, this.product.nonanonomultiitemnocmr.productsubcategory, this.product.nonanonomultiitemnocmr.productsubsubcategory,
          this.product.nonanonomultiitemnocmr.containscmrsubstances, this.product.nonanonomultiitemnocmr.physicalform, this.product.nonanonomultiitemnocmr.applicatortype)
      acceptandsubmitPage.submit()
      declarationPage.assertPageTitle()
      declarationPage.submit()
      acceptPage.assertPageTitle()
      acceptPage.selectNotifiedProductsLink()
      cosmeticProductsPage.assertPageTitle()
      cosmeticProductsPage.selectLastCreatedProduct(this.product.nonanonomultiitemnocmr.productname)
      break

    case 'nanonmaterialmultiitemnocmr':
      taskListPage.goToSummary()
      acceptandsubmitPage.assertPageTitle()
      acceptandsubmitPage.assertProductInfo(this.product.nanonmaterialmultiitemnocmr.productname, this.product.nanonmaterialmultiitemnocmr.forchildrenunderthree,
          this.product.nanonmaterialmultiitemnocmr.numnberofitems, this.product.nanonmaterialmultiitemnocmr.shades, this.product.nanonmaterialmultiitemnocmr.image, this.product.nanonmaterialmultiitemnocmr.areitemsmixed)
      acceptandsubmitPage.assertItemDetails(this.product.nanonmaterialmultiitemnocmr.itemname1, this.product.nanonmaterialmultiitemnocmr.itemcategoryofproduct, this.product.nanonmaterialmultiitemnocmr.itemcontainscmrsubstances,
          this.product.nanonmaterialmultiitemnocmr.shades, this.product.nanonmaterialmultiitemnocmr.notifiednanomaterial, this.product.nanonmaterialmultiitemnocmr.exposureroutes, this.product.nanonmaterialmultiitemnocmr.exposurecondition,
          this.product.nanonmaterialmultiitemnocmr.itemproductsubcategory, this.product.nanonmaterialmultiitemnocmr.itemproductsubsubcategory, this.product.nanonmaterialmultiitemnocmr.itemphysicalform, this.product.nanonmaterialmultiitemnocmr.itemapplicatortype)
      acceptandsubmitPage.assertItemDetails(this.product.nanonmaterialmultiitemnocmr.itemname2, this.product.nanonmaterialmultiitemnocmr.itemcategoryofproduct, this.product.nanonmaterialmultiitemnocmr.itemcontainscmrsubstances,
          this.product.nanonmaterialmultiitemnocmr.shades, this.product.nanonmaterialmultiitemnocmr.notifiednanomaterial, this.product.nanonmaterialmultiitemnocmr.exposureroutes, this.product.nanonmaterialmultiitemnocmr.exposurecondition,
          this.product.nanonmaterialmultiitemnocmr.itemproductsubcategory, this.product.nanonmaterialmultiitemnocmr.itemproductsubsubcategory, this.product.nanonmaterialmultiitemnocmr.itemphysicalform, this.product.nanonmaterialmultiitemnocmr.itemapplicatortype)
      acceptandsubmitPage.submit()
      declarationPage.assertPageTitle()
      declarationPage.submit()
      acceptPage.assertPageTitle()
      acceptPage.selectNotifiedProductsLink()
      cosmeticProductsPage.assertPageTitle()
      cosmeticProductsPage.selectLastCreatedProduct(this.product.nanonmaterialmultiitemnocmr.productname)
      break

    case 'nanonmaterialmultiitemcmr':
      taskListPage.goToSummary()
      acceptandsubmitPage.assertPageTitle()
      acceptandsubmitPage.submit()
      declarationPage.assertPageTitle()
      declarationPage.submit()
      acceptPage.assertPageTitle()
      acceptPage.selectNotifiedProductsLink()
      cosmeticProductsPage.assertPageTitle()
      cosmeticProductsPage.selectLastCreatedProduct(this.product.nanonmaterialmultiitemcmr.productname)
      break
    case 'nanonmaterialnomultiitemcmr':
      taskListPage.goToSummary()
      acceptandsubmitPage.assertPageTitle()
      acceptandsubmitPage.assertProductInfo(this.product.nanomaterialnomultiitemcmr.productname, this.product.nanomaterialnomultiitemcmr.forchildrenunderthree,
        this.product.nanomaterialnomultiitemcmr.numnberofitems, this.product.nanomaterialnomultiitemcmr.shades, this.product.nanomaterialnomultiitemcmr.image, this.product.nanomaterialnomultiitemcmr.areitemsmixed)
    acceptandsubmitPage.assertProductDetails(this.product.nanomaterialnomultiitemcmr.categoryofproduct, this.product.nanomaterialnomultiitemcmr.productsubcategory, this.product.nanomaterialnomultiitemcmr.productsubsubcategory,
        this.product.nanomaterialnomultiitemcmr.containscmrsubstances, this.product.nanomaterialnomultiitemcmr.physicalform, this.product.nanomaterialnomultiitemcmr.applicatortype)
    acceptandsubmitPage.assertCMRSubstance(this.product.nanomaterialnomultiitemcmr.substance1, this.product.nanomaterialnomultiitemcmr.substance1casno, this.product.nanomaterialnomultiitemcmr.substance1ecno)
      acceptandsubmitPage.submit()
      declarationPage.assertPageTitle()
      declarationPage.submit()
      acceptPage.assertPageTitle()
      acceptPage.selectNotifiedProductsLink()
      cosmeticProductsPage.assertPageTitle()
      cosmeticProductsPage.selectLastCreatedProduct(this.product.nanomaterialnomultiitemcmr.productname)
      break
  }

});

Then("the product details section is completed successfully", function () {
  productcompletedPage.assertSuccessfulCreation()
  productcompletedPage.gotoTaskListPage()
});

Then("the product notification is successfully created", function (this: any) {
  if (journeytype === "nonanonomultiitemnocmr") {
    productPage.assertPageTitle(this.product.nonanonomultiitemnocmr.productname)

  }
  if (journeytype === "nanonmaterialmultiitemnocmr") {
    productPage.assertPageTitle(this.product.nanonmaterialmultiitemnocmr.productname)
  }
  if (journeytype === "nanonmaterialmultiitemcmr") {
    cy.get("dt").contains("UK cosmetic product number").siblings().then($word => {
      cosmeticNumber = $word.text()
      cosmeticNumber = cosmeticNumber.trim()
      cosmeticNumber = cosmeticNumber.replace(/\n|\s|\r/, "")
    })
    cy.get("dt").contains("UK notified").siblings().then($word => {
      dateNotified = $word.text()
      dateNotified = dateNotified.trim()
      dateNotified = dateNotified.replace(/\n|\r/, "")
    })
    productPage.assertPageTitle(this.product.nanonmaterialmultiitemcmr.productname)
  }
});

Then("the details of the cosmetic product are successfully added to SCPN", function (this: any) {
  productcompletedPage.assertSuccessfulCreation()
  productcompletedPage.gotoTaskListPage()
  taskListPage.isIncomplete()
  taskListPage.sectionsCompleted()
  taskListPage.viewDeletePresent()
  taskListPage.numberOfQuestionsMany()
  if (journeytype === "nonanonomultiitemnocmr") {
    taskListPage.assertProductApplicationCompleted(this.product.nonanonomultiitemnocmr.productname)
  }

  if (journeytype === "nanonmaterialmultiitemnocmr") {
    taskListPage.assertProductApplicationCompleted(this.product.nanonmaterialmultiitemnocmr.productname)
    storeNotified = this.product.nanonmaterialmultiitemnocmr.productname
    notified = true
  }
  if (journeytype === "nanomaterialnomultiitemcmr") {
    taskListPage.assertProductApplicationCompleted(this.product.nanomaterialnomultiitemcmr.productname)

  }
  if (journeytype === "nanonmaterialmultiitemcmr") {
    taskListPage.assertProductApplicationCompleted(this.product.nanonmaterialmultiitemcmr.productname)
    completeProduct = this.product.nanonmaterialmultiitemcmr.productname
    perfect = true
  }
});

// Given("the user visits the SCPN login page", function () {
//   loginPage.loginBasicAuth()
// });

Given("the user visits the url: {string}", function (url: string) {
  loginPage.loginBasicAuth(url)
});

When("the user logs into the service", function () {
  loginPage.loginAsOpss()
  loginPage.submit()
});

Then("the {string} user is shown header information", function(accountType:string){
  headerPage.assertHeaderLoggedIn(accountType)
})



Then("the {string} user is shown correct header information after signing out", function(accountType:string){
  headerPage.signOut()
  headerPage.assertHeaderLoggedOut(accountType)
})

Then("the {string} user is shown footer information", function(accountType: string){
  footerPage.assertHrefs(accountType)
})
Then("the {string} user is shown correct footer information after signing out", function(accountType: string){
  headerPage.signOut()
  footerPage.assertHrefs(accountType)
})

// When("the user logs into SCPN", function () {
//   loginPage.loginAsOpss()
//   loginPage.submit()
// });

Then("the user successfully authenticates using their verification code", function () {
  checkCodePage.assertPageTitle()
  checkCodePage.fillOtpcode("11222")
});

Then("the user recieves text message and successfully authenticates using their verification code", function(){
  accesstypePage.assertPageTitle()
  accesstypePage.choose()
})

When("the user selects the responsible person", function () {
  selectResponsiblePersonPage.assertPageTitle()
  selectResponsiblePersonPage.selectRP(Cypress.env('RP'))
  selectResponsiblePersonPage.submit()
});

Then("user searches for Archived product notification", function(){
  notificationsearchPage.assertPageTitle();

  notificationsearchPage.search(this.search.status.archived);
  notificationsearchPage.selectNotificationStatus("Archived");
  notificationsearchPage.submit();
});

Then("user searches for Notified product notification", function(){
  notificationsearchPage.assertPageTitle();
  notificationsearchPage.search(this.search.status.notified);
  notificationsearchPage.selectNotificationStatus("Notified");
  notificationsearchPage.submit();
});

Then("user searches for an Ingredient", function(){
  notificationsearchPage.selectIngredient()
  notificationsearchPage.searchIngredient("test");
  notificationsearchPage.submit();
})
When("user sees the results of their search", function (){
  notificationresultPage.assertPageTitle();
})

When("user sees the results of their ingredient search", function (){
  notificationresultPage.assertIngredientPageTitle();
})
Then("user views the details of their archived result", function(){
  notificationresultPage.select(this.search.status.archived);
})

Then("user views the details of their notified result", function(){
  notificationresultPage.select(this.search.status.notified);
})

Then("user views the details of the ingredient", function (){
  notificationresultPage.select("test");
})


When("the user completes the first stage of creating a new product notification with no nanomaterials, no multi-items and no CMR substances", function (this: any) {
  journeytype = "nonanonomultiitemnocmr"

  responsiblepersonPage.assertPageTitle()
  responsiblepersonPage.assertUser(Cypress.env('RP'))
  responsiblepersonPage.selectCosmeticProducts()

  cosmeticProductsPage.assertPageTitle()
  cosmeticProductsPage.selectCreateNewProduct()

  taskListPage.assertPageTitle()
  taskListPage.numberOfQuestionsOne()
  taskListPage.selectCreateProduct()

  productNamePage.assertPageTitle()
  productNamePage.enterProductName(this.product.nonanonomultiitemnocmr.productname)
  productNamePage.submit()

  internalReferencePage.assertPageTitle()
  internalReferencePage.choose('No')
  internalReferencePage.submit()

  childrenUnderThreePage.assertPageTitle()
  childrenUnderThreePage.choose(this.product.nonanonomultiitemnocmr.forchildrenunderthree)

  containsNanomaterialsPage.assertPageTitle()
  containsNanomaterialsPage.choose('No')

  singleorMulticomponentPage.assertPageTitle()
  singleorMulticomponentPage.choose('No')

  addproductimagePage.assertPageTitle()
  addproductimagePage.chooseFile()
});

When("the user completes the first stage of creating a new product notification with nanomaterials, multi-items and CMR substances", function (this: any) {
  journeytype = "nanonmaterialmultiitemcmr"

  responsiblepersonPage.assertPageTitle()
  responsiblepersonPage.assertUser(Cypress.env('RP'))
  responsiblepersonPage.selectCosmeticProducts()

  cosmeticProductsPage.assertPageTitle()
  cosmeticProductsPage.selectCreateNewProduct()

  taskListPage.assertPageTitle()
  taskListPage.numberOfQuestionsOne()
  taskListPage.selectCreateProduct()

  productNamePage.assertPageTitle()
  productNamePage.enterProductName(this.product.nanonmaterialmultiitemcmr.productname)
  productNamePage.submit()

  internalReferencePage.assertPageTitle()
  internalReferencePage.choose('No')
  internalReferencePage.submit()

  childrenUnderThreePage.assertPageTitle()
  childrenUnderThreePage.choose(this.product.nanonmaterialmultiitemcmr.forchildrenunderthree)

  containsNanomaterialsPage.assertPageTitle()
  containsNanomaterialsPage.choose('Yes')

  singleorMulticomponentPage.assertPageTitle()
  singleorMulticomponentPage.choose('Yes')

  addproductimagePage.assertPageTitle()
  addproductimagePage.chooseFile()
});

When("the user completes the first stage of creating a new product notification with nanomaterials, no multi-items and with CMR substances", function (this: any) {

  journeytype = "nanomaterialnomultiitemcmr"

  responsiblepersonPage.assertPageTitle()
  responsiblepersonPage.assertUser(Cypress.env('RP'))
  responsiblepersonPage.selectCosmeticProducts()

  cosmeticProductsPage.assertPageTitle()
  cosmeticProductsPage.selectCreateNewProduct()

  taskListPage.assertPageTitle()
  taskListPage.numberOfQuestionsOne()
  taskListPage.selectCreateProduct()

  productNamePage.assertPageTitle()
  productNamePage.enterProductName(this.product.nanomaterialnomultiitemcmr.productname)
  productNamePage.submit()

  internalReferencePage.assertPageTitle()
  internalReferencePage.choose('No')
  internalReferencePage.submit()

  childrenUnderThreePage.assertPageTitle()
  childrenUnderThreePage.choose(this.product.nanomaterialnomultiitemcmr.forchildrenunderthree)

  containsNanomaterialsPage.assertPageTitle()
  containsNanomaterialsPage.choose('Yes')

  singleorMulticomponentPage.assertPageTitle()
  singleorMulticomponentPage.choose('No')

  addproductimagePage.assertPageTitle()
  addproductimagePage.chooseFile()

});

When("the user completes the first stage of creating a new product notification with nanomaterials, multi-items and no CMR substances", function (this: any) {

  journeytype = "nanonmaterialmultiitemnocmr"

  responsiblepersonPage.assertPageTitle()
  responsiblepersonPage.assertUser(Cypress.env('RP'))
  responsiblepersonPage.selectCosmeticProducts()

  cosmeticProductsPage.assertPageTitle()
  cosmeticProductsPage.selectCreateNewProduct()

  taskListPage.assertPageTitle()
  taskListPage.numberOfQuestionsOne()
  taskListPage.selectCreateProduct()

  productNamePage.assertPageTitle()
  productNamePage.enterProductName(this.product.nanonmaterialmultiitemnocmr.productname)
  productNamePage.submit()

  internalReferencePage.assertPageTitle()
  internalReferencePage.choose('No')
  internalReferencePage.submit()

  childrenUnderThreePage.assertPageTitle()
  childrenUnderThreePage.choose(this.product.nanonmaterialmultiitemnocmr.forchildrenunderthree)

  containsNanomaterialsPage.assertPageTitle()
  containsNanomaterialsPage.choose('Yes')

  singleorMulticomponentPage.assertPageTitle()
  singleorMulticomponentPage.choose('Yes')

  addproductimagePage.assertPageTitle()
  addproductimagePage.chooseFile()
});

When("the user enters the nanomaterial information", function (this: any) {
  taskListPage.selectNanomaterials(1)
  nanomaterialpurposePage.assertPageTitle()
  nanomaterialpurposePage.choose(this.product.nanonmaterialmultiitemnocmr.nanomaterialspurpose)
  nanomaterialnotifiedPage.assertPageTitle()
  nanomaterialnotifiedPage.choose('Yes')
  nanomaterialplacedonmarketPage.assertPageTitle()
  nanomaterialplacedonmarketPage.submit()
  notifiednanomaterialPage.assertPageTitle()
  notifiednanomaterialPage.choose(this.product.nanonmaterialmultiitemnocmr.notifiednanomaterial)

});
When("the user enters the nanomaterial information for cmr", function (this: any){
  taskListPage.selectNanomaterials(1)
  nanomaterialpurposePage.assertPageTitle()
  nanomaterialpurposePage.choose(this.product.nanonmaterialmultiitemcmr.nanomaterialspurpose)
  nanomaterialnotifiedPage.assertPageTitle()
  nanomaterialnotifiedPage.choose('Yes')
  nanomaterialplacedonmarketPage.assertPageTitle()
  nanomaterialplacedonmarketPage.submit()
  notifiednanomaterialPage.assertPageTitle()
  notifiednanomaterialPage.choose(this.product.nanonmaterialmultiitemcmr.notifiednanomaterial)
});
Then("the nanomaterials section is completed successfully", function () {
  nanomaterialcompletionPage.assertPageTitle()
  nanomaterialcompletionPage.submit()
});

When("the user enters the multi-item information", function () {
  taskListPage.numberOfQuestionsMany()
  taskListPage.selectMultiItemKit()
  multiitemmixedPage.assertPageTitle()
  multiitemmixedPage.choose('No')
});

Then("the multi-items section is completed successfully", function () {
  multiitemcompletionPage.assertPageTitle()
  multiitemcompletionPage.submit()
  taskListPage.assertMultiItemApplicationCompleted()
});

When("the user enters the item information", function (this: any) {

  tasklistPage.selectFirstItem()
  itemnamePage.assertPageTitle()
  itemnamePage.enterItemName(this.product.nanonmaterialmultiitemnocmr.itemname1)
  itemnamePage.submit()
  selectnanomaterialPage.assertPageTitle()
  selectnanomaterialPage.choose(this.product.nanonmaterialmultiitemnocmr.notifiednanomaterial)
  exposureconditionPage.assertPageTitle()
  exposureconditionPage.choose(this.product.nanonmaterialmultiitemnocmr.exposurecondition)
  exposureroutesPage.assertPageTitle()
  exposureroutesPage.choose(this.product.nanonmaterialmultiitemnocmr.exposureroutes)
  numberofshadesPage.assertPageTitle()
  numberofshadesPage.choose('No')
  addphysicalformPage.assertPageTitle()
  addphysicalformPage.choose(this.product.nanonmaterialmultiitemnocmr.itemphysicalform)
  specialapplicatorPage.assertPageTitle()
  specialapplicatorPage.choose('pressurised container')
  specialapplicatortypePage.assertPageTitle()
  specialapplicatortypePage.choose(this.product.nanonmaterialmultiitemnocmr.itemapplicatortype)
  containscmrsPage.assertPageTitle()
  containscmrsPage.choose(this.product.nanonmaterialmultiitemnocmr.itemcontainscmrsubstances)
  productRootcategoryPage.assertPageTitle()
  productRootcategoryPage.choose(this.product.nanonmaterialmultiitemnocmr.itemcategoryofproduct)
  productsubcategoryPage.assertPageTitle()
  productsubcategoryPage.choose(this.product.nanonmaterialmultiitemnocmr.itemproductsubcategory)
  ProductSubSubCategoryPage.assertPageTitle()
  ProductSubSubCategoryPage.choose(this.product.nanonmaterialmultiitemnocmr.itemproductsubsubcategory)
  formulationtypePage.assertPageTitle()
  formulationtypePage.choose('Enter ingredients and their exact concentration manually')
  ingredientexactconcentrationPage.assertPageTitle()
  ingredientexactconcentrationPage.enterIngredientDetails(this.product.nanonmaterialmultiitemnocmr.ingredientname1,
      this.product.nanonmaterialmultiitemnocmr.ingredientweight)
  selectphoptionPage.assertPageTitle()
  selectphoptionPage.choose('The minimum pH is 3 or higher, and the maximum pH is 10 or lower')
  productcompletedPage.assertSuccessfulCreation()
  productcompletedPage.gotoTaskListPage()
  tasklistPage.assertItemCompleted(this.product.nanonmaterialmultiitemnocmr.itemname1)

  tasklistPage.selectSecondtItem()
  itemnamePage.assertPageTitle()
  itemnamePage.enterItemName(this.product.nanonmaterialmultiitemnocmr.itemname2)
  itemnamePage.submit()
  selectnanomaterialPage.assertPageTitle()
  selectnanomaterialPage.choose(this.product.nanonmaterialmultiitemnocmr.notifiednanomaterial)
  exposureconditionPage.assertPageTitle()
  exposureconditionPage.choose(this.product.nanonmaterialmultiitemnocmr.exposurecondition)
  exposureroutesPage.assertPageTitle()
  exposureroutesPage.choose(this.product.nanonmaterialmultiitemnocmr.exposureroutes)
  numberofshadesPage.assertPageTitle()
  numberofshadesPage.choose('No')
  addphysicalformPage.assertPageTitle()
  addphysicalformPage.choose(this.product.nanonmaterialmultiitemnocmr.itemphysicalform)
  specialapplicatorPage.assertPageTitle()
  specialapplicatorPage.choose('pressurised container')
  specialapplicatortypePage.assertPageTitle()
  specialapplicatortypePage.choose(this.product.nanonmaterialmultiitemnocmr.itemapplicatortype)
  containscmrsPage.assertPageTitle()
  containscmrsPage.choose(this.product.nanonmaterialmultiitemnocmr.itemcontainscmrsubstances)
  productRootcategoryPage.assertPageTitle()
  productRootcategoryPage.choose(this.product.nanonmaterialmultiitemnocmr.itemcategoryofproduct)
  productsubcategoryPage.assertPageTitle()
  productsubcategoryPage.choose(this.product.nanonmaterialmultiitemnocmr.itemproductsubcategory)
  ProductSubSubCategoryPage.assertPageTitle()
  ProductSubSubCategoryPage.choose(this.product.nanonmaterialmultiitemnocmr.itemproductsubsubcategory)
  formulationtypePage.assertPageTitle()
  formulationtypePage.choose('Enter ingredients and their exact concentration manually')
  ingredientexactconcentrationPage.assertPageTitle()
  ingredientexactconcentrationPage.enterIngredientDetails(this.product.nanonmaterialmultiitemnocmr.ingredientname2,
      this.product.nanonmaterialmultiitemnocmr.ingredientweight)
  selectphoptionPage.assertPageTitle()
  selectphoptionPage.choose('The minimum pH is 3 or higher, and the maximum pH is 10 or lower')
  productcompletedPage.assertSuccessfulCreation()
  productcompletedPage.gotoTaskListPage()
  tasklistPage.assertItemCompleted(this.product.nanonmaterialmultiitemnocmr.itemname2)
});

When("the user enters the item information for cmr product", function (this: any) {
  tasklistPage.selectFirstItem()
  itemnamePage.assertPageTitle()
  itemnamePage.enterItemName(this.product.nanonmaterialmultiitemcmr.itemname1)
  itemnamePage.submit()
  selectnanomaterialPage.assertPageTitle()
  selectnanomaterialPage.choose(this.product.nanonmaterialmultiitemcmr.notifiednanomaterial)
  exposureconditionPage.assertPageTitle()
  exposureconditionPage.choose(this.product.nanonmaterialmultiitemcmr.exposurecondition)
  exposureroutesPage.assertPageTitle()
  exposureroutesPage.choose(this.product.nanonmaterialmultiitemcmr.exposureroutes)
  numberofshadesPage.assertPageTitle()
  numberofshadesPage.choose('No')
  addphysicalformPage.assertPageTitle()
  addphysicalformPage.choose(this.product.nanonmaterialmultiitemcmr.itemphysicalform)
  specialapplicatorPage.assertPageTitle()
  specialapplicatorPage.choose('pressurised container')
  specialapplicatortypePage.assertPageTitle()
  specialapplicatortypePage.choose(this.product.nanonmaterialmultiitemcmr.itemapplicatortype)
  containscmrsPage.assertPageTitle()
  containscmrsPage.choose(this.product.nanonmaterialmultiitemcmr.itemcontainscmrsubstances)
  cmrsubstancePage.assertPageTitle()
  cmrsubstancePage.enterSubstanceDetails(this.product.nanonmaterialmultiitemcmr.substance1, this.product.nanonmaterialmultiitemcmr.substance1casno, this.product.nanonmaterialmultiitemcmr.substance1ecno)

  productRootcategoryPage.assertPageTitle()
  productRootcategoryPage.choose(this.product.nanonmaterialmultiitemcmr.itemcategoryofproduct)
  productsubcategoryPage.assertPageTitle()
  productsubcategoryPage.choose(this.product.nanonmaterialmultiitemcmr.itemproductsubcategory)
  ProductSubSubCategoryPage.assertPageTitle()
  ProductSubSubCategoryPage.choose(this.product.nanonmaterialmultiitemcmr.itemproductsubsubcategory)
  formulationtypePage.assertPageTitle()
  formulationtypePage.choose('Enter ingredients and their exact concentration manually')
  ingredientexactconcentrationPage.assertPageTitle()
  ingredientexactconcentrationPage.enterIngredientDetailswithCAS(this.product.nanonmaterialmultiitemcmr.ingredientname1, this.product.nanonmaterialmultiitemcmr.ingredientweight, this.product.nanonmaterialmultiitemcmr.ingredient1CAS, "yes")
  selectphoptionPage.assertPageTitle()
  selectphoptionPage.choose('The minimum pH is 3 or higher, and the maximum pH is 10 or lower')
  productcompletedPage.assertSuccessfulCreation()
  productcompletedPage.gotoTaskListPage()
  tasklistPage.assertItemCompleted(this.product.nanonmaterialmultiitemcmr.itemname1)

  tasklistPage.selectSecondtItem()
  itemnamePage.assertPageTitle()
  itemnamePage.enterItemName(this.product.nanonmaterialmultiitemcmr.itemname2)
  itemnamePage.submit()
  selectnanomaterialPage.assertPageTitle()
  selectnanomaterialPage.choose(this.product.nanonmaterialmultiitemcmr.notifiednanomaterial)
  exposureconditionPage.assertPageTitle()
  exposureconditionPage.choose(this.product.nanonmaterialmultiitemcmr.exposurecondition1)
  exposureroutesPage.assertPageTitle()
  exposureroutesPage.choose(this.product.nanonmaterialmultiitemcmr.exposureroutes1)
  numberofshadesPage.assertPageTitle()
  numberofshadesPage.choose('No')
  addphysicalformPage.assertPageTitle()
  addphysicalformPage.choose(this.product.nanonmaterialmultiitemcmr.itemphysicalform1)
  specialapplicatorPage.assertPageTitle()
  specialapplicatorPage.choose('pressurised container')
  specialapplicatortypePage.assertPageTitle()
  specialapplicatortypePage.choose(this.product.nanonmaterialmultiitemcmr.itemapplicatortype)
  containscmrsPage.assertPageTitle()
  containscmrsPage.choose(this.product.nanonmaterialmultiitemcmr.itemcontainscmrsubstances)
  cmrsubstancePage.assertPageTitle()
  cmrsubstancePage.enterSubstanceDetails(this.product.nanonmaterialmultiitemcmr.substance2, this.product.nanonmaterialmultiitemcmr.substance2casno, this.product.nanonmaterialmultiitemcmr.substance2ecno)
  productRootcategoryPage.assertPageTitle()
  productRootcategoryPage.choose(this.product.nanonmaterialmultiitemcmr.itemcategoryofproduct1)
  productsubcategoryPage.assertPageTitle()
  productsubcategoryPage.choose(this.product.nanonmaterialmultiitemcmr.itemproductsubcategory1)
  ProductSubSubCategoryPage.assertPageTitle()
  ProductSubSubCategoryPage.choose(this.product.nanonmaterialmultiitemcmr.itemproductsubsubcategory1)
  formulationtypePage.assertPageTitle()
  formulationtypePage.choose('Enter ingredients and their exact concentration manually')
  ingredientexactconcentrationPage.assertPageTitle()
  ingredientexactconcentrationPage.enterIngredientDetailswithCAS(this.product.nanonmaterialmultiitemcmr.ingredientname2, this.product.nanonmaterialmultiitemcmr.ingredientweight1, this.product.nanonmaterialmultiitemcmr.ingredient2CAS, "no")
  selectphoptionPage.assertPageTitle()
  selectphoptionPage.choose('The minimum pH is 3 or higher, and the maximum pH is 10 or lower')
  productcompletedPage.assertSuccessfulCreation()
  productcompletedPage.gotoTaskListPage()
  tasklistPage.assertItemCompleted(this.product.nanonmaterialmultiitemcmr.itemname2)
});
Then("the items section is completed successfully", function (this: any) {
  tasklistPage.assertItemCompleted(this.product.nanonmaterialmultiitemnocmr.itemname2)

});
Then("the items section is completed successfully for cmr", function (this: any) {
  tasklistPage.assertItemCompleted(this.product.nanonmaterialmultiitemcmr.itemname2)

});

Then("the OSU portal user changes the search user role to: {string}", function (role: string) {
  osudashboardPage.assertPageTitle()
  osudashboardPage.gotoAccountAdmin()
  accountadminPage.assertPageTitle()
  accountadminPage.gotoSearch()
  accountadminsearchPage.search('search')
  accountadminsearchPage.view()
  searchaccountPage.changeRole(role)
  roleType = role
});


When("the OSU user searches for previously created product notification", function () {
  osudashboardPage.assertPageTitle()
  osudashboardPage.gotoManageCosmetics()
  osunotificationsPage.assertPageTitle()
  osunotificationsPage.search(this.search.completeProduct.productname)
  osunotificationsPage.setStatus("Live")
  osunotificationsPage.submit()
  osunotificationssearchPage.assertPageTitle()
  osunotificationssearchPage.view()
});

When ("user sees the Search Dashboard", function(){
  if(roleType == 'OPSS General'){
    notificationsearchPage.assertCosmeticSearch()
    notificationsearchPage.assertIngredientSearch().should('not.exist')
  }
  else{
    notificationsearchPage.assertCosmeticSearch()
    notificationsearchPage.assertIngredientSearch()
  }
})

When("user searches for previously created product notification", function (){
  notificationsearchPage.search(this.search.status.completeProduct)
  notificationsearchPage.selectNotificationStatus("Notified")
  notificationsearchPage.selectSortingOrder("Newest")
  notificationsearchPage.submit()

  notificationresultPage.assertPageTitle()
  notificationresultPage.select(this.search.status.completeProduct)
})

let productName: string



function assertProductDetailInformation(this: any, underThree:string, numItems: string, productNumber: string, notified: string, RP: string, contactName: string, contactEmail: string, contactTelephone: string, accountType: string){
  searchproductPage.assertPageTitle(productName);
  if(accountType == "OSU") {
    if(productNumber.charAt(5) == '0'){
      productNumber = productNumber.substring(0,5) + productNumber.substring(6, productNumber.length)
    }
    searchproductPage.containsCosmeticProductNumber(productNumber)
  }
  else{
    searchproductPage.containsCosmeticProductNumber(productNumber)
  }
  if(roleType != "OSU") {
    searchproductPage.containsProductNotified(notified)
  }
  searchproductPage.containsProductName()
  searchproductPage.containsUnder3(underThree)
  searchproductPage.containsNumberItems(numItems)
  searchproductPage.containsLabelImage()
  searchproductPage.containsMixed()
  searchproductPage.containsResponsiblePerson(RP ,roleType)
  searchproductPage.containsAssignedContact(contactName, contactEmail, contactTelephone, roleType)
}

function assertProductDetailInformation2(this:any, cmr: string, substance1:string, substance2: string, itemname1: string, itemname2: string, notified: string, itemcategory: string, itemcategory1: string, subcategory: string,
                                         subcategory1: string, subsubcategory: string, subsubcategory1: string, physicalform: string, physicalform1: string, applicatorType:string){
  searchproductPage.containsShades(3)
  searchproductPage.containsCMR(2, cmr, [itemname1, itemname2], [substance1, substance2])
  searchproductPage.containsNanomaterials(2, [itemname1, itemname2], notified)
  searchproductPage.containsCategoryOfProduct(2, [itemcategory, itemcategory1], [itemname1, itemname2])
  searchproductPage.containssubCategoryOfProduct(2,[itemcategory.toLowerCase(), itemcategory1.substring(0, itemcategory1.length-1).toLowerCase()], [itemname1, itemname2], [subcategory, subcategory1])
  searchproductPage.containssubsubCategoryOfProduct(2, [subcategory.toLowerCase(), subcategory1.substring(0, itemcategory1.length-1).toLowerCase()], [itemname1, itemname2], [subsubcategory, subsubcategory1])
  searchproductPage.containsPhysicalForm(2, [itemname1, itemname2], [physicalform, physicalform1])
  searchproductPage.containsSpecialApplicator(2, applicatorType)
  searchproductPage.containsFormulation(2)
  if(roleType != "NPIS"){
    searchproductPage.containsPH(2)
  }
  else{
    searchproductPage.containsPH(0)
  }
}

function assertProductDetailInformation2NotPresent(){
  searchproductPage.containsCMRNotPresent()
  searchproductPage.containsNanomaterialsNotPresent()
  searchproductPage.containsCategoryOfProductNotPresent()
  searchproductPage.containsPhysicalFormNotPresent()
  searchproductPage.containsSpecialApplicatorNotPresent()
  searchproductPage.containsFormulationNotPresent()
}
Then("user is displayed the correct product notification pertaining to the specified search user role", function(){
  
  productName = this.search.status.completeProduct
  if(roleType == "OPSS General" || roleType == "OSU"){
    assertProductDetailInformation(this.search.completeProduct.forchildrenunderthree, this.search.completeProduct.numnberofitems,
        this.search.completeProduct.cosmeticnumber, this.search.completeProduct.uknotified, this.product.rpAddress.Name,
          this.product.assignedContacts.Name, this.product.assignedContacts.Email, this.product.assignedContacts.Telephone, "")

    assertProductDetailInformation2NotPresent()
  }
  else{
    assertProductDetailInformation(this.search.completeProduct.forchildrenunderthree, this.search.completeProduct.numnberofitems,
      this.search.completeProduct.cosmeticnumber, this.search.completeProduct.uknotified, this.product.rpAddress.Name,
        this.product.assignedContacts.Name, this.product.assignedContacts.Email, this.product.assignedContacts.Telephone, "")
    
        assertProductDetailInformation2(this.search.completeProduct.containscmrsubstances,
        (this.search.completeProduct.substance1 + ', ' + this.search.completeProduct.substance1casno + ', ' + this.search.completeProduct.substance1ecno),
        (this.search.completeProduct.substance2 + ', ' + this.search.completeProduct.substance2casno + ', ' + this.search.completeProduct.substance2ecno),
        this.search.completeProduct.itemname1, this.search.completeProduct.itemname2, this.search.completeProduct.notifiednanomaterial,
        this.search.completeProduct.itemcategoryofproduct, this.search.completeProduct.itemcategoryofproduct1,
        this.search.completeProduct.itemproductsubcategory, this.search.completeProduct.itemproductsubcategory1,
        this.search.completeProduct.itemproductsubsubcategory, this.search.completeProduct.itemproductsubsubcategory1,
        this.search.completeProduct.itemphysicalform, this.search.completeProduct.itemphysicalform1,
        this.search.completeProduct.itemapplicatortype)
  }
  switch (roleType) {

    case 'OPSS General':
      searchproductPage.containsShades(1)
      searchproductPage.containsAddressHistory().should("not.exist")
      searchproductPage.containsIngredientsNotPresent()
      searchproductPage.containsPercentageNotPresent()
      searchproductPage.notifiedNPIS().should('not.exist')
      searchproductPage.containsCASNotPresent()

      break
    case 'OPSS Enforcement':
      searchproductPage.containsIngredients(2, [this.search.completeProduct.itemname1, this.search.completeProduct.itemname2],  [this.search.completeProduct.ingredientname1, this.search.completeProduct.ingredientname2])
      searchproductPage.containsPercentage([this.search.completeProduct.itemname1, this.search.completeProduct.itemname2], [this.search.completeProduct.ingredientweight, this.search.completeProduct.ingredientweight1])
      searchproductPage.notifiedNPIS()
      searchproductPage.containsCAS(2, [this.search.completeProduct.itemname1, this.search.completeProduct.itemname2], [this.search.completeProduct.ingredient1CAS, this.search.completeProduct.ingredient2CAS])
      searchproductPage.containsAddressHistory()
      searchproductPage.containsPDF().should('not.exist')
      break
    case 'OPSS Science':
      searchproductPage.containsIngredients(1, [this.search.completeProduct.itemname2], [this.search.completeProduct.ingredientname2])
      searchproductPage.containsPercentageNotPresent()
      searchproductPage.containsPDF()
      searchproductPage.containsCAS(1, [this.search.completeProduct.itemname2], [this.search.completeProduct.ingredient2CAS])
      searchproductPage.notifiedNPIS().should('not.exist')
      searchproductPage.containsAddressHistory().should('not.exist')
      break
    case 'Trading Standards':
      searchproductPage.containsIngredients(1, [this.search.completeProduct.itemname2], [this.search.completeProduct.ingredientname2])
      searchproductPage.containsAddressHistory()
      searchproductPage.containsCAS(1, [this.search.completeProduct.itemname2], [this.search.completeProduct.ingredient2CAS])
      searchproductPage.containsPercentageNotPresent()
      searchproductPage.containsPDF().should('not.exist')
      break
    case 'NPIS':
      searchproductPage.containsIngredients(2, [this.search.completeProduct.itemname1, this.search.completeProduct.itemname2],  [this.search.completeProduct.ingredientname1, this.search.completeProduct.ingredientname2])
      searchproductPage.containsAddressHistory().should('not.exist')
      searchproductPage.containsPercentage([this.search.completeProduct.itemname1, this.search.completeProduct.itemname2], [this.search.completeProduct.ingredientweight, this.search.completeProduct.ingredientweight1])
      searchproductPage.notifiedNPIS()
      searchproductPage.containsCAS(2, [this.search.completeProduct.itemname1, this.search.completeProduct.itemname2], [this.search.completeProduct.ingredient1CAS, this.search.completeProduct.ingredient2CAS])
      break
  }
})

Then("the OSU user deletes the live product notification", function (){
  searchproductPage.delete()
})

When("the user returns to the Dashboard and searches for the deleted product notification", function (){
  cy.get('a').contains("OSU Support Portal").click()
  osudashboardPage.assertPageTitle()
  osudashboardPage.gotoManageCosmetics()
  osunotificationsPage.assertPageTitle()
  osunotificationsPage.search(this.search.completeProduct.productname)
  osunotificationsPage.setStatus("Deleted")
  osunotificationsPage.submit()
  osunotificationssearchPage.assertPageTitle()
  osunotificationssearchPage.view()
})
When("the user returns to the Dashboard and searches for the recovered product notification", function (){
  cy.get('a').contains("OSU Support Portal").click()
  osudashboardPage.assertPageTitle()
  osudashboardPage.gotoManageCosmetics()
  osunotificationsPage.assertPageTitle()
  osunotificationsPage.search(this.search.completeProduct.productname)
  osunotificationsPage.setStatus("Live")
  osunotificationsPage.submit()
  osunotificationssearchPage.assertPageTitle()
  osunotificationssearchPage.view()
})

Then("the OSU user recovers the live product notification", function (){
  searchproductPage.recover()
})

Then("OSU user is displayed the correct product notification information", function (){
  productName = this.search.completeProduct.productname
  roleType = "OSU"
  assertProductDetailInformation(this.search.completeProduct.forchildrenunderthree, this.search.completeProduct.numnberofitems,
      this.search.completeProduct.cosmeticnumber, this.search.completeProduct.uknotified, this.product.rpAddress.Name,
      this.product.assignedContacts.Name, this.product.assignedContacts.Email, this.product.assignedContacts.Telephone, "OSU")
})

When("the OSU user looks for a Responsible Person", function(){
  osudashboardPage.assertPageTitle()
  osudashboardPage.gotoResponsiblePerson()
  osuresponsiblepersonsearchPage.assertPageTitle()
  osuresponsiblepersonsearchPage.search(this.product.assignedContacts.Email)
  osuresponsiblepersonsearchPage.submit()
  osuresponsiblepersonsearchresultPage.assertPageTitle()
  osuresponsiblepersonsearchresultPage.view()
})

let previousName = ""
let previousBusiness = ""
Then("the OSU user changes the RP name and business type", function (){
  cy.get("dt").contains("Name").next().then($word => {
    previousName = $word.text()
    previousName = previousName.trim()
    previousName = previousName.replace(/\n|\s|\r/, "")
  })
  cy.get("dt").contains("Business type").next().then($word => {
    previousBusiness = $word.text()
    previousBusiness = previousBusiness.trim()
  })
  cy.get("dt").contains("Address").next().then($word => {
    RPAddress = $word.text().split(',')
    RPAddress = RPAddress.map(x => x.trim())
  })
  osuresponsiblepersonPage.assertPageTitle()
  osuresponsiblepersonPage.changeName("Nashtech12")
  osuresponsiblepersonPage.changeBusinessType("Individual")
  osuresponsiblepersonPage.changeAddress("123 road road", "update", 'city', "county", "B446DU")
})

When("the OSU user verifies the change in RP name and business type", function(){
  osuresponsiblepersonPage.assertSuccess()
  osuresponsiblepersonPage.assertName("Nashtech12")
  osuresponsiblepersonPage.assertBusinessType("Individual")
  osuresponsiblepersonPage.assertAddress("123 road road, update, city, county, B446DU")
})

Then("the OSU user reverts the changes and verifies the information is correct", function (){
  osuresponsiblepersonPage.assertPageTitle()
  osuresponsiblepersonPage.changeName(previousName)
  osuresponsiblepersonPage.changeBusinessType(previousBusiness)
  osuresponsiblepersonPage.changeAddress(RPAddress[0], RPAddress[1], RPAddress[2], RPAddress[3], RPAddress[4])
  osuresponsiblepersonPage.assertView(this.product.rpAddress.Name, this.product.rpAddress.Address, this.product.rpAddress.BusinessType, this.product.assignedContacts.Name, this.product.assignedContacts.Email, this.product.assignedContacts.Telephone)
})

When("the OSU user looks for a {string} account", function (accountType: string) {
  osudashboardPage.gotoAccountAdmin()
  accountadminPage.gotoSearch()
  accountadminsearchPage.search(accountType.toLowerCase())
  accountadminsearchPage.view()
})

When("the OSU user looks for a search account", function (){
  osudashboardPage.gotoAccountAdmin()
  accountadminPage.gotoSearch()
  accountadminsearchPage.search(this.search.account.email)
  accountadminsearchPage.view()
})

Then("the OSU user deactivates and reactivates the account", function (){
  accountadminviewPage.deactivate();
  cy.url().then($link =>{
    const http = $link
    if(http == "https://staging-submit.cosmetic-product-notifications.service.gov.uk/two-factor/sms"){
      checkCodePage.fillOtpcode('11222')
    }
  })
  cy.get('button[class="govuk-button"]').contains("Confirm deactivate account").click()
  accountadminviewPage.reactivate()
})

let previousRole = ""
Then("the OSU user changes the Search account Name and Role Type", function (){
  cy.get("dt").contains("Name").next().then($word => {
    previousName = $word.text()
    previousName = previousName.trim()
  })
  cy.get("dt").contains("Role type").next().then($word => {
    previousRole = $word.text()
    previousRole = previousRole.trim()
  })
  accountadminviewPage.assertEmail()
  accountadminviewPage.changeNameSearch("Name Changed")

  accountadminviewPage.changeRole("OPSS General")
})

When("the OSU user verifies the change in Search account name and roletype", function (){
  accountadminviewPage.assertSuccess()
  accountadminviewPage.assertName("Name Changed")
  accountadminviewPage.assertRoleType("OPSS General")
})

Then("the OSU user reverts the changes to the Search account", function (){
  accountadminviewPage.changeNameSearch(previousName)
  accountadminviewPage.changeRole(previousRole)
})

Then("the OSU user changes the Submit account Name and email address", function (){
  cy.get("dt").contains("Name").next().then($word => {
    previousName = $word.text()
    previousName = previousName.trim()
  })
  accountadminviewPage.changeNameSubmit("Name Changed")
  let http = ""
  cy.url().then($link =>{
    http = $link
    if(http == "https://staging-support.cosmetic-product-notifications.service.gov.uk/two-factor/sms"){
      checkCodePage.fillOtpcode('11222')
      accountadminviewPage.changeEmailSubmit("123@gmail.com")
    }
    else{
      accountadminviewPage.changeEmailSubmit("123@gmail.com")
    }
  })
})

When("the OSU user verifies the change in Submit account name and address", function (){
  accountadminviewPage.assertSuccess()
  accountadminviewPage.assertName("Name Changed")
  accountadminviewPage.assertEmailChanged("123@gmail.com")
})

Then("the OSU user reverts the changes to the Submit account", function (){
  accountadminviewPage.changeNameSubmit(previousName)
  accountadminviewPage.changeEmailSubmit(Cypress.env('SUBMIT_USER_EMAIL'))
})

When("the OSU user views the history log", function (){
  cy.get(".govuk-header").within(function (){
    cy.get("a").contains("OSU Support Portal").click()
  })
  osudashboardPage.gotoChangeHistory()
})

Then("the OSU user checks the changes they made to the {string} account", function (type: string){
  if(type == "Responsible Person") {
    osuhistoryPage.checkRPChanges(previousName, previousBusiness, OSUUserName, RPAddress)
  }
  else if(type == "Search"){
    osuhistoryPage.checkSearchChanges(previousRole, OSUUserName)
  }
})

Then("the OSU user checks the changes they made to the product notification", function (){
  osuhistoryPage.checkAccountStatus(OSUUserName)
})
Then("the OSU user checks changes to product notification", function (){
  osuhistoryPage.checkNotification(this.search.completeProduct.cosmeticnumber, OSUUserName);
})

When("the OSU user views their account details", function (){
  osudashboardPage.goToAccountSettings()
})

Then("the OSU user changes their name", function(){
  cy.get("dt").contains("Full name").next().then($word => {
    OSUUserName = $word.text()
    OSUUserName = OSUUserName.trim()
  })
  osuaccountsettingsPage.changeName("Name Changed")
})

When("the OSU checks the changes to their account name", function (){
  osuaccountsettingsPage.verifyNameChange("Name Changed")
})

Then("the OSU user reverts the changes", function (){
  osudashboardPage.goToAccountSettings()
  osuaccountsettingsPage.changeName(OSUUserName)
})