

//! Cypress Page Object Model (POM) for extending from a common page with shared elements and used fixture data.js file together
// Importing the Common class from common.page.js
import { Common } from "../commonPages"

// Defining the Register class that extends the Common class
class Register extends Common {
    
  // Defining getters for registration fields
  get inputFirstName() { return cy.get('[name="firstName"]'); }
  get inputLastName() { return cy.get('[name="lastName"]'); }
  get inputEmail() { return cy.get('[name="email"]'); }
  get inputPassword() { return cy.get('[name="password"]'); }
  get btnSubmit() { return cy.get('button[type="submit"]'); }
  get inputUsername() { return cy.get('[name="username"]'); }
  get inputEmailAdress() { return cy.get('[name="email"]'); }

  // Method to register a new account
  registerAccount(firstName, lastName, email, password) {
    if (firstName) { this.inputFirstName.type(firstName); }
    if (lastName) { this.inputLastName.type(lastName); }
    if (email) { this.inputEmail.type(email); }
    if (password) { this.inputPassword.type(password); }
    this.btnSubmit.click();
  }
  registerExistingAccount(){
    cy.fixture('data.json').then((data) => {
        this.inputFirstName.type(data.firstName);
        this.inputLastName.type(data.lastName);
        this.inputEmail.type(data.email);
        this.inputPassword.type(data.password);
        this.btnSubmit.click();
      });

  }
  // Method for registering an existing account (no functionality defined here)
   //! In this method fixtures data.json file ni dotor bgaa data-g asiglaj bna 
}

// Exporting the Register class
export default new Register();