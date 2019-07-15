import React from 'react';
import { mount } from 'enzyme';

import ListUI from '../ListUI';

describe('ListUI', () => {
  let wrapper = null;
  const itemList = [
    { index: 1 },
    { index: 2 },
    { index: 3 },
    { index: 4 },
    { index: 5 },
  ];

  it('type A renders correctly', () => {
    wrapper = mount(<ListUI type='A' itemList={itemList} />);

    // itemList 잘 전달 되었는지 확인
    expect(wrapper.find('TypeA').props().itemList).toEqual(itemList);

    // ItemA Component가 List의 길이만큼 그려졌는지 확인
    expect(wrapper.find('ItemA')).toHaveLength(itemList.length);
  });
  it('type B renders correctly', () => {
    wrapper = mount(<ListUI type='B' itemList={itemList} />);

    // itemList 잘 전달 되었는지 확인
    expect(wrapper.find('TypeB').props().itemList).toEqual(itemList);

    // ItemA Component가 List의 길이만큼 그려졌는지 확인
    expect(wrapper.find('ItemB')).toHaveLength(itemList.length);
  });
});
