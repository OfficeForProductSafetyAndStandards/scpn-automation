class LoginPage {

  loginBasicAuth() {
    cy.visitUrl('/sign-in')
  }

  assertPageTitle() {
    cy.get("h1").should("contain", "Sign in")
  }

  loginAsOpss() {
    this.fillEmail(Cypress.env('USER_EMAIL'))
    this.fillPassword(Cypress.env('USER_PASSWORD'))
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