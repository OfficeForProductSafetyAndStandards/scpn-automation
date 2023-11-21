declare namespace Cypress {
  interface Chainable {
    sendOpsGenieAlert(title: string,message: string): Chainable<any>;
    visitUrl(url:string): Chainable<any>;

    hasKeyValueDetail(key: string, listValue: string, value: string): Chainable<any>;

    hasKeyValueDetails(key: string, value: string): Chainable<any>;
  }


}

