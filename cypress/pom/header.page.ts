class HeaderPage {
    assertHeaderLoggedIn() {
        cy.get('header').within(function () {
            cy.get("a:contains(GOV.UK)").invoke('attr', 'href').then((href) => expect(href).eq('/'))
            cy.get("a:contains(Submit cosmetic product notifications)").invoke('attr', 'href').then((href) => expect(href).eq('/responsible_persons/products-redirect'))
            cy.get("a:contains(Your account)").invoke('attr', 'href').then((href) => expect(href).eq('/my_account'))
            cy.get("button").contains("Sign out")
        })
    }

    assertHeaderLoggedOut() {
        cy.get('header').contains('GOV.UK')
        cy.get('header').within(function () {

            cy.get("a:contains(Submit cosmetic product notifications)").invoke('attr', 'href').then((href) => expect(href).eq('#'))
            cy.get("a:contains(Sign in)").invoke('attr', 'href').then((href) => expect(href).eq('/sign-in'))
        })
    }

    signOut() {
        cy.get('header').within(function () {
            cy.get("button").contains("Sign out").click()
        })
    }
}

export default new HeaderPage();