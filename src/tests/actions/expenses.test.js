import { addExpense, deleteExpense, editExpense } from '../../actions/expenses';

test('should setup deleteExpense action generator', () => {
    const action = deleteExpense({ id: '123abc' });
    expect(action).toEqual({
        type:'DELETE-EXPENSE',
        id : '123abc'
    })
})

test('should setup editExoense action generator', () => {
    const action = editExpense('123abc', { description: 'House bill', amount:0 } );
    expect(action).toEqual({
        type: 'EDIT-EXPENSE',
        id:'123abc',
        updates : {
            description: 'House bill',
            amount:0
        }
    })
})

test('should set up addExpense action object with provided values', () =>{
    const expenseData = {
        description: 'Rent',
        amount:2000,
        note: 'Important Expense',
        createdAt: 1000,
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type:'ADD-EXPENSE',
        expenses: {
            id:expect.any(String),
            ...expenseData,
        }
    })
})

test('should set up add Expense action object with no values', () => {
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD-EXPENSE',
        expenses: {
            id: expect.any(String),
            description: '',
            amount: 0,
            note: '',
            createdAt: 0
        }
    })
})