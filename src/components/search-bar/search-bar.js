import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

@withRouter
@observer
class SearchBar extends React.Component {
  @observable
  searchTerm = '';

  handleChange = e => {
    this.searchTerm = e.target.value;
  };

  handleClick = async () => {
    const { history } = this.props;

    history.push(`/forecast?city=${encodeURI(this.searchTerm)}`);

    this.searchTerm = '';
  };

  render() {
    const { classes } = this.props;

    return (
      <>
        <TextField
          className={classes.textField}
          variant="outlined"
          placeholder="St. George, Utah"
          onChange={this.handleChange}
          value={this.searchTerm}
        />
        <Button variant="contained" className={classes.button} onClick={this.handleClick}>
          Get Weather
        </Button>
      </>
    );
  }
}

SearchBar.propTypes = {
  classes: PropTypes.object
};

export default withStyles({
  textField: {
    background: 'white'
  },
  button: {
    margin: '1rem',
    background: '#5cb85c',
    color: 'white'
  }
})(SearchBar);
