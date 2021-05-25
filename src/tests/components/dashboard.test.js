import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboardPage from '../../components/dashboard';
import toJSON from 'enzyme-to-json';

test('should render header correctly', () => {
    const wrapper = shallow(<ExpenseDashboardPage />)
    expect(toJSON(wrapper)).toMatchSnapshot();

    // const renderer = new ReactShallowRenderer()
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
})