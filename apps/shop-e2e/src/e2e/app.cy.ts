import { getGreeting } from '../support/app.po';

describe('shop', () => {
  beforeEach(() => cy.visit('/'));

  /*it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome shop');
  });*/
  it('should display welcome message', () => {
    cy.get('input').first().focus().type('door');
    cy.get('li').first().should('have.text', 'Door');
    cy.get('body').screenshot();
  });
});
