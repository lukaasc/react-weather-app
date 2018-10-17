import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import SearchBar from '../search-bar/search-bar';

import CoverImage from '../../assets/images/pattern.svg';

class HomeContainer extends React.PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="h3" color="inherit" className={classes.title}>
          Enter a City and State
        </Typography>
        <SearchBar />
      </div>
    );
  }
}

HomeContainer.propTypes = {
  classes: PropTypes.object
};

export default withStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: 'white',
    backgroundImage: `url("${CoverImage}")`,
    backgroundSize: 'cover',
    height: '100vh'
  },
  title: {
    margin: '2rem'
  }
})(HomeContainer);
