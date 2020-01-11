import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../actions/auth'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  appbar: {
    height: 0
  }
}));

const Navbar = ({auth: { isAuthenticated, loading }, logout}) => {



  const classes = useStyles();

  return (
   
      <AppBar position="relative" >
        <Toolbar>
          <Typography variant="h6" className={classes.title} noWrap>
            Goal Book
          </Typography>
          <Button href="/profiles" color="inherit">Profiles</Button>
          <Button href="/dashboard" color="inherit">Dashboard</Button>
          <Button href="/" color="inherit" onClick={logout}>Logout</Button>
        </Toolbar>
      </AppBar>
    
  );
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logout })(Navbar)