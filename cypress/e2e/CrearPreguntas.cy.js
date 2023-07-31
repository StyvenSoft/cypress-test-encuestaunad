describe('Crear Preguntas', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  it('Ingresar a crear nuevas preguntas a una encuesta', () => {
    cy.visit('https://fraguesia.com/gcs/encuestaunad/admin.php');
    cy.get('#nick').type('yovajefe'); // Ingresar nombre de usuario correcto
    cy.get('#clave').type('77030926'); // Ingresar contraseña correcta
    cy.get('input[type="submit"]').click();
    cy.url().should('include', '/contenido.php');
    cy.contains('Encuestas').click(); // Seleccionar el enlace por el texto "Encuestas"
    cy.url().should('include', '/encuesta.php');
    cy.get('input[type="radio"][value="1"]').check({ force: true });
    cy.contains('a', 'Crear Preguntas').click();
    cy.url().should('include', '/preguntas.php');
    cy.get('#pregunta').type('¿Primera pregunta de prueba cypress?');
    cy.get('select#tipo_pregunta').select('2');
    cy.get('#stop').clear().type('4');
    cy.get('#termina').clear().type('5');
    cy.get('#add').click(); // se crea una respuesta vacia
    cy.get('button[onclick="AgregarPregunta()"]').click();
  })
})