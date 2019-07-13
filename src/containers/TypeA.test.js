import React from 'react';
import { mount } from 'enzyme';

import TypeA from './TypeA';

describe('Type A', () => {
  let wrapper;
  const itemList = [
    { index: 1 },
    { index: 2 },
    { index: 3 },
    { index: 4 },
    { index: 5 },
  ];

  it('renders Type A', () => {
    wrapper = mount(<TypeA itemList={itemList} />);
    expect(wrapper).toHaveLength(1);

    expect(wrapper.find('ItemA')).toHaveLength(itemList.length);
  });
});
