import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import useStyles from './styles';

export const Notification = (props:any) => {
  const classes = useStyles();

  const handleClose = (reason: any) => {
    if (reason === 'clickaway') {
      return;
    }
    props.setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar 
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }} 
      open={props.open} autoHideDuration={6000} onClose={handleClose}>
        <MuiAlert onClose={(e: any) => handleClose(e.target)} severity="success" elevation={6} variant="filled">Transaction successfully created.</MuiAlert>
      </Snackbar>
    </div>
  );
};