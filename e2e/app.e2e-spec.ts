import { WeatherappPage } from './app.po';

describe('weatherapp App', () => {
  let page: WeatherappPage;

  beforeEach(() => {
    page = new WeatherappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
