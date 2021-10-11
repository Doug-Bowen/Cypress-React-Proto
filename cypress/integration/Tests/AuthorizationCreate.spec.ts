// @ts-nocheck
import {AuthorizationCreatePage} from '../PageObjects/AuthorizationCreate.PageObject';
import {BrowserUtil} from '../Utils/Browser.Util';
import {AssertionUtil} from '../Utils/Assertions.Util';
import {UiComponentsUtil} from '../Utils/UiComponents.Util';

const authorizationCreatePage = new AuthorizationCreatePage();
const browser = new BrowserUtil();
const assertions = new AssertionUtil();
const uiComponents = new UiComponentsUtil();

it("Smoke Authorization Create Page", () => {

    // Arrange
    let lastName = 'Norris';
    let firstName = 'Chuck';

    // Act
    browser.visit(authorizationCreatePage._url);
    uiComponents.fillFormField({field: authorizationCreatePage.getLastNameField(), textToEnter: lastName});
    uiComponents.fillFormField({field: authorizationCreatePage.getFirstNameField(), textToEnter: firstName});

    // Assert
    uiComponents.verifyFormField({field: authorizationCreatePage.getLastNameField(), expectedText: lastName});
    uiComponents.verifyFormField({field: authorizationCreatePage.getFirstNameField(), expectedText: firstName});
});

