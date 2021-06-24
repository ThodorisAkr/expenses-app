
import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm'
import './NewExpense.css';

const NewExpense = (props) => {

    const [newExpenseFlag, setNewExpenseFlag] = useState(false);
    
    const newExpenseFlagHandler = () => {
        setNewExpenseFlag(newExpenseFlag => !newExpenseFlag);
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        props.onAddExpense(expenseData);
        newExpenseFlagHandler();
    };

    return (
        <div className="new-expense"> 
         {!newExpenseFlag &&   <button onClick={newExpenseFlagHandler}>Add New Expense</button>}
         { newExpenseFlag &&   <ExpenseForm 
                            onSaveExpenseData={saveExpenseDataHandler}
                            onCancelNewExpense={newExpenseFlagHandler}
                            />}
        </div>

    );

}

export default NewExpense