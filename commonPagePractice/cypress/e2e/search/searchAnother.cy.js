import homePage from "../../../../CommonPagePractice/cypress/page_objects/homePage";

describe("Search", () => {
  beforeEach(() => {
    cy.нэвтрэх();//! calling this custom method from commands.js 
    cy.visit("/featured-listings");
  });
  it("Should search by keyword", () => {
    homePage.searchInp.type("Malibu", { force: true });
    homePage.startSearchBtn.click();

    cy.get("h5")
      .filter(":contains('Malibu')") //! This "filter method "Keep only elements containing 'Malibu'
      .each((el) => { //! each method looping through all elements
        cy.wrap(el)
          .invoke("text")
          .then((text) => {
            expect(text).to.include("Malibu"); //Perform additional checks if needed
          });
      });
  }); 
  it("Should search by bedrooms", () => {
    homePage.bedroomsDrpdn.type("3{enter}");
    homePage.startSearchBtn.click();
    cy.get('[viewBox="0 0 2048 1280"]')
      .parent()
      .each((bedroom) => {
        cy.wrap(bedroom)
          .should("have.not.text", "1")
          .should("have.not.text", "2");
      });
  });
});
