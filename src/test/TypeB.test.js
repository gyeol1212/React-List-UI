import React from 'react';
import { mount } from 'enzyme';

import TypeB from '../containers/TypeB';

describe('Type A', () => {
  let wrapper;
  const itemList = [
    { index: 1 },
    { index: 2 },
    { index: 3 },
    { index: 4 },
    { index: 5 },
  ];

  it('renders Type B', () => {
    wrapper = mount(<TypeB itemList={itemList} />);
    expect(wrapper).toHaveLength(1);

    expect(wrapper.find('ItemB')).toHaveLength(itemList.length);
  });
});
