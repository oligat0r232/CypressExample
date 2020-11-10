class FormPage {
    submitButton() {
        return cy.get('#submit');
    }
    firstNameField() {
        return cy.get('#firstName')
    }
    lastNameField() {
        return cy.get('#lastName')
    }
    userEmail() {
        return cy.get('#userEmail')
    }
    maleGenderRadio() {
        return cy.get('#gender-radio-1')
    }
    femaleGenderRadio() {
        return cy.get('#gender-radio-2')
    }
    otherGenderRadio() {
        return cy.get('#gender-radio-3')
    }
    userNumberField() {
        return cy.get('#userNumber')
    }
    dateOfBirthField() {
        return cy.get('#dateOfBirthInput')
    }
    sportsCheckbox() {
        return cy.get('#hobbies-checkbox-1')
    }
    readingCheckbox() {
        return cy.get('#hobbies-checkbox-2')
    }
    musicCheckbox() {
        return cy.get('#hobbies-checkbox-3')
    }
    currentAddressField() {
        return cy.get('#currentAddress')
    }
    greenBorder = 'rgb(40, 167, 69)'
    redBorder = 'rgb(220, 53, 69)'
}
export default FormPage