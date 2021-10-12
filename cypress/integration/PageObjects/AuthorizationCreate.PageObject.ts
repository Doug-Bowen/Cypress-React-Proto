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

    //// Header Components
    _headerTitle = this._header + ' > h3';

    //// Renter Information Components
    _renterInformationPanel = ':nth-child(1)';
    _renterInformationPanelTitle = this._renterInformationPanel + ' > .css-1p5og4b-Heading';
    _renterInformationNameGroup = this._renterInformationPanel + ' > .css-1tfypf1-FormGrid > :nth-child(1)';
    _namePanel = this._renterInformationPanel + this._renterInformationNameGroup + ' > .css-8y2dca-Grid';
    _nameLabel = this._renterInformationPanel + this._renterInformationNameGroup + ' > .css-1kilj67-Label';
    _nameFieldGrid = this._renterInformationNameGroup + ' > .css-8y2dca-Grid';
    _lastNameField = this._nameFieldGrid + ' > :nth-child(1) > .MuiInputBase-root > .MuiInputBase-input';
    _firstNameField = this._nameFieldGrid + ' > :nth-child(2) > .MuiInputBase-root > .MuiInputBase-input';

    //// Contact Information Components
    _renterInformationContactInformationGroup = this._renterInformationPanel + ' > .css-1tfypf1-FormGrid > :nth-child(2)';
    _primaryPhoneLabel = this._renterInformationContactInformationGroup + ' > :nth-child(2) > .css-1kilj67-Label';
    _contactInformationLabel = this._renterInformationContactInformationGroup + ' > .css-1kilj67-Label';
    _contactInformationGrid = this._renterInformationContactInformationGroup + ' > .css-8y2dca-Grid';
    _primaryPhoneField = this._contactInformationGrid + ' > :nth-child(1) > .MuiInputBase-root > .MuiInputBase-input';
    _secondaryPhoneField = this._contactInformationGrid + ' > :nth-child(2) > .MuiInputBase-root > .MuiInputBase-input';
    _emailField = this._contactInformationGrid + ' > :nth-child(3) > .MuiInputBase-root > .MuiInputBase-input';

    //// Rental Information Components
    _rightContentPanelTitle = this._rightContentPanel + ' > .css-1p5og4b-Heading';

    // Actions
    getLastNameField() { return cy.get( this._lastNameField );};
    getFirstNameField() { return cy.get( this._firstNameField );};
    getPrimaryPhoneField() { return cy.get( this._primaryPhoneField );};
    getSecondaryPhoneField() { return cy.get( this._secondaryPhoneField );};
    getEmailField() { return cy.get( this._emailField );};
}