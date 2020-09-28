describe('Catalogue page', () => {
  it ('should create a new proposal', () => {
    cy.visit('/');

    // Log as matt
    cy.get('#accountDropdown').click()
      .get('[routerlink="/auth/login"]').click()
      .url().should('include', '/auth/login')
      .get('#login').type('matt')
      .get('#password').type('matt')
      .get('#btnSearch').click()
      .get(':nth-child(3) > .nav-link').click()

      // Select category
      .get('.mat-select-placeholder').click()
      .get('#mat-option-3 > .mat-option-text').click()
      // Fill name
      .get('#mat-input-2').type('Coiffure à domicile')
      // Fill description
      .get('#mat-input-3').type('Je coiffe comme jaja')
      // Fill price
      .get('#mat-input-4').type('20')
      // Fill distance
      .get('#mat-input-5').type('15')
      // Submit
      .get('form.ng-touched > .mat-focus-indicator').click()

      // Check that we were redirected to activity page
      //.url().should('include', 'user/activity')

      /*
       /!\ If we run this test more than once, the previous line won't work because the proposal
       already exists. If you still want the test to pass without restarting the backend, you
       could comment the previous line and uncomment the next line.
       */

      .visit('/')

      // Check that the first card is the one we added
      .get(':nth-child(1) > article > .card')
      .should('include.text', 'Matthieu Ricart')
      .should('include.text', 'Je coiffe comme jaja')
      .should('include.text', '€20.00')
  });
});
