class Common {
    get msgEmail() {
      return cy.xpath('//*[@name="email"]/parent::div/following-sibling::p');
    }
  
    get msgPassword() {
      return cy.xpath('//*[@name="password"]/parent::div/following-sibling::p');
    }
  
    get msgFirstName() {
      return cy.xpath('//*[@name="firstName"]/parent::div/following-sibling::p');
    }
  
    get msgLastName() {
      return cy.xpath('//*[@name="lastName"]/parent::div/following-sibling::p');
    }
  
    get msgCredentials() {
      return cy.xpath('//div[@role="alert"]/child::div[contains(@class, "Alert-message")]');
    }
  
    get pattEmail() {
      return cy.xpath('//*[@name="email"]/parent::div/following-sibling::p');
    }
  
    get userMenu() {
      return cy.xpath('//div[@class="MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault css-vanhy0"]//following-sibling::*[name()="svg"]');
    }
  
    get optLogout() {
      return cy.get('li[role="menuitem"]');
    }
  
    get menuOptions() {
      return cy.get('[role="menuitem"]');
    }
  }
  
  export { Common };
  