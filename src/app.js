import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Approuter from './routers/App-router';
import configureStore from './store/configurestore';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore()

const jsx = (
    <Provider store={store}>
        <Approuter />
    </Provider>
) // provider will make us access the store in all files

ReactDOM.render(jsx , document.getElementById('app'));