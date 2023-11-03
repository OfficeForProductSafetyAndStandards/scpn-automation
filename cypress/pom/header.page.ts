class HeaderPage {
    assertHeader(){
        cy.get('header').contains('GOV.UK')
    }
    assertSignIn() {
        cy.get("header").contains("Sign in")
    }

    assertLogIn() {
        cy.get("header").contains("Sign out")
    }

    assertHrefs() {
        cy.get(".app-navigation__list").within(function () {
            cy.get("a:contains(Home)").invoke('attr', 'href').then((href) => expect(href).eq('/')
            )
        });
        cy.get(".app-navigation__list").within(function () {
            cy.get("a:contains(Cosmetic products)").invoke('attr', 'href').then((href) =>
                expect(href).eq('/responsible_persons/224/notifications'));
        });
        cy.get(".app-navigation__list").within(function () {
            cy.get("a:contains(Nanomaterials)").invoke('attr', 'href').then((href) =>
                expect(href).eq('/responsible_persons/224/nanomaterials'));
        });
        cy.get(".app-navigation__list").within(function () {
            cy.get("a:contains(Responsible Person)").invoke('attr', 'href').then((href) =>
                expect(href).eq('/responsible_persons/224'));
        });
        cy.get(".app-navigation__list").within(function () {
            cy.get("a:contains(Team members)").invoke('attr', 'href').then((href) =>
                expect(href).eq('/responsible_persons/224/team_members'));
        });
    }

}

export default new HeaderPage();