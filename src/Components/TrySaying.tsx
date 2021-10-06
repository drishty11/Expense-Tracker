import React from 'react'

const isIncome = Math.round(Math.random());

export const TrySaying = () => {
    return (
        <div style={{ textAlign: 'center' }}>
          Try saying: <br /> 
          Add {isIncome ? 'Income ' : 'Expense '} 
          for {isIncome ? '$100 ' : '$50 '}  
          in Category {isIncome ? 'Salary ' : 'Travel '}
          for {isIncome ? 'Monday ' : 'Thursday '}
        </div>
      );
}
