// @ts-nocheck
import {AuthorizationCreatePage} from '../PageObjects/AuthorizationCreate.PageObject';
import {BrowserUtil} from '../Utils/Browser.Util';
import {UiComponentsUtil} from '../Utils/UiComponents.Util';

import {userMocker} from '../../fixtures/Users.Factory';
import {claimMocker} from '../../fixtures/Claims.Factory';

const authorizationCreatePage = new AuthorizationCreatePage();
const browser = new BrowserUtil();
const uiComponents = new UiComponentsUtil();

it("Fill User Information", () => {

    // Arrange
    let mockUser = new userMocker(
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

it("Fill Claim Information", () => {

    // Arrange
    let mockClaim = new claimMocker(
        {
            number: "69420",
            type: "Collateral Damage",
            condition: "Abysmal",
            year: "2001",
            make: "Fjord",
            model: "Fauxcus"
        });
    browser.visit(authorizationCreatePage._url);

    // Act
    uiComponents.fillFormField({field: authorizationCreatePage.getClaimNumberField(), textToEnter: mockClaim.number});
    uiComponents.fillFormField({field: authorizationCreatePage.getClaimTypeField(), textToEnter: mockClaim.type});
    uiComponents.fillFormField({field: authorizationCreatePage.getVehicleConditionField(), textToEnter: mockClaim.condition});
    uiComponents.fillFormField({field: authorizationCreatePage.getVehicleYearField(), textToEnter: mockClaim.year});
    uiComponents.fillFormField({field: authorizationCreatePage.getVehicleMakeField(), textToEnter: mockClaim.make});
    uiComponents.fillFormField({field: authorizationCreatePage.getVehicleModelField(), textToEnter: mockClaim.model});

    // Assert
    uiComponents.verifyFormFieldContents({field: authorizationCreatePage.getClaimNumberField(), expectedText: mockClaim.number});
    uiComponents.verifyFormFieldContents({field: authorizationCreatePage.getClaimTypeField(), expectedText: mockClaim.type});
    uiComponents.verifyFormFieldContents({field: authorizationCreatePage.getVehicleConditionField(), expectedText: mockClaim.condition});
    uiComponents.verifyFormFieldContents({field: authorizationCreatePage.getVehicleYearField(), expectedText: mockClaim.year});
    uiComponents.verifyFormFieldContents({field: authorizationCreatePage.getVehicleMakeField(), expectedText: mockClaim.make});
    uiComponents.verifyFormFieldContents({field: authorizationCreatePage.getVehicleModelField(), expectedText: mockClaim.model});
});

