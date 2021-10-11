import {UrlsUtil} from '../Utils/Urls.Util';
const url = new UrlsUtil();

export class AuthorizationCreate {
    _url: string = url._AuthorizationCreatePage;

    // Definitions
    _header = '.css-124bdxh-StyledHeader';
    _headerTitle = this._header + ' > h3';

    _leftContentPanel = '.css-z251jo-Content';
    _renterInformationPanel = ':nth-child(1)';
    _renterInformationPanelTitle = this._renterInformationPanel + ' > .css-1p5og4b-Heading';
    _renterInformationFormGrid = this._renterInformationPanel + ' > .css-1tfypf1-FormGrid > :nth-child(1)';
    _namePanel = this._renterInformationPanel + this._renterInformationFormGrid + ' > .css-8y2dca-Grid';
    _nameLabel = this._renterInformationPanel + this._renterInformationFormGrid + ' > .css-1kilj67-Label';
    _nameFieldGrid = this._renterInformationFormGrid + ' > .css-8y2dca-Grid';
    _lastNameField = this._nameFieldGrid + ' > :nth-child(1) > .MuiInputBase-root > .MuiInputBase-input';
    _firstNameField = this._nameFieldGrid + ' > :nth-child(2) > .MuiInputBase-root > .MuiInputBase-input';

    _rightContentPanel = '.css-nf8nue-SideBar';
    _rightContentPanelTitle = this._rightContentPanel + ' > .css-1p5og4b-Heading';
    _headerBottom = '.css-12tvwxr-ScrollableContent';
    _footer = '.css-1phgddm-Footer';

    // Actions
    getLastNameField() { return cy.get( this._lastNameField );};
    getFirstNameField() { return cy.get( this._firstNameField );};


}