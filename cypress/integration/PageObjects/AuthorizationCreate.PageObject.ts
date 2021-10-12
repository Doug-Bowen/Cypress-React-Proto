import {UrlsUtil} from '../Utils/Urls.Util';
const url = new UrlsUtil();

export class AuthorizationCreatePage {
    _url: string = url._AuthorizationCreatePage;

    // Definitions
    //// Top-Level Components
    _header = '.css-124bdxh-StyledHeader';
    _leftContentPanel = '.css-z251jo-Content';
    _rightContentPanel = '.css-nf8nue-SideBar';
    _headerBottom = '.css-12tvwxr-ScrollableContent';
    _footer = '.css-1phgddm-Footer';
    _universalFieldTrailer = ' > .MuiInputBase-root > .MuiInputBase-input';

    //// Header Components
    _headerTitle = this._header + ' > h3';

    //// Renter Information Components
    _renterInformationPanel = ':nth-child(1)';
    _renterInformationPanelTitle = this._renterInformationPanel + ' > .css-1p5og4b-Heading';
    _renterInformationNameGroup = this._renterInformationPanel + ' > .css-1tfypf1-FormGrid > :nth-child(1)';
    _namePanel = this._renterInformationPanel + this._renterInformationNameGroup + ' > .css-8y2dca-Grid';
    _nameLabel = this._renterInformationPanel + this._renterInformationNameGroup + ' > .css-1kilj67-Label';
    _nameFieldGrid = this._renterInformationNameGroup + ' > .css-8y2dca-Grid';
    _lastNameField = this._nameFieldGrid + ' > :nth-child(1)' + this._universalFieldTrailer;
    _firstNameField = this._nameFieldGrid + ' > :nth-child(2)'+ this._universalFieldTrailer;

    //// Contact Information Components
    _renterInformationContactInformationGroup = this._renterInformationPanel + ' > .css-1tfypf1-FormGrid > :nth-child(2)';
    _primaryPhoneLabel = this._renterInformationContactInformationGroup + ' > :nth-child(2) > .css-1kilj67-Label';
    _contactInformationLabel = this._renterInformationContactInformationGroup + ' > .css-1kilj67-Label';
    _contactInformationGrid = this._renterInformationContactInformationGroup + ' > .css-8y2dca-Grid';
    _primaryPhoneField = this._contactInformationGrid + ' > :nth-child(1)' + this._universalFieldTrailer;
    _secondaryPhoneField = this._contactInformationGrid + ' > :nth-child(2)' + this._universalFieldTrailer;
    _emailField = this._contactInformationGrid + ' > :nth-child(3)' + this._universalFieldTrailer;

    //// Claim Information Components
    _claimInformationPanel = ':nth-child(2)';
    _claimInformationGrid = this._claimInformationPanel + ' > .css-1tfypf1-FormGrid';
    _claimInformationTopGrid = this._claimInformationGrid + ' > :nth-child(1) > .css-8y2dca-Grid';
    _claimNumberField = this._claimInformationTopGrid + ' > :nth-child(1)' + this._universalFieldTrailer;
    _claimTypeField = this._claimInformationTopGrid + ' > :nth-child(2)' + this._universalFieldTrailer;
    _vehicleInformationLabel = this._claimInformationGrid + ' > :nth-child(2) > .css-1kilj67-Label';
    _vehicleInformationGrid = this._claimInformationGrid + ' > :nth-child(2) > .css-8y2dca-Grid';
    _vehicleConditionField = this._vehicleInformationGrid + ' > :nth-child(1)' + this._universalFieldTrailer;
    _vehicleYearField = this._vehicleInformationGrid + ' > :nth-child(2)' + this._universalFieldTrailer;
    _vehicleMakeField = this._vehicleInformationGrid + ' > :nth-child(3)' + this._universalFieldTrailer;
    _vehicleModelField = this._vehicleInformationGrid + ' > :nth-child(4)' + this._universalFieldTrailer;

    //// Rental Information Components
    _rightContentPanelTitle = this._rightContentPanel + ' > .css-1p5og4b-Heading';

    // Actions
    getLastNameField() { return cy.get( this._lastNameField );};
    getFirstNameField() { return cy.get( this._firstNameField );};
    getPrimaryPhoneField() { return cy.get( this._primaryPhoneField );};
    getSecondaryPhoneField() { return cy.get( this._secondaryPhoneField );};
    getEmailField() { return cy.get( this._emailField );};
    getClaimNumberField() { return cy.get( this._claimNumberField );};
    getClaimTypeField() { return cy.get( this._claimTypeField );};
    getVehicleConditionField() { return cy.get( this._vehicleConditionField );};
    getVehicleYearField() { return cy.get( this._vehicleYearField );};
    getVehicleMakeField() { return cy.get( this._vehicleMakeField );};
    getVehicleModelField() { return cy.get( this._vehicleModelField );};
}