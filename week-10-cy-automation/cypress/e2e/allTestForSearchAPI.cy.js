import homePage from "../page_objects/homePage";
import featuredListingsPage from "../page_objects/featuredListingsPage";

describe("Estate Object Tests", function () {
  let listingData;
  let listingId;

  beforeEach(function () {
    cy.wait(1000);
    cy.visit("/");
    cy.errorHandler();
  });

  before(function () {
    cy.log_in();
    cy.fixture("listingData.json").then((data) => {
      listingData = data;
      cy.fixture("homeAloneHouse.png", "binary").then((image) => {
        const blob = Cypress.Blob.binaryStringToBlob(image);

        const formData = new FormData();
        formData.append("images", blob);
        Object.entries(listingData).forEach(([key, value]) =>
          formData.append(key, value)
        );

        const bearerToken = `Bearer ${
          localStorage.getItem("accessToken") || ""
        }`;
        cy.request({
          method: "POST",
          url: "/api/estate-objects",
          body: formData,
          headers: {
            "Content-Type": "application/json",
            Authorization: bearerToken,
          },
          failOnStatusCode: false,
        }).then((postResponse) => {
          expect(postResponse.status).to.eq(201);
          const decoder = new TextDecoder("utf-8");
          const decodedString = decoder.decode(
            new Uint8Array(postResponse.body)
          );
          listingId = JSON.parse(decodedString).id;
        });
      });
    });
  });

  it("Should search by keyword", function () {
    homePage.searchInp.type("Beautiful House", { force: true });
    homePage.startSearchBtn.click();
    featuredListingsPage.listedPropt.should(
      "contain.text",
      listingData.validationNewListing.searchResult
    );
    //
  });

  it("Should search by bedrooms", function () {
    homePage.bedroomsDrpdn.click();
    homePage.bedroomsOpt.click();
    homePage.startSearchBtn.click();
    featuredListingsPage.selectedBedroomsVal.should(
      "contain.text",
      listingData.validationNewListing.selectedBedrooms
    );
  });

  it("Should search by city", function () {
    homePage.cityInp.type("Los Angeles").click();
    homePage.startSearchBtn.click();
    featuredListingsPage.moreInfoBtn.click();
    featuredListingsPage.propertyDescpn.should(
      "contain.text",
      listingData.validationNewListing.description
    );
  });

  after("Deleting listing after creatation", () => {
    cy.request("DELETE", `/api/estate-objects/${listingId}`).then(
      (deleteResponse) => {
        expect(deleteResponse.status).to.eq(200);
      }
    );
  });
});
