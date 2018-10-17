import { observable } from 'mobx';

export default class WeatherStore {
  @observable
  forecast = {};

  /**
   * Fetchs the forecast for the next 5 days for a specific city
   * @param {String} city
   */
  async getForecast(city) {
    try {
      this.forecast = await (await fetch(
        `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&type=accurate&units=metric&APPID=9c6cc69cad227d2f2b7c54783bdb1cc4&cnt=5`
      )).json();

      return this.forecast;
    } catch (err) {
      console.log(err);

      return null;
    }
  }

  /**
   * Transforms the date to a readable format
   * @param {Number} date
   */
  static formatDate(date) {
    const formattedDate = new Date(date * 1000);

    return formattedDate.toLocaleDateString('en-GB', { weekday: 'long', month: 'short', day: 'numeric' });
  }
}
