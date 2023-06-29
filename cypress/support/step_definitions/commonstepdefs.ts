import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";

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

  beforeEach(function () {
    cy.fixture('users.json').then((user) => {
      this.user = user
    })
    cy.fixture('product.json').then((product) => {
      const randomNumber = Math.floor(Math.random() * 1000)
      product.nonanonomultiitem.productname = `TestProduct ${randomNumber}`
      cy.writeFile('cypress/fixtures/product.json', product);
      this.product = product
    })
  })

  When("the user uploads an ingredients csv with fixed ranges", function () {
    formulationtypePage.assertPageTitle()
    formulationtypePage.choose('Provide ingredients and their exact concentration using a CSV file')
    formulationtypePage.submit()
    uploadingredientsfilePage.assertPageTitle()
    uploadingredientsfilePage.chooseFile()
    uploadingredientsfilePage.submit()
    uploadingredientsfilePage.submit()
    selectphoptionPage.assertPageTitle()
    selectphoptionPage.choose('The minimum pH is 3 or higher, and the maximum pH is 10 or lower')
    selectphoptionPage.submit()
  });

  When("the user creates the product details with no CMR substances", function () {
    taskListPage.selectProductDetails()
    numberofshadesPage.assertPageTitle()
    numberofshadesPage.choose('No')
    numberofshadesPage.submit()
    addphysicalformPage.assertPageTitle()
    addphysicalformPage.choose(this.product.nonanonomultiitem.physicalform)
    addphysicalformPage.submit()
    specialapplicatorPage.assertPageTitle()
    specialapplicatorPage.choose('pressurised container')
    specialapplicatorPage.submit()
    specialapplicatortypePage.assertPageTitle()
    specialapplicatortypePage.choose(this.product.nonanonomultiitem.applicatortype)
    specialapplicatortypePage.submit()
    containscmrsPage.assertPageTitle()
    containscmrsPage.choose(this.product.nonanonomultiitem.containscmrsubstances)
    containscmrsPage.submit()
    productRootcategoryPage.assertPageTitle()
    productRootcategoryPage.choose(this.product.nonanonomultiitem.categoryofproduct)
    productRootcategoryPage.submit()
    productsubcategoryPage.assertPageTitle()
    productsubcategoryPage.choose(this.product.nonanonomultiitem.categoryofskinproduct)
    productsubcategoryPage.submit()
    ProductSubSubCategoryPage.assertPageTitle()
    ProductSubSubCategoryPage.choose(this.product.nonanonomultiitem.categoryofskincareproduct)
    ProductSubSubCategoryPage.submit()
    
  });

  When("the user accepts and submits the product notification", function () {
    taskListPage.selectAcceptandSubmit()
    acceptandsubmitPage.assertPageTitle()
    acceptandsubmitPage.assertProductApplicationCompleted(this.product.nonanonomultiitem.productname)
  });

  Then("the product details section is completed successfully", function () {
    productcompletedPage.assertSuccessfulCreation()
    productcompletedPage.gotoTaskListPage()
  });

  Then("the product notification is successfully created", function () {
    

  });

  Then("the details of the cosmetic product are successfully added to SCPN", function () {
    productcompletedPage.assertSuccessfulCreation()
    productcompletedPage.gotoTaskListPage()
    taskListPage.assertProductApplicationCompleted(this.product.nonanonomultiitem.productname)
  });

  Given("the user visits the SCPN login page", function() {
    loginPage.goto()
    loginPage.assertPageTitle()
  });

  When("the user logs into SCPN", function () {
    loginPage.loginAsOpss()
    loginPage.submit()
  });

  Then("the user successfully authenticates using their check code", function () {
    checkCodePage.assertPageTitle()
    checkCodePage.fillOtpcode(this.user.opss.code)
    checkCodePage.submit()
  });

  When("the user selects the responsible person", function () {
    selectResponsiblePersonPage.assertPageTitle()
    selectResponsiblePersonPage.selectRP(this.user.opss.rp)
    selectResponsiblePersonPage.submit()
  });

  When("the user completes the first stage of creating a new product notification with the following details:", function (dataTable: DataTable) {
    dataTable.hashes().forEach((element) => {
    responsiblePersonPage.assertPageTitle()
    responsiblePersonPage.assertUser(this.user.opss.rp)
    responsiblePersonPage.selectCosmeticProducts()

    cosmeticProductsPage.assertPageTitle()
    cosmeticProductsPage.selectCreateNewProduct()

    taskListPage.assertPageTitle()
    taskListPage.selectCreateProduct()

    productNamePage.assertPageTitle()
    productNamePage.enterProductName(this.product.nonanonomultiitem.productname)
    productNamePage.submit()

    internalReferencePage.assertPageTitle()
    internalReferencePage.choose('No')
    internalReferencePage.submit()

    childrenUnderThreePage.assertPageTitle()
    childrenUnderThreePage.choose(this.product.nonanonomultiitem.forchildrenunderthree)
    childrenUnderThreePage.submit()

    containsNanomaterialsPage.assertPageTitle()
    containsNanomaterialsPage.choose('No')
    containsNanomaterialsPage.submit()

    singleorMulticomponentPage.assertPageTitle()
    singleorMulticomponentPage.choose('No')
    singleorMulticomponentPage.submit()

    addproductimagePage.assertPageTitle()
    addproductimagePage.chooseFile()
    addproductimagePage.submit()
  });

});