/// <reference types="cypress" />

describe('Sample Spec', () => {
    it('Passes', () => {
        cy.visit('/');

        cy.get('h1').contains('React');
    });
});
