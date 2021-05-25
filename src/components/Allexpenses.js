import React from 'react';
import { connect } from 'react-redux';
import SingleExpense from './SingleExpense';
import visibleexpenses from '../selectors/expenses'


export const AllExpenses = (props) => {
    return (
        <div>
            {props.expenses.length==0 && <p>Add an expense to get started!</p>}
            {props.expenses.map((expense) => <SingleExpense key={expense.id} {...expense}/>)}
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        expenses: visibleexpenses(state.expenses, state.filter)
    }
}
const Connected = connect(mapStateToProps)(AllExpenses);
export default Connected;