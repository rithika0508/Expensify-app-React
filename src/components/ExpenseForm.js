import React from 'react';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';
export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            description: props.expense? props.expense.description: '',
            amount: props.expense ? props.expense.amount : '',
            note: props.expense ? props.expense.note : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocus: false,
            error: ''
        }
    }
    onDateChange = (date) => {
        this.setState(() => ({ createdAt: date }))
    }
    addExpense = (e) => {
        
        e.preventDefault();
        if(!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'Please give description and amount!' }))
        }
        else {
            this.setState(() => ({ error: '' }))
            const expense = {
                description: this.state.description,
                amount: this.state.amount,
                note:this.state.note,
                createdAt: this.state.createdAt.valueOf()
            }
            this.props.onSubmit(expense)
        }
    }
    deleteExpense = () => {
        this.props.deleteExpense(this.props.expense)
    }
    render() {
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.addExpense}>
                    <input
                        type="text"
                        placeholder="Description"
                        defaultValue={this.state.description}
                        onChange={(e) => {
                            const description = e.target.value;
                            this.setState(() => ({ description }))
                        }} />

                    <input
                        type="number"
                        placeholder="Amount"
                        defaultValue={this.state.amount}
                        onChange={(e) => {
                            const amount = e.target.value;
                            this.setState(() => ({ amount }))
                        }} />

                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocus}
                        onFocusChange={({ focused }) => this.setState({ calendarFocus: focused })}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />

                    <textarea placeholder="Add a note(Optional)" 
                    defaultValue={this.state.note}
                    onChange={(e) => this.setState(() => ({ note:e.target.value }))}></textarea>
                    <button>Add</button>
                </form>
                { this.props.expense && <button onClick={this.deleteExpense}>Remove Expense</button>}
            </div>
        );
    }
}