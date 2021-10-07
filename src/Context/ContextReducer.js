// Reducer =>  a function which takes in the old state, an action and returns to the new state

// const transactions = [
//     {id:1},
//     {id:2},
//     {id:3},
// ]
const ContextReducer = (state, action) => {
    let transactions;

    
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            transactions = state.filter((t) => t.id !== action.payload)
            localStorage.setItem('transactions', JSON.stringify(transactions));
            return transactions;
            
        case 'ADD_TRANSACTION':
            transactions = [action.payload, ...state]
            localStorage.setItem('transactions', JSON.stringify(transactions));
            return transactions;
    
        default:
            return state;
    }
}

export default ContextReducer;
