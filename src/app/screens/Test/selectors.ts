import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../redux/RootState';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.test || initialState;

export const selectTest = createSelector(
  [selectDomain],
  testState => testState,
);
