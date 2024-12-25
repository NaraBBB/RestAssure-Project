// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//// ! This is a login command --
Cypress.Commands.add('нэвтрэх', (email = "nipifof819@datingel.com", password = "DontTestMe") => { 
    cy.request("POST", "/api/users/login", {
      email: email,
      password: password ,
    }).then((response) => {
      window.localStorage.setItem("accessToken", response.body.accessToken);
    });
})

//! uur neg arga
// Cypress.Commands.add('нэвтрэх', (email = "waped44366@gianes.com", password = "DontTestMe") => { 
//   cy.request("POST", "/api/users/login", {
//     email: email,
//     password: password,
//   }).then((response) => {
//     expect(response.status).to.eq(201); // Verify response is successful
    // ! Set the token in localStorage via cy.window()
//     cy.window().then((window) => {
//       window.localStorage.setItem("accessToken", response.body.accessToken);
//     });
  //! Reload the application to reflect the login state
//     cy.visit("/", {
//       onBeforeLoad(win) {
//         win.localStorage.setItem("accessToken", response.body.accessToken);
//       }
//     });
//   });
// });
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
 //!This is error handle command
 Cypress.Commands.add('errorHandler', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })