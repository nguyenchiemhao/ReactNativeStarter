import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContainerState } from "./types";

export const initialState: ContainerState = {
  // initialState
  title: "Hello world"
};

const homeSlice = createSlice({
  name: 'homeSlice',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) { }
  }
})

export const { actions: homeActions, reducer: homeReducer, name: homeKey } = homeSlice;