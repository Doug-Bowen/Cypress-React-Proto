import {UrlsUtil} from '../Utils/Urls.Util';
const url = new UrlsUtil();

export class LandingPage {
    _url: string = url._landingPage;

    //Definitions
    _topWidgets = '.css-1grnugx-Widgets';
    _fileWidget = this._topWidgets +  ' > :nth-child(1)';
    _avgLengthRentalWidget = this._topWidgets +  ' > :nth-child(2)';
    _daysBehindWidget = this._topWidgets +  ' > :nth-child(3)';
    _avgTotalAuthWidget = this._topWidgets +  ' > :nth-child(4)';
    _simpleDiv = ' > div';

    //Actions
    getFileWidgetText() { return cy.get( this._fileWidget + this._simpleDiv);};
    getAvgLengthRentalWidgetText() { return cy.get( this._avgLengthRentalWidget + this._simpleDiv);};
    getDaysBehindWidgetText() { return cy.get( this._daysBehindWidget + this._simpleDiv);};
    getAvgTotalAuthWidgetText() { return cy.get( this._avgTotalAuthWidget + this._simpleDiv);};
}