import newRealestatePage from "../page_objects/newRealestatePage";

describe.skip("UI Test: Create a New Listing", () => {
  beforeEach(() => {
    cy.log_in();
  });

  it("should allow a user to create a new real estate listing", function () {
    cy.visit("/dashboard/real-estate/new");
    cy.wait(1000);
    newRealestatePage.createNewRealEstate(
      "Luxury Apartment",
      "Spacious apartment in NYC",
      "New York",
      "123 Main Street",
      "10001",
      "uiHouse.png",
      "500000",
      "3",
      "2",
      "1",
      "2000",
      "5000"
    );
    cy.contains("Post success!").should("be.visible");
    cy.url().should("includes", "/real-estate/list");
  });
});
