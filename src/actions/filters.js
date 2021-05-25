


// set text filter
export const setTextFilter = (text = '') => ({
    type:'SET-TEXT',
    text
})
// sort by  date
export const sortByDate = () => ({
    type:'SORT-BY-DATE'
})
// sort by amount
export const sortByAmount = () => ({
    type:'SORT-BY-AMOUNT'
})

// set start date
export const setStartDate = (startDate) => ({
    type:'SET-START-DATE',
    startDate
})
// set end date
export const setEndDate = (endDate = '') => ({
    type:'SET-END-DATE',
    endDate
})