import { createSelector } from '@reduxjs/toolkit';
import { initialState } from "./slice";
import { RootState } from './../../redux/RootState';


const selectDomain = (state: RootState) => state.homeState || initialState;

export const selectTitle = createSelector([selectDomain], state => state.title)