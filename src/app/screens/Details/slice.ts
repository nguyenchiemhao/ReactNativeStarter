import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the Details container
export const initialState: ContainerState = {};

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions: detailsActions, reducer, name: sliceKey } = detailsSlice;