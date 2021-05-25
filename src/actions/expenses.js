import { v1 as uuidv1 } from 'uuid';

//add expense
export const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => {
    return {
        type: 'ADD-EXPENSE',
        expenses: {
            id: uuidv1(),
            description,
            note,
            amount,
            createdAt
        }
    }
}

// delete expense
export const deleteExpense = ({ id } = {}) => {
    return {
        type: 'DELETE-EXPENSE',
        id,
    };
}

// edit expense

export const editExpense = (id, updates) => {
    
    return {
        type: 'EDIT-EXPENSE',
        id,
        updates
    }
    
}