import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import WeatherStore from '../../stores/weather-store';

const ForecastItem = props => {
  const { iconId, classes, dt: date, weather, temp, humidity } = props;

  const icon = require(`../../assets/images/weather-icons/${iconId}.svg`);

  return (
    <div className={classes.root}>
      <img src={icon} alt="" className={classes.image} />
      <Typography className={classes.title} variant="h6">
        {WeatherStore.formatDate(date)}
      </Typography>
      <Typography className={classes.title} variant="subtitle1">
        {weather[0].description}
      </Typography>
      <Typography className={classes.title} variant="subtitle1">
        Min. Temp: {Math.round(temp.min)}
        ºC
      </Typography>
      <Typography className={classes.title} variant="subtitle1">
        Max. Temp: {Math.round(temp.max)}
        ºC
      </Typography>
      <Typography className={classes.title} variant="subtitle1">
        Humidity: {humidity}
      </Typography>
    </div>
  );
};

ForecastItem.propTypes = {
  classes: PropTypes.object,
  iconId: PropTypes.string,
  dt: PropTypes.number,
  weather: PropTypes.array,
  temp: PropTypes.object,
  humidity: PropTypes.number
};

export default withStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    margin: '0 3rem'
  },
  image: {
    width: '5rem',
    height: '5rem',
    margin: '2rem'
  },
  title: {
    margin: '0.5rem'
  }
})(ForecastItem);
