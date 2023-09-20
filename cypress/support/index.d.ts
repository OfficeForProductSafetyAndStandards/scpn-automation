declare namespace Cypress {
  interface Chainable {
    sendOpsGenieAlert(title: string,message: string): Chainable<any>;
  }
}