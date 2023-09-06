describe('visit ALmusafer website to make an 3 assertion', () => {
    
    it('make sure that the default currency is SAR', () => {
        cy.visit("https://www.almosafer.com/ar")
        cy.get('.cta__saudi').click()
        cy.get('[data-testid="Header__CurrencySelector"]').should("contain.text","SAR")
    });

    it('make sure that the default langauge is Arabic ', () => {
        cy.visit("https://www.almosafer.com/ar")
        cy.get('.cta__saudi').click()
        cy.get('[data-testid="Header__LanguageSwitch"]').should("contain.text", "English")
    });

    it('make sure that the flight tab is clicked by default ', () => {
        cy.visit("https://www.almosafer.com/ar")
        cy.get('.cta__saudi').click()
        cy.get('#uncontrolled-tab-example-tab-flights').should("have.class", "active")
    });
});