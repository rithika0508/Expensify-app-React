import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startEditExpense, startDeleteExpense } from '../actions/expenses';
const EditExpense = (props) => {
    return (
        <div>
            This is edit expense page of id {props.match.params.id}
            <ExpenseForm expense={props.expense} onSubmit={(expense) => {
                const id=props.match.params.id;
                startEditExpense(id, expense, props.dispatch)
                // props.dispatch(starteditExpense(id, expense))
                props.history.push('/')
            }}
            deleteExpense={({ id }) => {
                startDeleteExpense(id, props.dispatch)
                props.history.push('/');
            }}/>
        </div>
    );
};
const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id == props.match.params.id),
        allexpenses: state.expenses
    }
}
const Connected = connect(mapStateToProps)(EditExpense)
export default Connected;