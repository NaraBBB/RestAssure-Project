class FeaturedListingsPage {
    get selectedBedroomsVal() {
      return cy.xpath("//div[text()=' Bedrooms: ']");
    }
    get moreInfoBtn() {
      return cy.contains("More Info");
    }
    get listedPropt() {
      return cy.get(
        '[class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3 css-1h77wgb"]'
      );
    }
    get propertyPrc() {
      return cy.get('[class="MuiBox-root css-dc9kff"]');
    }
    get propertyDescpn() {
      return cy.get('[class="css-1h9vx9l"]');
    }
    get listingDtls() {
      return cy
        .get(
          '[class*="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-8 MuiGrid-grid-sm-12 MuiGrid-grid-md-8"]'
        )
        .first();
    }
  }
  export default new FeaturedListingsPage();
  