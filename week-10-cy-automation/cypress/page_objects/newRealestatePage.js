class NewRealestatePage {
  get titleInp() {
    return cy.get('[name="title"]');
  }
  get descriptionInp() {
    return cy.get('[name="description"]');
  }
  get cityInp() {
    return cy.get('[name="city"]');
  }
  get addressInp() {
    return cy.get('[name="address"]');
  }
  get zipcodeInp() {
    return cy.get('[name="zipCode"]');
  }
  get stateInp() {
    return cy.get('[class*="MuiSelect-select"]');
  }
  get stateNm() {
    return cy.contains("li", "Ohio");
  }
  get imagesInp() {
    return cy.get('[accept="image/*"]');
  }
  get priceInp() {
    return cy.get('[name="price"]');
  }
  get bedroomsInp() {
    return cy.get('[name="bedrooms"]');
  }
  get bathroomsInp() {
    return cy.get('[name="bathrooms"]');
  }
  get garageInp() {
    return cy.get('[name="garage"]');
  }
  get sqftInp() {
    return cy.get('[name="sqft"]');
  }
  get lotsizeInp() {
    return cy.get('[name="lotSize"]');
  }
  get publishSldr() {
    return cy.get('[class="MuiSwitch-root MuiSwitch-sizeMedium css-1ew5r76"]');
  }
  get postBtn() {
    return cy.get('[id=":rd:"]');
  }

  uploadImage(imagePath) {
    this.imagesInp.attachFile(imagePath);
  }

  createNewRealEstate(
    title,
    description,
    city,
    address,
    zipcode,
    imagePath,
    price,
    bedrooms,
    bathrooms,
    garage,
    sqft,
    lotsize
  ) {
    this.titleInp.type(title);
    this.descriptionInp.type(description);
    this.cityInp.type(city);
    this.addressInp.type(address);
    this.zipcodeInp.type(zipcode);
    this.stateInp.click({ force: true });
    this.stateNm.click();
    this.uploadImage(imagePath);
    this.priceInp.type(price);
    this.bedroomsInp.type(bedrooms);
    this.bathroomsInp.type(bathrooms);
    this.garageInp.type(garage);
    this.sqftInp.type(sqft);
    this.lotsizeInp.type(lotsize);
    this.publishSldr.click();
    this.postBtn.click();
  }
}
export default new NewRealestatePage();
