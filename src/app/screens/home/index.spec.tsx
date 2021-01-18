import React from 'react';
import Home from '.';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {configureAppStore} from 'src/redux/store';

describe('Home', () => {
  let store: ReturnType<typeof configureAppStore>;

  beforeEach(() => {
    store = configureAppStore();
  });
  it('should render correctly', () => {
    const header = renderer.create(
      <Provider store={store}>
        <Home />
      </Provider>,
    ).toJSON;
    expect(header).toMatchSnapshot();
  });
});
