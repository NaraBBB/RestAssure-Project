class Dashboard {
    get userIconMenu() {
      return cy.get(' button [class="MuiAvatar-img css-1hy9t21"]');
    }
    get roleLabel() {
      return cy.get('[class="MuiBox-root css-k7os9j"]>p');
    }
    get logoutButton() {
      return cy.get("li[role='menuitem']");
    }
  }
  export default new Dashboard();