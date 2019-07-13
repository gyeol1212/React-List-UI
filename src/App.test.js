import React from 'react';
import renderer from 'react-test-renderer';

import App from './App';

describe('ListUI', () => {
  let component = null;

  it('first rendering', () => {
    component = renderer.create(<App />);
  });

  it('match snapshot', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
