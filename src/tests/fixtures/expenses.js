import moment from 'moment'
const expenses = [
    {
        id:'1',
        description:'Water Bill',
        note: '',
        amount: '500',
        createdAt: 0
    },
    {
        id: '2',
        description: 'Rent bill',
        note:'',
        amount: 1000,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    }, {
        id: '3',
        description: 'Gas bill',
        note:'',
        amount: 800,
        createdAt: moment(0).add(4, 'days').valueOf()
    }
]

export default expenses;