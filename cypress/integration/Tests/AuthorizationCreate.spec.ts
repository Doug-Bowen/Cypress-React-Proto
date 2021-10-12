// @ts-nocheck
import {AuthorizationCreatePage} from '../PageObjects/AuthorizationCreate.PageObject';
import {BrowserUtil} from '../Utils/Browser.Util';
import {AssertionUtil} from '../Utils/Assertions.Util';
import {UiComponentsUtil} from '../Utils/UiComponents.Util';
import {userMocker} from '../../Fixtures/Users.Factory.ts';

const authorizationCreatePage = new AuthorizationCreatePage();
const browser = new BrowserUtil();
const assertions = new AssertionUtil();
const uiComponents = new UiComponentsUtil();

it("Smoke Authorization Create Page", () => {

    // Arrange
    const mockUser = new userMocker(
        {
            lastName: "Norris",
            firstName: "Chuck",
            primaryPhone: "867-5309",
            secondaryPhone: "1-800-273-8255",
            email: "chuck.norris@texasRangers.org",
            street: "Salt Lick Creek Rd",
            city: "Bugtussle",
            state: "KY",
            zip: "42140"
        });
    browser.visit(authorizationCreatePage._url);

    // Act
    uiComponents.fillFormField({field: authorizationCreatePage.getLastNameField(), textToEnter: mockUser.lastName});
    uiComponents.fillFormField({field: authorizationCreatePage.getFirstNameField(), textToEnter: mockUser.firstName});
    uiComponents.fillFormField({field: authorizationCreatePage.getPrimaryPhoneField(), textToEnter: mockUser.primaryPhone});
    uiComponents.fillFormField({field: authorizationCreatePage.getSecondaryPhoneField(), textToEnter: mockUser.secondaryPhone});
    uiComponents.fillFormField({field: authorizationCreatePage.getEmailField(), textToEnter: mockUser.email});

    // Assert
    uiComponents.verifyFormFieldContents({field: authorizationCreatePage.getLastNameField(), expectedText: mockUser.lastName});
    uiComponents.verifyFormFieldContents({field: authorizationCreatePage.getFirstNameField(), expectedText: mockUser.firstName});
    uiComponents.verifyFormFieldContents({field: authorizationCreatePage.getPrimaryPhoneField(), expectedText: mockUser.primaryPhone});
    uiComponents.verifyFormFieldContents({field: authorizationCreatePage.getSecondaryPhoneField(), expectedText: mockUser.secondaryPhone});
    uiComponents.verifyFormFieldContents({field: authorizationCreatePage.getEmailField(), expectedText: mockUser.email});
});

