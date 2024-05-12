import React from 'react';
import { mount } from 'enzyme';
import SortProductData from './Components/SortProductData';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-preact-pure';

configure({ adapter: new Adapter() });



describe('SortProductData Component', () => {
  it('renders the component without crashing', () => {
    const wrapper = mount(<SortProductData />);
    expect(wrapper.exists()).toBe(true);
  });
});