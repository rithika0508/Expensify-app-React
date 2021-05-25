import React from 'react';
import { shallow } from 'enzyme';
import Notfoundpage from '../../components/404page';
import toJSON from 'enzyme-to-json';

test('should render header correctly', () => {
    const wrapper = shallow(<Notfoundpage />)
    expect(toJSON(wrapper)).toMatchSnapshot();

    // const renderer = new ReactShallowRenderer()
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
})