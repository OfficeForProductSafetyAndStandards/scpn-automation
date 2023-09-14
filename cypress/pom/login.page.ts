class LoginPage {

  loginBasicAuth() {
    cy.fixture("users.json")
      .as("users")
      .then((users) => {
        const endpointUrl = 'staging-submit.cosmetic-product-notifications.service.gov.uk';
        const authCredentials = `${users.opss.auth_user}:${users.opss.auth_password}@`;
        const protectedUrl = `https://${authCredentials}${endpointUrl}/sign-in`;
        cy.visit(protectedUrl);
      })
  }

  assertPageTitle() {
    cy.get("h1").should("contain", "Sign in")
  }

  loginAsOpss() {
    cy.fixture("users.json")
      .as("users")
      .then((users) => {
        this.fillEmail(users.opss.email)
        this.fillPassword(users.opss.password)
      })
  }

  fillEmail(email: string) {
    cy.get("#email").type(email)
  }

  fillPassword(password: string) {
    cy.get("#password").type(password)
  }

  submit() {
    cy.get('button[class="govuk-button"]').last().click()
  }
}

export default new LoginPage;