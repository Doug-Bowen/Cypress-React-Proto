// @ts-nocheck
import {AuthorizationCreate} from '../PageObjects/AuthorizationCreate.PageObject';
import {BrowserUtil} from '../Utils/Browser.Util';
import {AssertionUtil} from '../Utils/Assertions.Util';
import {FormFields} from '../Utils/FormFields.Util';

const authorizationCreatePage = new AuthorizationCreate();
const browser = new BrowserUtil();
const assertions = new AssertionUtil();
const formfields = new FormFields();

it("Smoke Authorization Create Page", () => {

    // Arrange
    let firstName = 'Chuck';
    let lastName = 'Norris'

    // Act
    browser.visit(authorizationCreatePage._url);
    formfields.fillFormField({field: authorizationCreatePage.getLastNameField(), textToEnter: lastName});
    formfields.fillFormField({field: authorizationCreatePage.getFirstNameField(), textToEnter: firstName});

    // Assert

});

