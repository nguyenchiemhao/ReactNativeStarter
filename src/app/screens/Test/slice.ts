import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the Test container
export const initialState: ContainerState = {};

const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions: testActions, reducer, name: sliceKey } = testSlice;