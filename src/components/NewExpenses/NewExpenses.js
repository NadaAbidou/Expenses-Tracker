import React, { useState } from 'react'
import './NewExpenses.css'
import ExpensesForm from './ExpensesForm'

const NewExpenses = (props) => {

    const [isEditing, setIsEditing] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseDate = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseDate)
        /* console.log(expenseDate); */
        setIsEditing(false)
    };

    const startEditingHandler = () => {
        setIsEditing(true)
    }

    const stopEditingHandler = () => {
        setIsEditing(false)
    }
    return (
        <div className='new-expense'>
            {!isEditing ? <button onClick={startEditingHandler}>Add New Expense</button> : <ExpensesForm onsaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />
            }
        </div>
    )
}

export default NewExpenses