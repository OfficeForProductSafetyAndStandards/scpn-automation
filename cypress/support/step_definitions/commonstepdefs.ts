import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";

import loginPage from "../../pom/login.page"
import checkCodePage from "../../pom/checkcode.page"
import selectResponsiblePersonPage from "../../pom/selectresponsibleperson.page"
import responsiblePersonPage from "../../pom/responsibleperson.page"
import cosmeticProductsPage from "../../pom/cosmeticproducts.page"
import taskListPage from "../../pom/tasklist.page"
import productNamePage from "../../pom/productname.page"
import internalreferencePage from "../../pom/internalreference.page"
import childrenunderThreePage from "../../pom/childrenunderthree.page"
import containsnanomaterialsPage from "../../pom/containsnanomaterials.page"
import singleormulticomponentPage from "../../pom/singleormulticomponent.page"
import addproductimagePage from "../../pom/addproductimage.page"
import productcompletedPage from "../../pom/productcompleted.page";

Then("the details of the cosmetic product are successfully added to SCPN", function () {
  productcompletedPage.assertSuccessfulCreation()
  productcompletedPage.gotoTaskListPage()
  taskListPage.assertProductApplicationCompleted()
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
    checkCodePage.fillOtpcode()
    checkCodePage.submit()
  });

  When("the user selects the responsible person", function () {
    selectResponsiblePersonPage.assertPageTitle()
    selectResponsiblePersonPage.selectRP()
    selectResponsiblePersonPage.submit()
  });


  When("the user completes the first stage of creating a new product notification with the following details:", function (dataTable: DataTable) {
    dataTable.hashes().forEach((element) => {
    responsiblePersonPage.assertPageTitle()
    responsiblePersonPage.selectCosmeticProducts()

    cosmeticProductsPage.assertPageTitle()
    cosmeticProductsPage.selectCreateNewProduct()

    taskListPage.assertPageTitle()
    taskListPage.selectCreateProduct()

    productNamePage.assertPageTitle()
    productNamePage.enterProductName(element.name)
    productNamePage.submit()

    internalreferencePage.assertPageTitle()
    internalreferencePage.chooseReference()
    internalreferencePage.submit()

    childrenunderThreePage.assertPageTitle()
    childrenunderThreePage.chooseAge()
    childrenunderThreePage.submit()

    containsnanomaterialsPage.assertPageTitle()
    containsnanomaterialsPage.chooseNanomaterialsPresent()
    containsnanomaterialsPage.submit()

    singleormulticomponentPage.assertPageTitle()
    singleormulticomponentPage.chooseComponentPresent()
    singleormulticomponentPage.submit()

    addproductimagePage.assertPageTitle()
    addproductimagePage.chooseFile()
    addproductimagePage.submit()
  
  });

});