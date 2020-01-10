import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';


// This is used instead of css stylesheets to be able to
// style material design elements.

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

// CircularIndeterminate is a loading spinner that loads 
// until the data is ready to be served. It is not a progress bar. 

export default function CircularIndeterminate() {

// This invokes the styling created within the file

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress color="secondary" />
    </div>
  );
}