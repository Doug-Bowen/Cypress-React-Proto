import {UrlsUtil} from '../Utils/Urls.Util';
const url = new UrlsUtil();

export class AuthorizationDetailsPage {
    _url: string = url._AuthorizationDetailsPage;

    // Definitions
    _headerTop = '.css-124bdxh-StyledHeader';
    _headerTitle = 'h3';
    _headerBottom = '.css-12tvwxr-ScrollableContent';
    _footer = '.css-1phgddm-Footer';

    // Actions
    getHeaderTopTitle() { return cy.get( this._headerTitle );};
    getHeaderBottomTitle() { return cy.get( this._headerBottom );};
    getFooterTitle() { return cy.get( this._footer );};
}