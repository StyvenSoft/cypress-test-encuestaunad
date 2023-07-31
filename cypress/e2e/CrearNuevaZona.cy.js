describe('Crear Nueva Zona', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  it('Ingresar a Crear Nueva Zona con caracteres especiales', () => {
    cy.visit('https://fraguesia.com/gcs/encuestaunad/admin.php');
    cy.get('#nick').type('yovajefe'); // Ingresar nombre de usuario correcto
    cy.get('#clave').type('77030926'); // Ingresar contraseña correcta
    cy.get('input[type="submit"]').click();
    cy.url().should('include', '/contenido.php');
    cy.contains('Zona') // Seleccionar el enlace por el texto "Zona"
      .click(); // Hacer clic en el enlace
    cy.contains('a', 'Nueva Zona').click();
    cy.url().should('include', '/zona.php#new');
    cy.get('#nombzona').type('%&$/<?=('); // Ingresan caracteres especiales
    cy.get('#guardar').click();
    
  })
})