import 'cypress-file-upload';
import { basicAuthCreds } from '../support/common-helpers'
import * as cypress from "cypress";


Cypress.Commands.add('sendOpsGenieAlert', (title: string, message: string) => {
  // Define your OpsGenie integration details
  const apiKey = 'ef3e0cb8-c84e-4609-ae85-629401db05e1';
  const apiUrl = 'https://api.opsgenie.com/v2/alerts';

  // Define the payload for the OpsGenie alert
  const alertPayload = {
    "message": `${title} Failed`,
    "alias": message
  };

  // Send the alert to OpsGenie using a Cypress request
  cy.request({
    method: 'POST',
    url: apiUrl,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `GenieKey ${apiKey}`,
    },
    body: JSON.stringify(alertPayload),
  }).as('apiResponse');
  cy.get('@apiResponse').its('status').should('eq', 202);

});

Cypress.Commands.add('visitUrl', (urlPath: string, options = {}) => {
  cy.visit(urlPath, { ...basicAuthCreds(), ...options })
});

Cypress.Commands.add('hasKeyValueDetail', (key,listValue , value) => {
  //cy.get('.govuk-summary-list__row').contains(key).next().contains(value)
  let id = '#' + key.toLowerCase().replaceAll((/\s/g), "-")
  cy.get(id).within(function(){
    cy.get(`.govuk-summary-list__row:contains(${listValue})`).find(`.govuk-summary-list__value:contains("${value}")`)
  });
  //cy.get("h3").contains(key).siblings(".govuk-summary-list").get(`.govuk-summary-list__row:contains(${listValue})`).find(`.govuk-summary-list__value:contains("${value}")`)
});
Cypress.Commands.add('hasKeyValueDetails', (key , value) => {
  console.log("making regexp");
  let test = new RegExp('^' + key, 'i')
  cy.get("dt").contains(key).next().contains(value)
});
