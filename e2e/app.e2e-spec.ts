import { NekoWikiPage } from './app.po';

describe('neko-wiki App', () => {
  let page: NekoWikiPage;

  beforeEach(() => {
    page = new NekoWikiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
