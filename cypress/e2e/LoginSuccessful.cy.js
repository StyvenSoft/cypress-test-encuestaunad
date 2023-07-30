describe('Login Test Successful', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
    });
  it('Login con las credenciales de usuario válido', () => {
    cy.visit('https://fraguesia.com/gcs/encuestaunad/admin.php');
    cy.get('#nick').type('yovajefe'); // Ingresar nombre de usuario correcto
    cy.get('#clave').type('77030926'); // Ingresar contraseña correcta
    cy.get('input[type="submit"]').click();
    cy.url().should('include', '/contenido.php');
    cy.get('div.panel-heading')
    .should('be.visible') // Verificar que el elemento sea visible en la página
    .should('have.text', 'Bienvenido'); // Verificar login
  })
})