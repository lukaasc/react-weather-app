import React from 'react';
import PropTypes from 'prop-types';
import { observable } from 'mobx';
import { inject, observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import queryString from 'query-string';

import WeatherStore from '../../stores/weather-store';

import Spinner from '../spinner/spinner';
import ForecastItem from '../forecast-item/forecast-item';

@inject('weatherStore')
@observer
class ForecastContainer extends React.Component {
  @observable
  loading = true;

  async componentDidMount() {
    const {
      location: { search }
    } = this.props;

    try {
      await this.getForecast(search);
    } catch (err) {
      console.log(err);
    } finally {
      this.loading = false;
      this.handleRouteChange();
    }
  }

  /**
   * Parses the query string and calls the store to fetch forecast data for a specific city
   * @param {String} query
   */
  async getForecast(query) {
    const { weatherStore } = this.props;

    try {
      const { city } = queryString.parse(query);

      if (city) {
        await weatherStore.getForecast(city);
      }
    } catch (err) {
      console.log(err);
    }
  }

  /**
   * Listens to changes on the route to update the forecast info
   */
  handleRouteChange() {
    const { history } = this.props;

    history.listen(async location => {
      const { search } = location;

      try {
        this.loading = true;
        await this.getForecast(search);
      } catch (err) {
        console.log(err);
      } finally {
        this.loading = false;
      }
    });
  }

  render() {
    const {
      classes,
      weatherStore: {
        forecast: { city = {}, list = [] }
      }
    } = this.props;

    return (
      <div className={classes.root}>
        {this.loading ? (
          <Spinner />
        ) : (
          <>
            <Typography variant="h3" color="inherit" className={classes.title}>
              {city.name}
            </Typography>
            <div className={classes.forecastItems}>
              {list.map(item => (
                <ForecastItem key={item.dt} iconId={item.weather[0].icon} {...item} />
              ))}
            </div>
          </>
        )}
      </div>
    );
  }
}

ForecastContainer.propTypes = {
  classes: PropTypes.object,
  weatherStore: PropTypes.instanceOf(WeatherStore),
  history: PropTypes.object
};

export default withStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    margin: '2rem'
  },
  title: {
    margin: '2rem'
  },
  forecastItems: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})(ForecastContainer);
