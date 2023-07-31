describe('template spec', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  it('Login con las credenciales incorrectas', () => {
    cy.visit('https://fraguesia.com/gcs/encuestaunad/admin.php');
    cy.get('#nick').type('user01'); // Ingresar nombre de usuario incorrecto
    cy.get('#clave').type('415151'); // Ingresar contraseña incorrecta
    cy.get('input[type="submit"]').click();
    cy.url().should('include', '?error=1');
  })
})