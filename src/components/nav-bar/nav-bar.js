import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import SearchBar from '../search-bar/search-bar';

import '../app.scss';

const Nav = props => {
  const { classes } = props;

  return (
    <AppBar className={classes.root} position="relative">
      <ToolBar>
        <Typography variant="h4" color="inherit" className={classes.grow}>
          Weather App
        </Typography>
        <SearchBar />
      </ToolBar>
    </AppBar>
  );
};

Nav.propTypes = {
  classes: PropTypes.object
};

export default withStyles({
  root: {
    background: 'rgba(252,90,44,.89)',
    padding: '1rem',
    color: 'white'
  },
  grow: {
    flexGrow: 1
  }
})(Nav);
