import React from 'react';
import { SingleExpense } from '../../components/SingleExpense';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import expenses from '../fixtures/expenses';

test('should render single expenses', () => {
    const wrapper = shallow(<SingleExpense {...expenses[0]}/>)
    expect(toJSON(wrapper)).toMatchSnapshot()
})
