import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import LoginPage from "../../pom/login.page"
import CheckCodePage from "../../pom/checkcode.page"
import SelectResponsiblePersonPage from "../../pom/selectresponsibleperson.page"

  Given("the user visits the SCPN login page", function() {
  LoginPage.goto()
  LoginPage.assertPageTitle()
  });

  When("the user logs into SCPN", function () {
    LoginPage.loginAsOpss()
    LoginPage.submit()
  });

  Then("the user successfully sees the check code page", function () {
    CheckCodePage.assertPageTitle()
    CheckCodePage.fillOtpcode()
    CheckCodePage.submit()
  });

  When("the user selects the responsible person", function () {
    SelectResponsiblePersonPage.assertPageTitle()
    SelectResponsiblePersonPage.selectRP()
    SelectResponsiblePersonPage.submit()
  });

  When("the user completes the first stage of a new product notification with the following details:", function (dataTable) {

    return "pending";

  });