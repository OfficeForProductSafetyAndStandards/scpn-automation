class FooterPage{
    assertFooter(){
        cy.get('footer').contains('Guidance')
    }

}
export default new FooterPage();