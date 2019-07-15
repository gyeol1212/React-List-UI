import React from 'react';
import { mount } from 'enzyme';

import ItemA from '../components/ItemA';

describe('Item A', () => {
  let wrapper;

  it('renders Item A', () => {
    wrapper = mount(<ItemA />);
    expect(wrapper).toHaveLength(1);
  });

  it('match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
