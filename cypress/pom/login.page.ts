class LoginPage {


  loginBasicAuth(url: string) {
    cy.visitUrl(`${url}/sign-in`)
  }

  assertPageTitle() {
    cy.get("h1").should("contain", "Sign in")
  }

  loginAsOpss() {
    cy.url().then((url) => {
      if (url.includes('submit')) {
        this.fillEmail(Cypress.env('SUBMIT_USER_EMAIL'))
        this.fillPassword(Cypress.env('SUBMIT_USER_PASSWORD'))
      } else if (url.includes('search')) {
        this.fillEmail(Cypress.env('SEARCH_USER_EMAIL'))
        this.fillPassword(Cypress.env('SEARCH_USER_PASSWORD'))
      } else if (url.includes('support')) {
        this.fillEmail(Cypress.env('SUPPORT_USER_EMAIL'))
        this.fillPassword(Cypress.env('SUPPORT_USER_PASSWORD'))
      }
    });
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