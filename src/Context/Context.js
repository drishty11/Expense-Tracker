import React, {useReducer, createContext} from 'react';
import contextReducer from './ContextReducer';

// const initialState = [];
// const initialState = JSON.parse(localStorage.getItem('transactions')) || [];
const initialState = JSON.parse(localStorage.getItem("transactions") || []);
console.log(initialState)

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({children}) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState)

    //Action Creators
    const deleteTransaction = (id) => {
        dispatch({type: 'DELETE_TRANSACTION', payload: id})
    }
    const AddTransaction = (transaction) => {
        dispatch({type: 'ADD_TRANSACTION', payload: transaction})
    }

    // console.log(transactions);
    const balance = transactions.reduce((acc, currVal) => (currVal.type === 'Expenses' ? acc - currVal.amount : acc + currVal.amount), 0);

    return (
        <ExpenseTrackerContext.Provider value={{
            // appName: 'Expense Tracker',
            deleteTransaction,
            AddTransaction,
            balance,
            transactions,
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}