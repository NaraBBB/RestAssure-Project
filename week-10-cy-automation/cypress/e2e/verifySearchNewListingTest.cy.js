import homePage from "../page_objects/homePage";
import featuredListingsPage from "../page_objects/featuredListingsPage";

describe.skip("Testing Home page search functionality ", () => {
  let verificationTexts;
  beforeEach(function () {
    cy.visit("/");
    cy.errorHandler();
    cy.fixture("verificationTexts.json").then((data) => {
      verificationTexts = data;
    });
  });

  it("Should search by keyword", () => {
    homePage.searchInp.type("Spacious apartment", { force: true });
    homePage.startSearchBtn.click();
    featuredListingsPage.listedPropt.should(
      "contain.text",
      verificationTexts.validationHP.searchResult
    );
  });
  it("Should search by bedrooms", () => {
    homePage.bedroomsDrpdn.click();
    homePage.bedroomsOpt.click();
    homePage.startSearchBtn.click();
    featuredListingsPage.selectedBedroomsVal.should(
      "contain.text",
      verificationTexts.validationHP.selectedBedrooms
    );
  });

  it("Should search by price", () => {
    cy.visit(verificationTexts.validationHP.featuredListingsPriceUrl);
    featuredListingsPage.propertyPrc.should(
      "contain.text",
      verificationTexts.validationHP.propertyPrice
    );
  });

  it("Should search by city", () => {
    homePage.cityInp.type("New York").click();
    homePage.startSearchBtn.click();
    featuredListingsPage.moreInfoBtn.click();

    const expectedDetails = verificationTexts.validationHP.propertyDetails;
    featuredListingsPage.listingDtls.within(() => {
      cy.wrap(Object.values(expectedDetails)).each((value) => {
        cy.contains(value).should("be.visible");
      });
    });
  });
});
