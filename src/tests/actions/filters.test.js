import moment from 'moment';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../actions/filters';

test('should set up startDate action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:'SET-START-DATE',
        startDate: moment(0)
    })
});

test('should generate setEndDate action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET-END-DATE',
        endDate: moment(0)
    })
})

test('should generate setTextFilter with text value', () => {
    const action = setTextFilter('bill');
    expect(action).toEqual({
        type:'SET-TEXT',
        text: 'bill'
    });
})

test('shoull generate setTextFilter with no value', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type:'SET-TEXT',
        text:''
    })
})

test('should generate sortByDate action object', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT-BY-DATE'
    })
})

test('should generate sortByAmount action object', () => {
    const action = sortByAmount()
    expect(action).toEqual({
        type:'SORT-BY-AMOUNT'
    })
})