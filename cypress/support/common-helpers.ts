export const basicAuthCreds = () => {
    return {
      auth: {
        username: Cypress.env('BASIC_AUTH_USERNAME'),
        password: Cypress.env('BASIC_AUTH_PASSWORD')
      }
    }
  }
export const submitButton = () => {
    cy.get("button[class='govuk-button']").last().click()
}

export const  verifyPageTitle = (name: string) => {
    cy.get("h1").should("contain", name)
}

export const select = (answer: string) =>{
    cy.get(".govuk-label").contains(answer).click()
}

export const checkLink = (Href: string, Link: string) =>{
    cy.get(`a:contains(${Href})`).invoke('attr', 'href').then((href) =>
        expect(href).eq(`${Link}`));
}

export const gotoTaskList = () => {
    cy.get('a').contains('Go to the task list page').click()
}