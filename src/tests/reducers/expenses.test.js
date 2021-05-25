import expensesReducers from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


test('should set default state', () => {
    const state = expensesReducers(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
})

test('should set removeExpense action object', () => {
    const state = expensesReducers(expenses, { type: 'DELETE-EXPENSE', id: '2' });
    expect(state).toEqual([expenses[0], expenses[2]]);
})

test('should set removeExpense action object id id not found', () => {
    const state = expensesReducers(expenses, { type: 'DELETE-EXPENSE', id: '-1' });
    expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
})

test('should add expense action object', () => {
    const actionObj = {
        type: 'ADD-EXPENSE',
        expenses: {
            id: '4',
            description: 'Credit card',
            amount: 3000,
            note:'',
            createdAt: 1000,
        }

    }
    const state = expensesReducers(expenses, actionObj)
    expect(state).toEqual([...expenses, actionObj.expenses])
})
test('should edit a expense when id is given', () => {
    const actionObj = {
        type: 'EDIT-EXPENSE',
        id: '2',
        updates: {
            description: 'Cooking bill'
        }
    };
    const state = expensesReducers(expenses, actionObj);
    expect(state[1].description).toBe('Cooking bill');
})


test('should edit a expense when id is not given or incorrect', () => {
    const actionObj = {
        type: 'EDIT-EXPENSE',
        id:'-1',
        updates: {
            description: 'Cooking bill'
        }
    };
    const state = expensesReducers(expenses, actionObj);
    expect(state).toEqual(expenses);
})
