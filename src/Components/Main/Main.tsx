import React, { useContext } from 'react'
import Card from '@mui/material/Card';
import {Typography, Grid, Divider, CardContent} from '@material-ui/core';
import CardHeader from '@mui/material/CardHeader';
import { ExpenseTrackerContext } from '../../Context/Context';
import useStyles from './styles';
import {Form} from './Form/Form';
import { List } from './List/List';
import { TrySaying } from '../TrySaying';

export const Main = () => {
    const classes = useStyles();
    const {balance} = useContext(ExpenseTrackerContext);
    return (
        <Card className={classes.root} style={{maxWidth: 475, margin:'auto', padding:'0 5px'}}>
            <CardContent style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <CardHeader title="Expense Tracker" subheader="powered by speechly" titleTypographyProps={{variant:"h5"}} subheaderTypographyProps={{variant:"overline"}} style={{padding:'0'}}/>
                <Typography align="center" component="div" style={{fontSize:'17px'}}>Total Balance: ${balance}</Typography>
            </CardContent>
            <CardContent style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <Typography variant="caption" style={{paddingBottom:'10px', paddingTop:'0', textAlign:'center',textTransform:'uppercase'}}>
                    <TrySaying />
                </Typography>
                <Divider />
                <Form />
            </CardContent>
            <CardContent className={classes.cardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}
