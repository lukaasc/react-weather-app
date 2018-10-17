import WeatherStore from './weather-store';

export default class StoreInitializer {
  static initialize() {
    return {
      weatherStore: new WeatherStore()
    };
  }
}
