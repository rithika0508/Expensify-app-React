import React from 'react';
import { NavLink } from 'react-router-dom';
export const SingleExpense = ({ id, description, note, amount, createdAt }) => {
    return (
        <div>
            <NavLink to={`/edit/${id}`}><h3>{description}</h3></NavLink>
            <p>{amount}-{createdAt}</p>
        </div>
    );
};

export default SingleExpense;