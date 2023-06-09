class LoginPage {
    goto() {
      cy.visit("/sign-in")
    }
  
    assertPageTitle() {
      cy.get("h1").should("contain", "Sign in")
    }

    loginAsOpss() {
        cy.visit("/sign-in")
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