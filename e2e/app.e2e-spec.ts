import { EventManagementClientPage } from './app.po';

describe('event-management-client App', () => {
  let page: EventManagementClientPage;

  beforeEach(() => {
    page = new EventManagementClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
