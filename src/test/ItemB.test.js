import React from 'react';
import { mount } from 'enzyme';

import ItemB from '../components/ItemB';

describe('Item B', () => {
  let wrapper;

  it('renders Item A', () => {
    wrapper = mount(<ItemB />);
    expect(wrapper).toHaveLength(1);
  });

  it('match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
