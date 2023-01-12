import {RegistrationFormPage} from "../../cypress/Pages/RegistrationFormPage.js";

describe('Student Registration Form', () => {
   it('Does not do much!', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
    cy.url().should('include', '/commands/actions')
    cy.get('.action-email').type('fake@email.com')
    cy.get('.action-email').should('have.value', 'fake@email.com')
    expect(true).to.equal(true)
  })

   it('users enter detail on student registration form page', () => {
   cy.readFile('cypress/fixtures/studentDetail.json').then((json) => {
   const registrationFormPage = new RegistrationFormPage();
     cy.visit(registrationFormPage.registrationWebSite);
     cy.contains(registrationFormPage.formButton).click()
     cy.contains(registrationFormPage.practiseFormButton).click();
     cy.get(registrationFormPage.firstName).type(json.name);
     cy.get(registrationFormPage.lastName).type(json.lastName);
     cy.get(registrationFormPage.userEmail).type(json.email);
     cy.contains(registrationFormPage.genderMale).click();
     cy.get(registrationFormPage.phoneNumber).type(json.phoneNumber);
     cy.get(registrationFormPage.subject).type(json.subject);
     cy.contains(registrationFormPage.hobby).click()
     //file upload
     const filepath = 'laptop.png'
     cy.get(registrationFormPage.inputFile).attachFile(filepath);
     cy.get(registrationFormPage.address).type(json.address);
     cy.get(registrationFormPage.stateDropdownBox).click();
     cy.contains(registrationFormPage.selectNcr).click()
     cy.get(registrationFormPage.cityDropdownBox).click();
     cy.contains(registrationFormPage.selectGurgaon).click();
     cy.get(registrationFormPage.submitButton).click({force: true});
   })
   });
})