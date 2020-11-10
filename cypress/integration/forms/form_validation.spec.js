/// <reference types="cypress" />
import FormPage from '../../pageobjects/form.page';

context('Assertions', () => {
  // As each test in this spec file is run on the same page, the page will be opened before each test.
  beforeEach(() => {
    cy.visit('/automation-practice-form')
    cy.viewport('macbook-15') // This enlarges the viewport to make sure that the elements that should be displayed on a large screen are.
  })

  describe('test form', () => {
    const formPage = new FormPage()
    // Test to verify that mandatory fields are highlighted if form is submitted when they are empty
    it('mandatory fields show validation warning if whole form is submitted empty', () => {
      formPage.submitButton().click()
      formPage.firstNameField().should('have.css', 'border-color', formPage.redBorder)
      formPage.lastNameField().should('have.css', 'border-color', formPage.redBorder)
      formPage.userEmail().should('have.css', 'border-color', formPage.greenBorder)
      formPage.maleGenderRadio().should('have.css', 'border-color', formPage.redBorder)
      formPage.femaleGenderRadio().should('have.css', 'border-color', formPage.redBorder)
      formPage.otherGenderRadio().should('have.css', 'border-color', formPage.redBorder)
      formPage.userNumberField().should('have.css', 'border-color', formPage.redBorder)
      formPage.dateOfBirthField().should('have.css', 'border-color', formPage.greenBorder)
      formPage.sportsCheckbox().should('have.css', 'border-color', formPage.greenBorder)
      formPage.readingCheckbox().should('have.css', 'border-color', formPage.greenBorder)
      formPage.musicCheckbox().should('have.css', 'border-color', formPage.greenBorder)
      formPage.currentAddressField().should('have.css', 'border-color', formPage.greenBorder)
    })
    // Test to verify that the user cannot submit the form if the mandatory fields are not completed
    it('cannot submit form if all mandatory fields are not completed', () => {
      formPage.userEmail().type('test@test.com')
      formPage.sportsCheckbox().click()
      formPage.currentAddressField().type('99 Fake Address')
      formPage.submitButton().click()
      formPage.formSubmitModalTitle().should('not.be.visible')
    })
    // Test to check that the mobile number field has the correct min and max lengths alongside verifying the user cannot enter more than 10 by
    // checking the saved value after submitting
    it('mobile number field cannot have more than 10 digits', () => {
      formPage.firstNameField().type('John')
      formPage.lastNameField().type('Smith')
      formPage.maleGenderRadio().click()
      formPage.userNumberField()
        .should('have.attr', 'minlength', '10')
        .and('have.attr', 'maxlength', '10')
      formPage.userNumberField().type('012345678910')
      formPage.submitButton().click()
      cy.log(formPage.modalMobileNumber())
      formPage.modalMobileNumber().siblings()
        .and('not.have.text', '012345678910')
        .and('have.text', '0123456789')

    })
  })
})
