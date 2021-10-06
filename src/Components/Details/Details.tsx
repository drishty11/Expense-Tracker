import React from 'react'
import { Card, CardContent, CardHeader,Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import useTransaction from '../../useTransaction';

import useStyles from './styles';
export const Details = (props: any) => {
    const classes = useStyles();
    const { total, chartData } = useTransaction(props.title);
    console.log(chartData);

    return (
        <Card className={props.title === 'Income' ? classes.income : classes.expenses}>
            <CardContent style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <CardHeader title={props.title} titleTypographyProps={{variant:"h5"}} style={{padding:'0'}} />
                <Typography variant="h6">${total}</Typography>
            </CardContent>
            <CardContent>
                {total > 0 ? 
                <div style={{width:'300px', height:'300px', position:'relative', margin:'auto'}}>
                    <Doughnut data={chartData} options={{responsive:true, maintainAspectRatio:false}} />
                </div> : '' }   
            </CardContent>
        </Card>
    
    )
}
