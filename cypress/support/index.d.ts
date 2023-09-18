declare namespace Cypress {
  interface Chainable {
    sendOpsGenieAlert(message: string): Chainable<any>;
  }
}
