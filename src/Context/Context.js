import React, {useReducer, createContext} from 'react';
import contextReducer from './ContextReducer';

// const initialState = [];
const initialState = JSON.parse(localStorage.getItem('transactions')) || [{amount: 400, category: "Deposits", type: "Income", date: "2021-10-02", id: "1ee3f9ca-254b-47fe-a6de-af38cdb32341"}, {amount: 100, category: "Car", date: "2021-10-06", id: "5ae8e1ab-48e3-4530-b423-6c414f40aee3", type: "Expenses"}];

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