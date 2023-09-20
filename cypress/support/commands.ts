import 'cypress-file-upload';

// Define the custom command
Cypress.Commands.add('sendOpsGenieAlert', (title: string, message: string) => {
  // Define your OpsGenie integration details
  const apiKey = 'ef3e0cb8-c84e-4609-ae85-629401db05e1';
  const apiUrl = 'https://api.opsgenie.com/v2/alerts';
  // Get the current date
  const currentDate = new Date();

  // Extract the day, month, year, hour, and minute components
  const day = String(currentDate.getDate()).padStart(2, '0');
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Month is zero-based, so add 1
  const year = String(currentDate.getFullYear()).slice(-2); // Get the last two digits of the year
  const hours = String(currentDate.getHours()).padStart(2, '0');
  const minutes = String(currentDate.getMinutes()).padStart(2, '0');

  // Concatenate the date and time components in "ddmmyy hhmm" format
  const formattedDate = `${day}${month}${year} ${hours}${minutes}`;
  // Define the payload for the OpsGenie alert
  const alertPayload = {
    "message": `${title} ${formattedDate}`,
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