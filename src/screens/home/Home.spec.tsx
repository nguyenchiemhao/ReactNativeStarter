import React from 'react';
import Home from './Home';
import renderer from 'react-test-renderer';

describe('Home', () => {
  it('should render correctly', () => {
    const header = renderer.create(<Home />).toJSON;
    expect(header).toMatchSnapshot();
  });
});
