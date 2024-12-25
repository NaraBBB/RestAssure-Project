//<reference types="cypress"/>
import { faker } from "@faker-js/faker";
import registerPage from "../../page_object/registerPage"; // Only this import is needed

const userData = {
  firstName: faker.person.firstName(), // Updated method
  lastName: faker.person.lastName(), // Updated method
  email: faker.internet.email(), // Correct method for email
  password: faker.internet.password(), // Correct method for password
};

describe("Register", () => {
  beforeEach(() => {
    cy.visit("https://dev.delekhomes.com");
  });

  context("Navigates to Register page", () => {
    //! ene yu we?
    beforeEach(() => {
      cy.contains("Register").click();
    });

    it("Validates Register page path", () => {
      cy.url().should("include", "auth/register");
    });

    it("Should Register new account", () => {
      registerPage.registerAccount(
        userData.firstName,
        userData.lastName,
        userData.email,
        userData.password
      );
      cy.url().should("include", "dashboard/user/profile");
      registerPage.userMenu.click();
      registerPage.menuOptions.contains("Settings").click();
      registerPage.inputFirstname.should("have.value", userData.firstName);
      registerPage.inputLastname.should("have.value", userData.lastName);
      registerPage.inputEmailAdress.should("have.value", userData.email);
    });

    it("Should not register with null Email", () => {
      registerPage.registerAccount(
        userData.firstName,
        null,
        userData.lastName,
        userData.password
      );
      registerPage.msgEmail
        .should("have.text", "Email is required")
        .and("have.css", "color", "rgb(255, 72, 66)");
    });

    it("Should not register with null Password", () => {
      registerPage.registerAccount(
        userData.firstName,
        userData.lastName,
        userData.email,
        null
      );
      registerPage.msgPassword
        .should("have.text", "Password is required")
        .and("have.css", "color", "rgb(255, 72, 66)");
    });

    it("Should not Register with existing account", () => {
      registerPage.registerExistingAccount(); // Correctly calling the method here
    });
  });
});
