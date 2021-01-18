import React from 'react';
import SectionHeader from './SectionHeader';
import renderer from 'react-test-renderer';

describe('SectionHeader', () => {
  it('should render correctly', () => {
    const header = renderer.create(<SectionHeader title="Test" />).toJSON;
    expect(header).toMatchSnapshot();
  });
});
