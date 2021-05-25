import React from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import Header from '../components/Header';
import notfoundpage from '../components/404page';
import helpPage from '../components/HelpPage';
import EditExpense from '../components/EditExpense';
import AddExpense from '../components/AddExpense';
import ExpenseDashboardPage from '../components/dashboard';

const Approuter = () => (
    <BrowserRouter>
    <div>
    <Header />
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpense}/>
            <Route path="/edit/:id" component={EditExpense}/>
            <Route path="/help" component={helpPage}/>
            <Route component={notfoundpage}/>
        </Switch>
    </div>
        
    </BrowserRouter>
);
export default Approuter;