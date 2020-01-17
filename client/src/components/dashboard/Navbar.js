import React from 'react';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { makeStyles, AppBar, Toolbar, Typography, IconButton } from '@material-ui/core/';
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
          <IconButton href="/goals" color="inherit"><PlaylistAddCheckIcon/></IconButton>
          <IconButton href="/profiles" color="inherit"><RecentActorsIcon/></IconButton>
          <IconButton href="/dashboard" color="inherit"><HomeIcon/></IconButton>
          <IconButton href="/" color="inherit" onClick={logout}><ExitToAppIcon/></IconButton>
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