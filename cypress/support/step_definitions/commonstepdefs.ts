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
import deleteconfirmationPage from "../../pom/deleteconfirmation.page";
import { when } from "cypress/types/jquery";

let journeytype: string

beforeEach(function () {
  cy.fixture('product.json').then(function (product) {
    product.nanomaterial.name = `Test Nano ${generateRandomNumber(2)}`
    product.nonanonomultiitemnocmr.productname = `TestProduct ${generateRandomNumber(3)}`
    product.nanonmaterialmultiitemnocmr.productname = `TestProduct ${generateRandomNumber(3)}`
    product.nanomaterialnomultiitemcmr.productname = `TestProduct ${generateRandomNumber(3)}`
    product.nanomaterialnomultiitemcmr.substance1 = `Test Substance ${generateRandomNumber(3)}`
    product.nanomaterialnomultiitemcmr.substance1casno = `${generateRandomNumber(4)}-${generateRandomNumber(2)}-${generateRandomNumber(1)}`
    product.nanomaterialnomultiitemcmr.substance1ecno = `${generateRandomNumber(3)}-${generateRandomNumber(3)}-${generateRandomNumber(1)}`
    product.nanonmaterialmultiitemnocmr.itemname1 = `Item Name ${generateRandomNumber(3)}`
    product.nanonmaterialmultiitemnocmr.itemname2 = `Item Name ${generateRandomNumber(3)}`
    product.nanonmaterialmultiitemnocmr.ingredientname1 = `Ingredient ${generateRandomNumber(3)}`
    product.nanonmaterialmultiitemnocmr.ingredientname2 = `Ingredient ${generateRandomNumber(3)}`
    cy.writeFile('cypress/fixtures/product.json', product);
    this.product = product
  })
});

