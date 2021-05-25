import moment from 'moment';

const filterReducerDefaultValue = {
    text:'',
    sortBy:'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
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
export default filterReducer;
