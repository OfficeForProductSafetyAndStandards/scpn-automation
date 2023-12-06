class FooterPage {
    assertHrefs(accountType: string) {
        if(accountType == "Submit" || accountType == "Search") {
            cy.get("footer").within(function () {
                cy.get("a:contains(Find a frame formulation)").invoke('attr', 'href').then((href) =>
                    expect(href).eq('/frame_formulations'));
                cy.get("a:contains(How to notify nanomaterials)").invoke('attr', 'href').then((href) =>
                    expect(href).eq('/guidance/how-to-notify-nanomaterials'));
                cy.get("a:contains(How to prepare images for notification)").invoke('attr', 'href').then((href) =>
                    expect(href).eq('/guidance/how-to-prepare-images-for-notification'));
                cy.get("a:contains(Set up your authenticator app)").invoke('attr', 'href').then((href) =>
                    expect(href).eq('/guidance/how-to-set-up-authenticator-app'));
                cy.get("a:contains(opss.enquiries@beis.gov.uk)").invoke('attr', 'href').then((href) =>
                    expect(href).eq('mailto:OPSS.enquiries@beis.gov.uk'));
                if (accountType == "Submit") {
                    cy.get("a:contains(Accessibility Statement)").invoke('attr', 'href').then((href) =>
                        expect(href).eq('/help/accessibility-statement'));
                }
                cy.get("a:contains(Privacy policy)").invoke('attr', 'href').then((href) =>
                    expect(href).eq('/help/privacy-notice'));
                cy.get("a:contains(Terms and conditions)").invoke('attr', 'href').then((href) =>
                    expect(href).eq('/help/terms-and-conditions'));
                cy.get("a:contains(Cookies)").invoke('attr', 'href').then((href) =>
                    expect(href).eq('/help/cookies'));
            })
        }
        if (accountType == "OSU") {
            let loggedIn = false
            cy.get('header').within(function () {
                cy.get("button").then($word => {
                    if ($word.text() == "MenuSign out") {
                        loggedIn = true
                    }
                })

            }).then(function (){
                if (loggedIn) {
                    cy.get("footer").within(function () {
                        cy.get("a:contains(Go to Cosmetic products search)").invoke('attr', 'href').then((href) =>
                            expect(href).eq('https://staging-search.cosmetic-product-notifications.service.gov.uk/support/sign-in'));
                        cy.get("a:contains(Privacy policy)").invoke('attr', 'href').then((href) =>
                            expect(href).eq('/help/privacy-notice'));
                        cy.get("a:contains(Terms and conditions)").invoke('attr', 'href').then((href) =>
                            expect(href).eq('/help/terms-and-conditions'));
                        cy.get("a:contains(Cookies)").invoke('attr', 'href').then((href) =>
                            expect(href).eq('/help/cookies'));
                    })
                } else {
                    cy.get("footer").within(function () {
                        cy.get("a:contains(Find a frame formulation)").invoke('attr', 'href').then((href) =>
                            expect(href).eq('/frame_formulations'));
                        cy.get("a:contains(How to notify nanomaterials)").invoke('attr', 'href').then((href) =>
                            expect(href).eq('/guidance/how-to-notify-nanomaterials'));
                        cy.get("a:contains(How to prepare images for notification)").invoke('attr', 'href').then((href) =>
                            expect(href).eq('/guidance/how-to-prepare-images-for-notification'));
                        cy.get("a:contains(Set up your authenticator app)").invoke('attr', 'href').then((href) =>
                            expect(href).eq('/guidance/how-to-set-up-authenticator-app'));
                        cy.get("a:contains(opss.enquiries@beis.gov.uk)").invoke('attr', 'href').then((href) =>
                            expect(href).eq('mailto:OPSS.enquiries@beis.gov.uk'));

                        cy.get("a:contains(Accessibility Statement)").invoke('attr', 'href').then((href) =>
                            expect(href).eq('/help/accessibility-statement'));

                        cy.get("a:contains(Privacy policy)").invoke('attr', 'href').then((href) =>
                            expect(href).eq('/help/privacy-notice'));
                        cy.get("a:contains(Terms and conditions)").invoke('attr', 'href').then((href) =>
                            expect(href).eq('/help/terms-and-conditions'));
                        cy.get("a:contains(Cookies)").invoke('attr', 'href').then((href) =>
                            expect(href).eq('/help/cookies'));
                    })
                }
            })

        }
    }
}

export default new FooterPage();