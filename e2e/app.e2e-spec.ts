import { FlexboxGridPage } from './app.po';

describe('flexbox-grid App', () => {
  let page: FlexboxGridPage;

  beforeEach(() => {
    page = new FlexboxGridPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
