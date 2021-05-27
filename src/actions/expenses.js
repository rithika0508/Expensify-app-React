// import { v1 as uuidv1 } from 'uuid';

import database from '../firebase/firebase';

//add expense
export const addExpense = (expenses) => {
    return {
        type: 'ADD-EXPENSE',
        expenses
    }
}

export const startAddExpense = (expenseData = {}, dispatch) => {
    
    const { description = '', note = '', amount = 0, createdAt = 0 } = expenseData;
    const expense = {
        description,
        note,
        amount,
        createdAt
    }
    database.ref('expenses').push(expense).then((ref) => {
        dispatch(addExpense({
            id: ref.key,
            ...expense
        }))
    });

}


// delete expense
export const deleteExpense = ({ id } = {}) => {
    return {
        type: 'DELETE-EXPENSE',
        id,
    };
}

export const startDeleteExpense = (id, dispatch) => {
    database.ref(`expenses/${id}`).remove().then(() => {
        dispatch(deleteExpense({ id }))
    })
}

// edit expense

export const editExpense = (id, updates) => {

    return {
        type: 'EDIT-EXPENSE',
        id,
        updates
    }
}

export const startEditExpense = (id, updates, dispatch) => {
    database.ref(`expenses/${id}`).update(updates).then(() => {
        dispatch(editExpense(id, updates));
    });
}

export const setExpense = (expenses) => {
    return {
        type: 'SET-EXPENSE',
        expenses
    }
}

// export const startSetExpenses = (dispatch) => {
//     database.ref('expenses').once('value').then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id:childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })
//         console.log(expenses);
//         dispatch(setExpense(expenses));
//     })
    
// }