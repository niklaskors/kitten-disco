import { KittenDiscoPage } from './app.po';

describe('kitten-disco App', () => {
  let page: KittenDiscoPage;

  beforeEach(() => {
    page = new KittenDiscoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
