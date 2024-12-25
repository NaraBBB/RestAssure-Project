import loginPage from "../../page_object/loginPage";
let listingId;

describe("", () => {
  beforeEach(() => {
    cy.wait(1000);
    cy.нэвтрэх();
  });

  afterEach("Deleting listing after creatation", () => {
    cy.request("DELETE", `/api/estate-objects/${listingId}`).then(
      (deleteResponse) => {
        console.log(deleteResponse);
      }
    );
  });
  it("Should create listing", function () {
    //convert image to binary
    cy.fixture("homeAloneHouse.png").then((image) => {
      const blob = Cypress.Blob.base64StringToBlob(image, "homeAloneHouse.png"); // !<= Blob is now ready for use

      //Create formData object
      //! end buh listinguudee neg variabled store hiigeed request dotoroo duudaj bna
      const formData = new FormData();
      // Add fields to the FormData object
      //! Add the binary data (blob) to the FormData object
      formData.append("images", blob); //! END ZURAGIIG ORUULJ BGAA
      formData.append("title", "Beautiful House");
      formData.append("address", "123 Main Street");
      formData.append("city", "Los Angeles");
      formData.append("state", "CA");
      formData.append("zipCode", "90001");
      formData.append("price", 750000); // Price as a number
      formData.append("bedrooms", 3); // Number of bedrooms
      formData.append("bathrooms", 2); // Number of bathrooms
      formData.append("garage", 1); // Garage count
      formData.append("sqft", 2000); // Square feet
      formData.append("lotSize", 8000); // Lot size
      formData.append("isPublished", true);
      formData.append("description", "A lovely home with modern amenities.");

      cy.request({
        method: "POST",
        url: "https://dev.delekhomes.com/api/estate-objects",
        body: formData,
        headers: {
          Authorization: "Bearer " + window.localStorage.getItem("accessToken"),
        },
      }).then((postResponse) => {
        expect(postResponse.status).to.eq(201); //!<--  Ensure the creation was successful

        const decoder = new TextDecoder("utf-8"); // Create a TextDecoder instance
        const decodedString = decoder.decode(new Uint8Array(postResponse.body)); // Decode the binary response body
        listingId = JSON.parse(decodedString).id; // Parse JSON and extract the "id"

        //const listingId  = postResponse.body.id; //!<--  Extract the ID from the response
        // TODO  expect(postResponse.body).to.have.property('message', 'Post success!');
        //TODO  expect(postResponse.body).to.eq('Post success!');
      });
    });
  });
});
