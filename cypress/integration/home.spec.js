describe('Home page', () => {
  it ('successfully loads home page', () => {
    cy.visit('/');

    // Check website title
    cy.get('.navbar-brand').should('have.text', 'OpenWorker');
  });

  it ('logs in and out', () => {
    cy.visit('/');

    // Go to login page
    cy.get('#accountDropdown').click()
      .get('[routerlink="/auth/login"]').click()
      .url().should('include', '/auth/login')

      // Login as matt
      .get('#login').type('matt')
      .get('#password').type('matt')
      .get('#btnSearch').click()

      // Check username in nav bar
      .get('#accountDropdown2')
      .should('include.text', 'matt')
      .click()

      // Disconnect
      .get('#accountDropdownMenu2 > :nth-child(2)').click()

      // Check there's no username in nav bar
      .get('#accountDropdown')
      .should('not.have.text', 'matt');
  });

  it ('fails to log with bad credentials', () => {
    cy.visit('/');

    // Log as moutt
    cy.get('#accountDropdown').click()
      .get('[routerlink="/auth/login"]').click()
      .url().should('include', '/auth/login')
      .get('#login').type('moutt')
      .get('#password').type('mitt')
      .get('#btnSearch').click()

      // Check error message
      .get('#msg').should('contain.text', "Il n'y a pas d'utilisateur avec l'identifiant moutt.")
  });
});
