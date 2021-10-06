/* eslint-disable @typescript-eslint/no-unused-vars */
import React,{useContext} from 'react';
import {List as MUIList, ListItem, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide} from '@material-ui/core';
import {Delete, MoneyOff} from '@material-ui/icons';
import { ExpenseTrackerContext } from '../../../Context/Context';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import useStyles from './styles';

export const List = () => {
    const classes = useStyles();
    // const globalState = useContext(ExpenseTrackerContext);
    const { deleteTransaction, transactions } = useContext<any>(ExpenseTrackerContext);

    // console.log(globalState)

    // const addTransaction = [
    //     {
    //         id:1,
    //         type:'Income',
    //         category:'Salary',
    //         amount:50,
    //         date:"Wed, Dec 15",
    //     },
    //     {
    //         id:2,
    //         type:'Expense',
    //         category:'Pets',
    //         amount:50,
    //         date:"Wed, Dec 15",
    //     },
    //     {
    //         id:3,
    //         type:'Income',
    //         category:'Business',
    //         amount:50,
    //         date:"Wed, Dec 15",
    //     },
    //     {
    //         id:4,
    //         type:'Expense',
    //         category:'Salary',
    //         amount:50,
    //         date:"Wed, Dec 15",
    //     },
    // ];

    return (
        <MUIList dense={false} className={classes.list}>
            {transactions.map((transaction: any, key: any) => (
                <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar className={classes.left}>
                            <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense} style={{marginRight:'8px'}}>
                                <MoneyOff />
                            </Avatar>
                            <ListItemText primary={transaction.category} secondary={`${transaction.amount} - ${transaction.date}`}></ListItemText>
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="delete" onClick={() => deleteTransaction(transaction.id)}>
                                    <Delete />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItemAvatar>
                    </ListItem>
                </Slide>
            ))}
        </MUIList>
    )
}
