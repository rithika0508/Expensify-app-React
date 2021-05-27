import React from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
export const SingleExpense = ({ id, description, note, amount, createdAt }) => {
    return (
        <div>
            <NavLink to={`/edit/${id}`}><h3>{description}</h3></NavLink>
            <p>{numeral(amount).format('$0,0.00')}
            -
            {moment(createdAt).format('Do MMM, YYYY')}</p>
        </div>
    );
};

export default SingleExpense;