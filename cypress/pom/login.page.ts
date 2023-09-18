class LoginPage {

  loginBasicAuth() {
    // cy.fixture("users.json")
      // .as("users")
      // .then((users) => {
        const endpointUrl = 'staging-submit.cosmetic-product-notifications.service.gov.uk';
        const authCredentials = `${Cypress.env('BASIC_AUTH_USERNAME')}:${Cypress.env('BASIC_AUTH_PASSWORD')}@`;
        const protectedUrl = `https://${authCredentials}${endpointUrl}/sign-in`;
        cy.visit(protectedUrl);
      // })
  }

  assertPageTitle() {
    cy.get("h1").should("contain", "Sign in")
  }

  loginAsOpss() {
    // cy.fixture("users.json")
      // .as("users")
      // .then((users) => {
        this.fillEmail(Cypress.env('USER_EMAIL'))
        this.fillPassword(Cypress.env('USER_PASSWORD'))
      // })
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