afterEach(function () {
  const name = Cypress.currentTest.title
  const sceanrioStatus = (Cypress as any).mocha.getRunner().suite.ctx.currentTest.state
  if (sceanrioStatus === 'failed') {
    cy.log(name)
    cy.sendOpsGenieAlert(name, sceanrioStatus);
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


When("the user deletes the product notification", function () {

  switch (journeytype) {
    case 'nanonmaterialmultiitemnocmr':
      productPage.selectUnarchiveNotificationLink()
      cosmeticProductsPage.assertUnarchiveSuccess()
      cosmeticProductsPage.selectLastCreatedProduct(this.product.nanonmaterialmultiitemnocmr.productname)
      productPage.assertPageTitle(this.product.nanonmaterialmultiitemnocmr.productname)
      productPage.selectDeleteNotificationLink()
      //deleteconfirmationPage.assertPageTitle()
      //deleteconfirmationPage.deleteNotificaiton()
      break

    case 'nanomaterialnomultiitemcmr':
      productPage.selectUnarchiveNotificationLink()
      cosmeticProductsPage.assertUnarchiveSuccess()
      cosmeticProductsPage.selectLastCreatedProduct(this.product.nanomaterialnomultiitemcmr.productname)
      productPage.assertPageTitle(this.product.nanomaterialnomultiitemcmr.productname)
      productPage.selectDeleteNotificationLink()
      //deleteconfirmationPage.assertPageTitle()
      //deleteconfirmationPage.deleteNotificaiton()
      break

    case 'nonanonomultiitemnocmr':
      productPage.selectUnarchiveNotificationLink()
      cosmeticProductsPage.assertUnarchiveSuccess()
      cosmeticProductsPage.selectLastCreatedProduct(this.product.nonanonomultiitemnocmr.productname)
      productPage.assertPageTitle(this.product.nonanonomultiitemnocmr.productname)
      productPage.selectDeleteNotificationLink()
      //deleteconfirmationPage.assertPageTitle()
      //deleteconfirmationPage.deleteNotificaiton()
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
      productPage.selectArchiveNotificationLink()
      archivereasonPage.assertPageTitle()
      archivereasonPage.choose('Product no longer available on the market')
      cosmeticProductsPage.assertArchiveSuccess()
      cosmeticProductsPage.selectArchivedNotifications()
      break

    case 'nanomaterialnomultiitemcmr':
      productPage.assertPageTitle(this.product.nanomaterialnomultiitemcmr.productname)
      productPage.selectArchiveNotificationLink()
      archivereasonPage.assertPageTitle()
      archivereasonPage.choose('Product no longer available on the market')
      cosmeticProductsPage.assertArchiveSuccess()
      cosmeticProductsPage.selectArchivedNotifications()
      break

    case 'nonanonomultiitemnocmr':
      productPage.assertPageTitle(this.product.nonanonomultiitemnocmr.productname)
      productPage.selectArchiveNotificationLink()
      archivereasonPage.assertPageTitle()
      archivereasonPage.choose('Product no longer available on the market')
      cosmeticProductsPage.assertArchiveSuccess()
      cosmeticProductsPage.selectArchivedNotifications()
      break
  }

});

Given("the user creates a notified nanomaterial", function (this: any) {
  /**responsiblepersonPage.assertPageTitle()
  selectResponsiblePersonPage.selectRP(Cypress.env('RP'))

  responsiblepersonPage.assertUser(Cypress.env('RP'))
  Gilead here, had to disable this because after login responsible person already setup for me
  **/
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
      
    //taskListPage.selectAcceptandSubmit()
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

    case 'nanomaterialnomultiitemcmr':
      //taskListPage.selectAcceptandSubmit()
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
});

Then("the details of the cosmetic product are successfully added to SCPN", function (this: any) {
  productcompletedPage.assertSuccessfulCreation()
  productcompletedPage.gotoTaskListPage()
  if (journeytype === "nonanonomultiitemnocmr") {
    taskListPage.assertProductApplicationCompleted(this.product.nonanonomultiitemnocmr.productname)
  }
  if (journeytype === "nanonmaterialmultiitemnocmr") {
    taskListPage.assertProductApplicationCompleted(this.product.nanonmaterialmultiitemnocmr.productname)
  }
  if (journeytype === "nanomaterialnomultiitemcmr") {
    taskListPage.assertProductApplicationCompleted(this.product.nanomaterialnomultiitemcmr.productname)
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

// When("the user logs into SCPN", function () {
//   loginPage.loginAsOpss()
//   loginPage.submit()
// });

Then("the user successfully authenticates using their verification code", function () {
  checkCodePage.assertPageTitle()
  checkCodePage.fillOtpcode("11222")
});

When("the user selects the responsible person", function () {
  /**selectResponsiblePersonPage.assertPageTitle()
  selectResponsiblePersonPage.selectRP(Cypress.env('RP'))
  selectResponsiblePersonPage.submit()*/
});

When("the user completes the first stage of creating a new product notification with no nanomaterials, no multi-items and no CMR substances", function (this: any) {
  journeytype = "nonanonomultiitemnocmr"

  /**responsiblepersonPage.assertPageTitle()
  responsiblepersonPage.assertUser(Cypress.env('RP'))
  responsiblepersonPage.selectCosmeticProducts()**/

  cosmeticProductsPage.assertPageTitle()
  cosmeticProductsPage.selectCreateNewProduct()

  taskListPage.assertPageTitle()
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


When("the user creates a new product not for children under 3, with Nanomaterials, multis and no CMRS", function (this: any) {
  cosmeticProductsPage.assertPageTitle()
  cosmeticProductsPage.selectCreateNewProduct()

  taskListPage.assertPageTitle()
  taskListPage.selectCreateProduct()

  productNamePage.assertPageTitle()
  productNamePage.enterProductName(`AutoMation Test ${generateRandomNumber(2)}`)
  productNamePage.submit()

  internalReferencePage.assertPageTitle()
  internalReferencePage.choose('No')
  internalReferencePage.submit()

  childrenUnderThreePage.assertPageTitle()
  childrenUnderThreePage.choose(this.product.nanomaterialnomultiitemcmr.forchildrenunderthree)

  containsNanomaterialsPage.assertPageTitle()
  containsNanomaterialsPage.choose('Yes')

  singleorMulticomponentPage.assertPageTitle()
  singleorMulticomponentPage.choose("Yes")

  addproductimagePage.assertPageTitle()
  addproductimagePage.chooseFile()
  
  productcompletedPage.assertSuccessfulCreation()
  productcompletedPage.submit()

  nanomaterialpurposePage.assertPageTitle()
  nanomaterialpurposePage.choose("Another purpose")
  
  nanomaterialnotifiedPage.assertPageTitle()
  nanomaterialnotifiedPage.choose("Yes")

  nanomaterialplacedonmarketPage.assertPageTitle()
  nanomaterialplacedonmarketPage.submit()



  notifiednanomaterialPage.assertPageTitle()
  notifiednanomaterialPage.choose("test nano")

  productcompletedPage.assertSuccessfulCreation()
  productcompletedPage.submit()

  multiitemmixedPage.assertPageTitle()
  multiitemmixedPage.choose("No")

  productcompletedPage.assertSuccessfulCreation()
  productcompletedPage.submit()

  itemnamePage.assertPageTitle()
  itemnamePage.enterItemName("glasses")
  itemnamePage.submit()

  selectnanomaterialPage.assertPageTitle()
  selectnanomaterialPage.choose("test nano")

  exposureconditionPage.assertPageTitle()
  exposureconditionPage.choose("Left on")

  exposureroutesPage.assertPageTitle()
  exposureroutesPage.choose("Dermal")

  numberofshadesPage.assertPageTitle()
  numberofshadesPage.choose("No")

  addphysicalformPage.assertPageTitle()
  addphysicalformPage.choose("Solid, or pressed powder")
  
  specialapplicatorPage.assertPageTitle()
  specialapplicatorPage.choose("A typical non-pressurised bottle, jar, sachet or other package")

  containscmrsPage.assertPageTitle()
  containscmrsPage.choose("No")

  productRootcategoryPage.assertPageTitle()
  productRootcategoryPage.choose("Hair and scalp products")

  productsubcategoryPage.assertPageTitle()
  productsubcategoryPage.choose("Hair colouring products")

  ProductSubSubCategoryPage.assertPageTitle()
  ProductSubSubCategoryPage.choose("Oxidative hair colour products")

  formulationtypePage.assertPageTitle()
  formulationtypePage.choose('Enter ingredients and their exact concentration manually')

  ingredientexactconcentrationPage.assertPageTitle()
  ingredientexactconcentrationPage.enterIngredientDetails("i", " 18")

  productcompletedPage.assertSuccessfulCreation()
  productcompletedPage.submit()

  itemnamePage.assertPageTitle()
  itemnamePage.enterItemName("eyes")
  itemnamePage.submit()

  selectnanomaterialPage.assertPageTitle()
  selectnanomaterialPage.choose("test nano")

  exposureconditionPage.assertPageTitle()
  exposureconditionPage.choose("Left on")

  exposureroutesPage.assertPageTitle()
  exposureroutesPage.choose("Dermal")

  numberofshadesPage.assertPageTitle()
  numberofshadesPage.choose("No")

  addphysicalformPage.assertPageTitle()
  addphysicalformPage.choose("Solid, or pressed powder")
  
  specialapplicatorPage.assertPageTitle()
  specialapplicatorPage.choose("A typical non-pressurised bottle, jar, sachet or other package")

  containscmrsPage.assertPageTitle()
  containscmrsPage.choose("No")

  productRootcategoryPage.assertPageTitle()
  productRootcategoryPage.choose("Hair and scalp products")

  productsubcategoryPage.assertPageTitle()
  productsubcategoryPage.choose("Hair colouring products")

  ProductSubSubCategoryPage.assertPageTitle()
  ProductSubSubCategoryPage.choose("Oxidative hair colour products")

  formulationtypePage.assertPageTitle()
  formulationtypePage.choose('Enter ingredients and their exact concentration manually')
  
  ingredientexactconcentrationPage.assertPageTitle()
  ingredientexactconcentrationPage.enterIngredientDetails("i", " 18")

  productcompletedPage.assertSuccessfulCreation()
  productcompletedPage.submit()

  acceptandsubmitPage.assertPageTitle()
  acceptandsubmitPage.submit()

  declarationPage.assertPageTitle()
  declarationPage.submit()
});

When("the user clicks on nanomaterial section then adds a nanomaterial", function () {
  
  responsiblepersonPage.selectNanomaterials()
  nanomaterialPage.assertPageTitle()
  nanomaterialPage.selectAddNanomaterial()
  nanomaterialnamePage.assertPageTitle()
  nanomaterialnamePage.enterName(`test ${generateRandomNumber(2)}`)
}); 
Then("the user states that the EU has been notified", function () {
  notifiedtoeuPage.assertPageTitle()
  notifiedtoeuPage.choose("Yes")
});

When("the user uploads details about nanomaterial", function () {
  nanomaterialuploadPage.assertPageTitle()
  nanomaterialuploadPage.chooseFile("Test-PDF.pdf")
});

Then("the user checks answers and sends", function () {
  notifyreviewPage.assertPageTitle()
  notifyreviewPage.submit()
})

When("the user reaches Add a cosmetic product, there should be only one go to question", function () {
  cosmeticProductsPage.assertPageTitle()
  cosmeticProductsPage.selectCreateNewProduct()
  taskListPage.assertPageTitle()
  taskListPage.numberOfQuestionsOne()
  taskListPage.selectCreateProduct()
})

When("the user creates a new product notification", function () {
  productNamePage.assertPageTitle()
  productNamePage.enterProductName(`AutoMation Test ${generateRandomNumber(2)}`)
  productNamePage.submit()

  internalReferencePage.assertPageTitle()
  internalReferencePage.choose('No')
  internalReferencePage.submit()

  childrenUnderThreePage.assertPageTitle()
  childrenUnderThreePage.choose("No")

  containsNanomaterialsPage.assertPageTitle()
  containsNanomaterialsPage.chooseMulti("2")

  singleorMulticomponentPage.assertPageTitle()
  singleorMulticomponentPage.choose("No")

  addproductimagePage.assertPageTitle()
  addproductimagePage.chooseFile()
  
  productcompletedPage.assertSuccessfulCreation()
  productcompletedPage.gotoTaskListPage()
})

Then("check if subheading says incomplete and confirmation of outstanding sections", function () {
  taskListPage.isIncomplete()
  taskListPage.sectionsCompleted()
})



When("user reaches tasklist page, there should be many go to questions", function () {
  taskListPage.numberOfQuestionsMany()
})

Then ("user completes one nanomaterial section", function () {
  taskListPage.goQuestion(7)

  nanomaterialpurposePage.assertPageTitle()
  nanomaterialpurposePage.choose("Another purpose")
  
  nanomaterialnotifiedPage.assertPageTitle()
  nanomaterialnotifiedPage.choose("Yes")

  nanomaterialplacedonmarketPage.assertPageTitle()
  nanomaterialplacedonmarketPage.submit()

  notifiednanomaterialPage.assertPageTitle()
  notifiednanomaterialPage.choose("test nano")

  productcompletedPage.assertSuccessfulCreation()
  productcompletedPage.gotoTaskListPage()
})

When("user completes second nanomaterial section", function () {
  taskListPage.goQuestion(11)
  nanomaterialpurposePage.assertPageTitle()
  nanomaterialpurposePage.choose("Another purpose")
  
  nanomaterialnotifiedPage.assertPageTitle()
  nanomaterialnotifiedPage.choose("Yes")

  nanomaterialplacedonmarketPage.assertPageTitle()
  nanomaterialplacedonmarketPage.submit()

  notifiednanomaterialPage.assertPageTitle()
  notifiednanomaterialPage.choose("Crystals")

  productcompletedPage.assertSuccessfulCreation()
  productcompletedPage.gotoTaskListPage()
})

Then("user fills in the product details", function () {
  taskListPage.goQuestion(15)
  selectnanomaterialPage.assertPageTitle()
  selectnanomaterialPage.chooseMulti(["test nano", "Crystals"])
  
  exposureconditionPage.assertPageTitle()
  exposureconditionPage.choose("Left on")

  exposureroutesPage.assertPageTitle()
  exposureroutesPage.choose("Dermal")

  numberofshadesPage.assertPageTitle()
  numberofshadesPage.choose("No")

  addphysicalformPage.assertPageTitle()
  addphysicalformPage.choose("Solid, or pressed powder")
  
  specialapplicatorPage.assertPageTitle()
  specialapplicatorPage.choose("A typical non-pressurised bottle, jar, sachet or other package")

  containscmrsPage.assertPageTitle()
  containscmrsPage.choose("No")

  productRootcategoryPage.assertPageTitle()
  productRootcategoryPage.choose("Hair and scalp products")

  productsubcategoryPage.assertPageTitle()
  productsubcategoryPage.choose("Hair colouring products")

  ProductSubSubCategoryPage.assertPageTitle()
  ProductSubSubCategoryPage.choose("Oxidative hair colour products")

  formulationtypePage.assertPageTitle()
  formulationtypePage.choose('Enter ingredients and their exact concentration manually')

  ingredientexactconcentrationPage.assertPageTitle()
  ingredientexactconcentrationPage.enterIngredientDetails("i", " 18")

  productcompletedPage.assertSuccessfulCreation()
  productcompletedPage.gotoTaskListPage()


})

When("the user checks Accept and submit status", function () {
  cy.get("ol").within(() => {
    cy.get("li").eq(4)
  }).contains("in progress")
  taskListPage.goToSummary()
  acceptandsubmitPage.edit(2)
})

When("the user creates a product with 2 nano and multi", function () {
  cosmeticProductsPage.assertPageTitle()
  cosmeticProductsPage.selectCreateNewProduct()

  taskListPage.assertPageTitle()
  taskListPage.selectCreateProduct()

  productNamePage.assertPageTitle()
  productNamePage.enterProductName(`AutoMation Test ${generateRandomNumber(2)}`)
  productNamePage.submit()

  internalReferencePage.assertPageTitle()
  internalReferencePage.choose('No')
  internalReferencePage.submit()

  childrenUnderThreePage.assertPageTitle()
  childrenUnderThreePage.choose(this.product.nanomaterialnomultiitemcmr.forchildrenunderthree)

  containsNanomaterialsPage.assertPageTitle()
  containsNanomaterialsPage.chooseMulti("2")

  singleorMulticomponentPage.assertPageTitle()
  singleorMulticomponentPage.choose("Yes")

  addproductimagePage.assertPageTitle()
  addproductimagePage.chooseFile()
  
  productcompletedPage.assertSuccessfulCreation()
  productcompletedPage.submit()
})

Then("the user completes one nanomaterial and goes back to taskList page", function (this: any) {
  nanomaterialpurposePage.assertPageTitle()
  nanomaterialpurposePage.choose("Another purpose")
  
  nanomaterialnotifiedPage.assertPageTitle()
  nanomaterialnotifiedPage.choose("Yes")

  nanomaterialplacedonmarketPage.assertPageTitle()
  nanomaterialplacedonmarketPage.submit()



  notifiednanomaterialPage.assertPageTitle()
  notifiednanomaterialPage.choose("test nano")

  productcompletedPage.assertSuccessfulCreation()
  productcompletedPage.gotoTaskListPage()
})

When("the user checks the status of the questions hes completed and takes a break", function (this: any) {
  taskListPage.twoNano1Multicheck();
})

Then("user goes back to taskList page and completes second nanomaterial", function (this: any) {
  taskListPage.goQuestion(11)
  nanomaterialpurposePage.assertPageTitle()
  nanomaterialpurposePage.choose("Another purpose")
  
  nanomaterialnotifiedPage.assertPageTitle()
  nanomaterialnotifiedPage.choose("Yes")

  nanomaterialplacedonmarketPage.assertPageTitle()
  nanomaterialplacedonmarketPage.submit()



  notifiednanomaterialPage.assertPageTitle()
  notifiednanomaterialPage.choose("Crystals")

  productcompletedPage.assertSuccessfulCreation()
  productcompletedPage.gotoTaskListPage()
})

When("the user completes the first stage of creating a new product notification with nanomaterials, no multi-items and with CMR substances", function (this: any) {

  journeytype = "nanomaterialnomultiitemcmr"

  /**responsiblepersonPage.assertPageTitle()
  responsiblepersonPage.assertUser(Cypress.env('RP'))
  responsiblepersonPage.selectCosmeticProducts()**/

  cosmeticProductsPage.assertPageTitle()
  cosmeticProductsPage.selectCreateNewProduct()

  taskListPage.assertPageTitle()
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

 /**responsiblepersonPage.assertPageTitle()
  responsiblepersonPage.assertUser(Cypress.env('RP'))
  Gilead here, had to disable this because after login responsible person already setup for me
  **/
  responsiblepersonPage.selectCosmeticProducts()

  cosmeticProductsPage.assertPageTitle()
  cosmeticProductsPage.selectCreateNewProduct()

  taskListPage.assertPageTitle()
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

Then("the nanomaterials section is completed successfully", function () {
  nanomaterialcompletionPage.assertPageTitle()
  nanomaterialcompletionPage.submit()
});

When("the user enters the multi-item information", function () {
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

Then("the items section is completed successfully", function (this: any) {
  tasklistPage.assertItemCompleted(this.product.nanonmaterialmultiitemnocmr.itemname2)

});