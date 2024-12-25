class RegistrationPage {
    get fName() {
      return cy.get('[name="firstName"]');
    }
    get lName() {
      return cy.get('[name="lastName"]');
    }
    get email() {
      return cy.get('[name="email"]');
    }
    get pword() {
      return cy.get('[name="password"]');
    }
    get registrationBtn() {
      return cy.get('[type="submit"]');
    }
  }
  export default new RegistrationPage();