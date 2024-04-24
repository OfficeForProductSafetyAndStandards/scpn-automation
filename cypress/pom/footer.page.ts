import { checkLink } from "../support/common-helpers";

class FooterPage {
    assertHrefs(accountType: string) {
        if (accountType == "Submit" || accountType == "Search") {
            cy.get("footer").within(function () {
                checkLink("Find a frame formulation", "/frame_formulations")
                checkLink("How to notify nanomaterials", "/guidance/how-to-notify-nanomaterials")
                checkLink("How to prepare images for notification", "/guidance/how-to-prepare-images-for-notification")
                checkLink("Set up your authenticator app", "/guidance/how-to-set-up-authenticator-app")
                checkLink("opss.enquiries@businessandtrade.gov.uk", "mailto:opss.enquiries@businessandtrade.gov.uk?subject=Help requested on Submit Cosmetic Product Notifications")
                if (accountType == "Submit") {
                    checkLink("Accessibility statement", "/help/accessibility-statement")
                }
                checkLink("Privacy policy", '/help/privacy-notice')
                checkLink("Terms and conditions", '/help/terms-and-conditions')
                checkLink("Cookies", '/help/cookies')
            })
        }
        if (accountType == "OSU") {
            let loggedIn = false
            cy.get('header').within(function () {
                cy.get(".govuk-header__content").then(($content) => {
                    if ($content.text().includes("Sign out")) {
                        loggedIn = true;
                    }
                });
            }).then(function () {
                if (loggedIn) {
                    cy.get("footer").within(function () {
                        checkLink("Go to Cosmetic products search", 'https://staging-search.cosmetic-product-notifications.service.gov.uk/support/sign-in')
                        checkLink("Privacy policy", '/help/privacy-notice')
                        checkLink("Terms and conditions", '/help/terms-and-conditions')
                        checkLink("Cookies", '/help/cookies')
                    })
                } else {
                    cy.get("footer").within(function () {
                        checkLink("Find a frame formulation", "/frame_formulations")
                        checkLink("How to notify nanomaterials", "/guidance/how-to-notify-nanomaterials")
                        checkLink("How to prepare images for notification", "/guidance/how-to-prepare-images-for-notification")
                        checkLink("Set up your authenticator app", "/guidance/how-to-set-up-authenticator-app")
                        checkLink("opss.enquiries@businessandtrade.gov.uk", "mailto:opss.enquiries@businessandtrade.gov.uk?subject=Help requested on Submit Cosmetic Product Notifications")
                        checkLink("Accessibility statement", "/help/accessibility-statement")
                        checkLink("Privacy policy", '/help/privacy-notice')
                        checkLink("Terms and conditions", '/help/terms-and-conditions')
                        checkLink("Cookies", '/help/cookies')
                    })
                }
            })

        }
    }
}

export default new FooterPage();