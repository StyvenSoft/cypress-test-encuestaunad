describe('Crear Nueva Encuesta', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  it('Ingresar a crear una nueva encuesta con fechas incorrectas', () => {
    cy.visit('https://fraguesia.com/gcs/encuestaunad/admin.php');
    cy.get('#nick').type('yovajefe'); // Ingresar nombre de usuario correcto
    cy.get('#clave').type('77030926'); // Ingresar contraseña correcta
    cy.get('input[type="submit"]').click();
    cy.url().should('include', '/contenido.php');
    cy.contains('Encuestas').click(); // Seleccionar el enlace por el texto "Zona"
    cy.url().should('include', '/encuesta.php');
    cy.contains('a', 'Nueva Encuesta').click();
    cy.get('#nombre').type('Encuesta creada con Cypress'); // Ingresar nombre encuesta
    cy.get('select#idzona').select('10');
    cy.get('input#fechaini').clear().type('2021-04-01'); // Fecha de inicio incorrecta
    cy.get('input#fechafin').clear().type('2020-04-01'); // Fecha final incorrecta
    cy.get('#guardar').click();

  })
})