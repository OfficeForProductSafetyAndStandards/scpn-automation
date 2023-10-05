export const basicAuthCreds = () => {
    return {
      auth: {
        username: Cypress.env('BASIC_AUTH_USERNAME'),
        password: Cypress.env('BASIC_AUTH_PASSWORD')
      }
    }
  }