import React from 'react';
import { shallow } from 'enzyme';
import { AllExpenses } from '../../components/Allexpenses';
import toJSON from 'enzyme-to-json';
import expenses from '../fixtures/expenses';

test('should render ExpenseList with expenses', () => {
    const wrapper = shallow(<AllExpenses expenses={expenses}/>)
    expect(toJSON(wrapper)).toMatchSnapshot()
})

test('should render AllExpenses with empty expenses', () => {
    const wrapper = shallow(<AllExpenses expenses={[]}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
})
