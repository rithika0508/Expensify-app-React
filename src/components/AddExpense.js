import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';
const AddExpense = (props) => {
    return (
        <div>
            <h2>Add Expense</h2>
            <ExpenseForm onSubmit={(expense) => {
                props.dispatch(addExpense(expense));
                props.history.push('/')
            }} />
        </div>
    );

};

const Connected = connect()(AddExpense);
export default Connected;