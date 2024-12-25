//Should search by keyword
//Should search by bedrooms
//Should search by city()
//Should search by price
//Should navigate to the listing details page upon click "More Info"
import homePage from "../../../../sergii/a/a/cypress/page_objects/homePage";
describe("Search", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should search by keyword, DH-1", () => {
    homePage.searchFld.type("unique city", { force: true });
    homePage.startSearchBtn.click();
    cy.contains("$ 1,200,000");
  });
  it("Should search by keyword, DH-2", () => {
    cy.contains("Bedrooms").next().click();
    cy.contains("3+").click();
    homePage.startSearchBtn.click();

    //END ZUWHUN 3 BOLON 3-S DEESH BEDROOMS GARCH IRJ BNA U GEDGIIG SHALGAJ BNA, 1 BOLON 2 BHGUI GEDGIIG SHALGAH ZAMAAR
    //ehnii element
    cy.get('[viewBox="0 0 2048 1280"]')
      .eq(1)
      .parent()
      .should("have.not.text", "1")
      .should("have.not.text", "2");
    //ehnii element
    cy.get('[viewBox="0 0 2048 1280"]')
      .eq(2)
      .parent()
      .should("have.not.text", "1")
      .should("have.not.text", "2");
    //ehnii element
    cy.get('[viewBox="0 0 2048 1280"]')
      .eq(3)
      .parent()
      .should("have.not.text", "1")
      .should("have.not.text", "2");
    //ehnii element
    cy.get('[viewBox="0 0 2048 1280"]')
      .eq(4)
      .parent()
      .should("have.not.text", "1")
      .should("have.not.text", "2");
    //ehnii element
    cy.get('[viewBox="0 0 2048 1280"]')
      .eq(5)
      .parent()
      .should("have.not.text", "1")
      .should("have.not.text", "2");
    //     eq()
    // parent()
    // next()
    // first()
  });
  
  it("Should search by keyword, DH-3", () => {
    cy.get('input[type="text"]').eq(1).type("San Francisco");
    cy.contains("Start Search").click();
  });

  it("Should search by price, DH-4", () => {
    cy.visit(
      "https://qa.delekhomes.com/featured-listings?price=500000-5200000"
    );
    cy.get(".MuiPaper-rounded div:contains($)").each((priceElement) => {
      const price = priceElement.text().replace(/\D/g, "");
      expect(parseInt(price)).to.be.above(499999);
      expect(parseInt(price)).to.be.below(5100000);
    });
  });
  it("Should navigate to the listing detaila page upon clcik 'More Info', DH-5", () => {
    homePage.searchFld.type("unique city", { force: true });
    homePage.startSearchBtn.click();
    cy.contains("More Info").click();
    cy.get('[class*="MuiTypography-root MuiTypography-h3"]').should(
      "have.text",
      "Modern Apartment in Downtown"
    );
    cy.contains("Property Realtor");
    cy.get('[class*="wrapper lazy-load-image-background blur "]').should(
      "be.visible"
    );
  });
});
