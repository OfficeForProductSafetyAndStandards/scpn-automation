/// <reference types="cypress" />
import 'cypress-file-upload';


// Define the custom command
Cypress.Commands.add('sendOpsGenieAlert', (message: string) => {
  // Define your OpsGenie integration details
  const apiKey = 'ef3e0cb8-c84e-4609-ae85-629401db05e1';
  const apiUrl = 'https://api.opsgenie.com/v2/alerts';

  // Define the payload for the OpsGenie alert

  const alertPayload = {
    "message": "E2E test failed!",
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