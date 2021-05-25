import React from 'react';
import ExpenseFilters from './ExpenseFilters';
import AllExpenses from './Allexpenses';

export const ExpenseDashboardPage = (props) => {
    return (
        <div>
            <ExpenseFilters />
           <AllExpenses />
        </div>
    );
};

export default ExpenseDashboardPage;