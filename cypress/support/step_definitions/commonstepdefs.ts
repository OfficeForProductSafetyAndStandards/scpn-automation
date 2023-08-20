import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import { generateRandomNumber } from '../utils';


import loginPage from "../../pom/login.page"
import checkCodePage from "../../pom/checkcode.page"
import selectResponsiblePersonPage from "../../pom/selectresponsibleperson.page"
import responsiblePersonPage from "../../pom/responsibleperson.page"
import cosmeticProductsPage from "../../pom/cosmeticproducts.page"
import taskListPage from "../../pom/tasklist.page"
import productNamePage from "../../pom/productname.page"
import internalReferencePage from "../../pom/internalreference.page"
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

let journeytype: string

beforeEach(function () {
  cy.fixture('users.json').then((user) => {
    this.user = user
  })
  cy.fixture('product.json').then((product) => {
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
})

When("the user uploads an ingredients csv with fixed ranges", function () {
  formulationtypePage.assertPageTitle()
  formulationtypePage.choose('Upload a CSV file for ingredients and their concentration range')
  uploadingredientsfilePage.assertPageTitle()
  uploadingredientsfilePage.chooseFile()
  uploadingredientsfilePage.submit()
  uploadingredientsfilePage.submit()
  selectphoptionPage.assertPageTitle()
  selectphoptionPage.choose('The minimum pH is 3 or higher, and the maximum pH is 10 or lower')
});

When("the user uploads an ingredients csv with exact ranges", function () {


});

When("the user creates the product notification details", function () {
  if (journeytype === "nonanonomultiitemnocmr") {
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
  }
  if (journeytype === "nanomaterialnomultiitemcmr") {
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
  }
});

When("the user accepts and submits the product notification", function () {
  if (journeytype === "nonanonomultiitemnocmr") {
    taskListPage.selectAcceptandSubmit()
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
  }
  if (journeytype === "nanonmaterialmultiitemnocmr") {
    taskListPage.selectAcceptandSubmit()
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
  }

});

Then("the product details section is completed successfully", function () {
  productcompletedPage.assertSuccessfulCreation()
  productcompletedPage.gotoTaskListPage()
});

Then("the product notification is successfully created", function () {
  if (journeytype === "nonanonomultiitemnocmr") {
    productPage.assertPageTitle(this.product.nonanonomultiitemnocmr.productname)
  }
  if (journeytype === "nanonmaterialmultiitemnocmr") {
    productPage.assertPageTitle(this.product.nanonmaterialmultiitemnocmr.productname)
  }
});

Then("the details of the cosmetic product are successfully added to SCPN", function () {
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

Given("the user visits the SCPN login page", function () {
  loginPage.goto()
  loginPage.assertPageTitle()
});

When("the user logs into SCPN", function () {
  loginPage.loginAsOpss()
  loginPage.submit()
});

Then("the user successfully authenticates using their verification code", function () {
  checkCodePage.assertPageTitle()
  checkCodePage.fillOtpcode(this.user.opss.code)
});

When("the user selects the responsible person", function () {
  selectResponsiblePersonPage.assertPageTitle()
  selectResponsiblePersonPage.selectRP(this.user.opss.rp)
  selectResponsiblePersonPage.submit()
});

When("the user completes the first stage of creating a new product notification with no nanomaterials, no multi-items and no CMR substances", function () {
  journeytype = "nonanonomultiitemnocmr"

  responsiblePersonPage.assertPageTitle()
  responsiblePersonPage.assertUser(this.user.opss.rp)
  responsiblePersonPage.selectCosmeticProducts()

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

When("the user completes the first stage of creating a new product notification with nanomaterials, no multi-items and with CMR substances", function () {

  journeytype = "nanomaterialnomultiitemcmr"

  responsiblePersonPage.assertPageTitle()
  responsiblePersonPage.assertUser(this.user.opss.rp)
  responsiblePersonPage.selectCosmeticProducts()

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

When("the user completes the first stage of creating a new product notification with nanomaterials, multi-items and no CMR substances", function () {

  journeytype = "nanonmaterialmultiitemnocmr"

  responsiblePersonPage.assertPageTitle()
  responsiblePersonPage.assertUser(this.user.opss.rp)
  responsiblePersonPage.selectCosmeticProducts()

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

When("the user enters the nanomaterial information", function () {
  taskListPage.selectNanomaterials()
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

When("the user enters the item information", function () {

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

Then("the items section is completed successfully", function () {
  tasklistPage.assertItemCompleted(this.product.nanonmaterialmultiitemnocmr.itemname2)

});