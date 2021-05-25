import moment from 'moment';
import filterReducer from '../../reducers/filters';

test('should set up default values', () => {
    const action = filterReducer(undefined, { type: '@@INIT' })
    expect(action).toEqual({
        text: '',
        sortBy: 'date',
        startDate : moment().startOf('month'),
        endDate : moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filterReducer(undefined, { type: 'SORT-BY-AMOUNT' })
    expect(state.sortBy).toBe('amount');
});

test('shuld set sortBy to date', () => {
    const currentState = {
        text:'',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const state = filterReducer( currentState, { type:'SORT-BY-DATE'    } )
    expect(state.sortBy).toBe('date')
})

test('should set text filter', () => {
    const state = filterReducer(undefined, { type:'SET-TEXT', text: 'bill' })
    expect(state.text).toBe('bill');
})

test('should set startDate filter', () => {
    const state = filterReducer(undefined, { type:'SET-START-DATE', startDate: moment().startOf('month') })
    expect(state.startDate).toEqual(moment().startOf('month'))
})

test('should set endDate filter', () => {
    const state = filterReducer(undefined, { type:'SET-END-DATE', endDate: moment().endOf('month') })
    expect(state.endDate).toEqual(moment().endOf('month'))
})