import React from 'react'
import { Grid, Typography, Box } from '@material-ui/core';
import { Details } from '../Components/Details/Details';
import { Link } from 'react-router-dom';
import { Main } from '../Components/Main/Main';
import { ErrorPanel, PushToTalkButton, PushToTalkButtonContainer } from '@speechly/react-ui';
import useStyles from './styles';
export const FrontContainer = () => {
    const classes = useStyles();
    return (
      <Box className={classes.frontContainer} display="flex" height="100%">  
        <Grid container direction="column">
          <Grid item xs={6} direction="column" justifyContent="center" className={classes.left}>
              <Box sx={{ mx: 1 }}>
                <Typography component="div" style={{fontSize:'86px', color: '#3A00EA'}}>Expense Tracker</Typography>
                <Typography variant="h6" style={{marginBottom: '10px', marginLeft: '8px', color: '#5925F8'}}>Powered by Speechly</Typography>
              </Box>
              <Link to="/expensetracker" className={classes.btn}>Started</Link>
          </Grid>
        </Grid>
      </Box>
    )
}
export const MainTracker = () => {
    const classes = useStyles();
    return (
      <>
      <Grid className={classes.grid} container spacing={0} alignItems="flex-start" justifyContent="center" style={{height:'100vh', padding:'20px'}}>
        <Grid item xs={12} sm={3} style={{marginTop:'112px'}}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={3} style={{marginTop:'114px'}} >
          <Details title="Expenses" />
        </Grid>
      </Grid>
      <PushToTalkButtonContainer>
        <PushToTalkButton />
        <ErrorPanel />
      </PushToTalkButtonContainer>
    </>
    )
}
