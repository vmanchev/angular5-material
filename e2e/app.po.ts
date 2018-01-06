import { browser, by, element } from 'protractor';

export class AppPage {
  navigateToLogin() {
    return browser.get('/login');
  }

  getFormTitle() {
    return element(by.css('app-login mat-card-title')).getText();
  }
}
