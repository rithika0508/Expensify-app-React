import { combineReducers, createStore } from 'redux';
import { v1 as uuidv1 } from 'uuid';
//add expense
const addExpense = ({ description = '',note = '', amount = 0,createdAt = 0 }={}) => {
    return {
        type:'ADD-EXPENSE',
        expenses:{
            id: uuidv1(),
            description,
            note,
            amount,
            createdAt
    }}
}

// delete expense
const deleteExpense = ({ id } = {}) => {
    return {
        type:'DELETE-EXPENSE',
        id,
    };
}

// edit expense

const editExpense = (id, updates) => ({
    type: 'EDIT-EXPENSE',
    id,
    updates
})
// set text filter
const setTextFilter = (text) => ({
    type:'SET-TEXT',
    text
})
// sort by  date
const sortByDate = () => ({
    type:'SORT-BY-DATE'
})
// sort by amount
const sortByAmount = () => ({
    type:'SORT-BY-AMOUNT'
})

// set start date
const setStartDate = (startDate) => ({
    type:'SET-START-DATE',
    startDate
})
// set end date
const setEndDate = (endDate = '') => ({
    type:'SET-END-DATE',
    endDate
})
//Expenses reducers
const expensesReducersDefaultState = []
const expensesReducers = (state = expensesReducersDefaultState, action) => {
    switch(action.type) {
        case 'ADD-EXPENSE':
            return [...state, action.expenses];
        case 'DELETE-EXPENSE':
            return state.filter((expense) => expense.id != action.id);
        case 'EDIT-EXPENSE':
            return state.map((expense) => {
                if(expense.id == action.id) {
                    return {
                        ...expense,
                        ...action.updates,
                    }
                } else {
                    return expense
                }
            })
        default: 
            return state;
    }
}

const filterReducerDefaultValue = {
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
}
const filterReducer = (state = filterReducerDefaultValue, action) => {
    switch(action.type) {
        case 'SET-TEXT':
            return {
                ...state,
                text:action.text
            }
        case 'SORT-BY-DATE':
            return {
                ...state,
                sortBy:'date'
            }
        case 'SORT-BY-AMOUNT':
            return {
                ...state,
                sortBy:'amount'
            }
        case 'SET-START-DATE':
            return {
                ...state,
                startDate:action.startDate
            }
        case 'SET-END-DATE':
            return {
                ...state,
                endDate:action.endDate
            }
        default:
            return state;
    }

}

//get vivsible expenses
const getVisibleExpenses = (expenses, { text , sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt<=endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch
    }).sort((a,b) => {
        if(sortBy == 'date') {
            return a.createdAt<b.createdAt ? 1: -1
        } else if(sortBy=='amount') {
            return a.amount<b.amount ? 1: -1
        }
        
    });
}

//store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducers,
        filter: filterReducer
    })
);

store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filter)
    console.log(visibleExpenses)
    // console.log(state)
})
const expenseOne = store.dispatch(addExpense({
    description:'Food',
    note:'Important',
    createdAt:1000,
    amount:100
}))
const expensetwo = store.dispatch(addExpense({
    description:'coffee',
    amount:150,
    createdAt:123
}))
const expensethree = store.dispatch(addExpense({
    description:'Tea',
    amount:100000,
    createdAt:12345
}))
// console.log({
//     ...expenseOne,
//     description: 'foooooooooooooood'
// })
// store.dispatch(deleteExpense({ id:expenseOne.expenses.id }))
store.dispatch(editExpense(expensethree.expenses.id, {  description:'Investment' }))
// console.log(updated)
// for filters

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter('Fo'));

//sorting
// store.dispatch(sortByAmount());
// store.dispatch((sortByDate()));


// store.dispatch(setStartDate(-12));
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(1250))
















// const demoState = {
//     expenses:[{
//         id:'12',
//         description:'Rent',
//         note:'This is mandatory',
//         amount:3000.00,
//         createdAt: 0
//     }],
//     filters: {
//         text:'rent',
//         sortBy:'amount', //date or amount
//         startDate: undefined,
//         endDate: undefined
//     }
// }

// object spread
// const user = {
//     name:'John',
//     age:23
// }
// console.log({
//     ...user,
//     location:"hyd",
//     age:27
// })
