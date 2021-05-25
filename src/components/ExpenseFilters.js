import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';

class ExpenseFilters extends React.Component {
    state = {
        calendarFocused: null,
    }
    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }
    render() {
        return (
            <div>
                <input
                type="text" 
                defaultValue={this.props.filters.text} 
                onChange={(e) => this.props.dispatch(setTextFilter(e.target.value))}
                autoFocus/>
    
                <select defaultValue="date" onChange={(e) => {
                    if(e.target.value=="date") {
                        this.props.dispatch(sortByDate());
                    } else if(e.target.value=="amount") {
                        this.props.dispatch(sortByAmount());
                    }
                }}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
    
                <DateRangePicker 
                startDate={this.props.filters.startDate}
                endDate={this.props.filters.endDate}
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.calendarFocused}
                showClearDates={true}
                onFocusChange={(focusedInput) => this.setState(() => ({ calendarFocused:focusedInput }))}
                numberOfMonths={1}
                isOutsideRange={() => false}/>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        filters:state.filter
    }
}
const Connected = connect(mapStateToProps)(ExpenseFilters)
export default (Connected);