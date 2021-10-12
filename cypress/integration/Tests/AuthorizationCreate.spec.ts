// @ts-nocheck
import {AuthorizationCreatePage} from '../PageObjects/AuthorizationCreate.PageObject';
import {BrowserUtil} from '../Utils/Browser.Util';
import {AssertionUtil} from '../Utils/Assertions.Util';
import {UiComponentsUtil} from '../Utils/UiComponents.Util';
import testUser from '../../Fixtures/User - ChuckNorris.json'

const authorizationCreatePage = new AuthorizationCreatePage();
const browser = new BrowserUtil();
const assertions = new AssertionUtil();
const uiComponents = new UiComponentsUtil();

it("Smoke Authorization Create Page", () => {

    // Arrange

    // Act
    browser.visit(authorizationCreatePage._url);
    uiComponents.fillFormField({field: authorizationCreatePage.getLastNameField(), textToEnter: testUser.lastName});
    uiComponents.fillFormField({field: authorizationCreatePage.getFirstNameField(), textToEnter: testUser.firstName});
    uiComponents.fillFormField({field: authorizationCreatePage.getPrimaryPhoneField(), textToEnter: testUser.primaryPhoneNumber});
    uiComponents.fillFormField({field: authorizationCreatePage.getSecondaryPhoneField(), textToEnter: testUser.secondaryPhoneNumber});
    uiComponents.fillFormField({field: authorizationCreatePage.getEmailField(), textToEnter: testUser.email});

    // Assert
    uiComponents.verifyFormFieldContents({field: authorizationCreatePage.getLastNameField(), expectedText: testUser.lastName});
    uiComponents.verifyFormFieldContents({field: authorizationCreatePage.getFirstNameField(), expectedText: testUser.firstName});
    uiComponents.verifyFormFieldContents({field: authorizationCreatePage.getPrimaryPhoneField(), expectedText: testUser.primaryPhoneNumber});
    uiComponents.verifyFormFieldContents({field: authorizationCreatePage.getSecondaryPhoneField(), expectedText: testUser.secondaryPhoneNumber});
    uiComponents.verifyFormFieldContents({field: authorizationCreatePage.getEmailField(), expectedText: testUser.email});
});

