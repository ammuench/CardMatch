import { CardMatchPage } from './app.po';

describe('card-match App', () => {
  let page: CardMatchPage;

  beforeEach(() => {
    page = new CardMatchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
