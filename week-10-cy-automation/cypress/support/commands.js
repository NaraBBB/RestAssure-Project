
Cypress.Commands.add('log_in', (email = "nipifof819@datingel.com", password = "DontTestMe") => { 
    cy.request("POST", "/api/users/login", {
      email: email,
      password: password ,
    }).then((response) => {
      window.localStorage.setItem("accessToken", response.body.accessToken);
    });
})
Cypress.Commands.add('errorHandler', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
});

import 'cypress-file-upload';
