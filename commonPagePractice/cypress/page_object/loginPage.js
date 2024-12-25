class LoginPage {

    get loginPageBtn(){return cy.get('[href="/auth/login"]')}
  
    get emailInput() {
      return cy.get('[name="email"]');
    }
    get passwordInput() {
      return cy.get('[name="password"]');
    }
    get loginButton() {
      return cy.get('[type="submit"]');
    }
  
    loginMethod(email, password) {
      this.loginPageBtn.click();
      this.emailInput.type(email);
      this.passwordInput.type(password);
      this.loginButton.click({force: true});
    }
  }
  export default new LoginPage();