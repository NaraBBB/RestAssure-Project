import loginPage from "../../page_object/loginPage";

describe("Deleting created listing", () => {
  beforeEach(() => {
    //cy.visit("/dashboard/user/profile")

    cy.wait(1000);
    cy.нэвтрэх();
    // cy.errorHandler()
  });

  it.only("Should delete the created listing", function () {
    //TODO const listingId = 123; // Replace this with the actual ID of the created listing
    
    const token = window.localStorage.getItem("accessToken");
    // Perform the DELETE request   

    cy.request({
      method: "DELETE",
      url: `https://dev.delekhomes.com/api/estate-objects/${13087}`, // ! ENE TOONUUD LISTING ID 
      headers: {
        Authorization: "Bearer " + token, // Replace with actual authentication token
      },
    }).then((deleteResponse) => {
      window.localStorage.setItem(
        "accessToken",
        deleteResponse.body.accessToken
      );
      // !Assertions to verify successful deletion
      expect(deleteResponse.status).to.eq(200); // Replace with the expected status code
      //expect(deleteResponse.body).to.have.property('success', true); // Adjust based on your API response
    });
  });
});
