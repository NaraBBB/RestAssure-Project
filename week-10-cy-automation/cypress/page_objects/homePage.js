class HomePage {
  get homePageLoginBtn() {
    return cy.get('[href="/auth/login"]');
  }
  get homePageRegisterBtn() {
    return cy.get('[href="/auth/register"]');
  }
  get searchInp() {
    return cy.get('input[type="text"]').first();
  }
  get startSearchBtn() {
    return cy.contains("Start Search");
  }
  get bedroomsDrpdn() {
    return cy.get("div[id=':r2:']");
  }
  get bedroomsOpt() {
    return cy.get('[data-value="2"]');
  }
  get selectedBedroomsVal() {
    return cy.contains("div", "Bedrooms:").siblings();
  }
  get cityInp() {
    return cy.get('input[type="text"]').last();
  }
}
export default new HomePage();
