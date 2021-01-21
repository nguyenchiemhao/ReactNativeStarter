import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../redux/RootState';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.details || initialState;

export const selectDetails = createSelector(
  [selectDomain],
  detailsState => detailsState,
);
