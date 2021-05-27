
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
                });
        case 'SET-EXPENSE':
            console.log(action.expenses)
            return action.expenses;
        default: 
            return state;
    }
}
export default expensesReducers;
