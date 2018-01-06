import { AppPage } from './app.po';

describe('angular5-material App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display login form', () => {
    page.navigateToLogin();
    expect(page.getFormTitle()).toEqual('Reactive form');
  });
});
