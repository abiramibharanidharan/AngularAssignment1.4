import { AngularAssignment14LocalPage } from './app.po';

describe('angular-assignment14-local App', function() {
  let page: AngularAssignment14LocalPage;

  beforeEach(() => {
    page = new AngularAssignment14LocalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
