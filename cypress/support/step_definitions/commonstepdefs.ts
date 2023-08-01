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
import declarationPage from "../../pom/declaration.page";
import acceptPage from "../../pom/accept.page";
import productPage from "../../pom/product.page";

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
    formulationtypePage.choose('Upload a CSV file for ingredients and their concentration range')
    uploadingredientsfilePage.assertPageTitle()
    uploadingredientsfilePage.chooseFile()
    uploadingredientsfilePage.submit()
    uploadingredientsfilePage.submit()
    selectphoptionPage.assertPageTitle()
    selectphoptionPage.choose('The minimum pH is 3 or higher, and the maximum pH is 10 or lower')
  });

  When("the user creates the product details with no CMR substances", function () {
    taskListPage.selectProductDetails()
    numberofshadesPage.assertPageTitle()
    numberofshadesPage.choose('No')
    addphysicalformPage.assertPageTitle()
    addphysicalformPage.choose(this.product.nonanonomultiitem.physicalform)
    specialapplicatorPage.assertPageTitle()
    specialapplicatorPage.choose('pressurised container')
    specialapplicatortypePage.assertPageTitle()
    specialapplicatortypePage.choose(this.product.nonanonomultiitem.applicatortype)
    containscmrsPage.assertPageTitle()
    containscmrsPage.choose(this.product.nonanonomultiitem.containscmrsubstances)
    productRootcategoryPage.assertPageTitle()
    productRootcategoryPage.choose(this.product.nonanonomultiitem.categoryofproduct)
    productsubcategoryPage.assertPageTitle()
    productsubcategoryPage.choose(this.product.nonanonomultiitem.productsubcategory)
    ProductSubSubCategoryPage.assertPageTitle()
    ProductSubSubCategoryPage.choose(this.product.nonanonomultiitem.productsubsubcategory)
    
  });

  When("the user accepts and submits the product notification", function () {
    taskListPage.selectAcceptandSubmit()
    acceptandsubmitPage.assertPageTitle()
    acceptandsubmitPage.assertProductInfo(this.product.nonanonomultiitem.productname,this.product.nonanonomultiitem.forchildrenunderthree,
      this.product.nonanonomultiitem.numnberofitems,this.product.nonanonomultiitem.shades,this.product.nonanonomultiitem.image,this.product.nonanonomultiitem.areitemsmixed)
    acceptandsubmitPage.assertProductDetails(this.product.nonanonomultiitem.categoryofproduct,this.product.nonanonomultiitem.productsubcategory,this.product.nonanonomultiitem.productsubsubcategory,this.product.nonanonomultiitem.containscmrsubstances,this.product.nonanonomultiitem.physicalform,this.product.nonanonomultiitem.applicatortype)
    acceptandsubmitPage.submit()
    declarationPage.assertPageTitle()
    declarationPage.submit()
    acceptPage.assertPageTitle()
    acceptPage.selectNotifiedProductsLink()
    cosmeticProductsPage.assertPageTitle()
    cosmeticProductsPage.selectLastCreatedProduct(this.product.nonanonomultiitem.productname)
  });

  Then("the product details section is completed successfully", function () {
    productcompletedPage.assertSuccessfulCreation()
    productcompletedPage.gotoTaskListPage()
  });

  Then("the product notification is successfully created", function () {
    productPage.assertPageTitle(this.product.nonanonomultiitem.productname)
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

  Then("the user successfully authenticates using their verification code", function () {
    checkCodePage.assertPageTitle()
    checkCodePage.fillOtpcode(this.user.opss.code)
  });

  When("the user selects the responsible person", function () {
    selectResponsiblePersonPage.assertPageTitle()
    selectResponsiblePersonPage.selectRP(this.user.opss.rp)
    selectResponsiblePersonPage.submit()
  });

  When("the user completes the first stage of creating a new product notification", function () {
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

    containsNanomaterialsPage.assertPageTitle()
    containsNanomaterialsPage.choose('No')

    singleorMulticomponentPage.assertPageTitle()
    singleorMulticomponentPage.choose('No')

    addproductimagePage.assertPageTitle()
    addproductimagePage.chooseFile()

});

When("the user completes the first stage of creating a new product notification with nanomaterials and multi-itmes", function () {
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

    containsNanomaterialsPage.assertPageTitle()
    containsNanomaterialsPage.choose('Yes')

    singleorMulticomponentPage.assertPageTitle()
    singleorMulticomponentPage.choose('Yes')

    addproductimagePage.assertPageTitle()
    addproductimagePage.chooseFile()
});