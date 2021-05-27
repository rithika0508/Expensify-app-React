import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Approuter from './routers/App-router';
import configureStore from './store/configurestore';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';
import database, { firebase } from './firebase/firebase';
import { setExpense } from './actions/expenses';
const store = configureStore()

const jsx = (
    <Provider store={store}>
        <Approuter />
    </Provider>
) // provider will make us access the store in all files




database.ref('expenses').once('value').then((snapshot) => {
    const expenses = [];
    snapshot.forEach((childSnapshot) => {
        expenses.push({
            id:childSnapshot.key,
            ...childSnapshot.val()
        })
    })
    store.dispatch(setExpense(expenses));
    ReactDOM.render(jsx , document.getElementById('app'));
})



ReactDOM.render(<p>Loading...</p> , document.getElementById('app'));

