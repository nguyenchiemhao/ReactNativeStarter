import { Reducer, AnyAction } from '@reduxjs/toolkit';
import { SagaInjectionModes } from 'redux-injectors';
import { Saga } from 'redux-saga';
import { RootState } from "./RootState";

type RequiredRootState = Required<RootState>;

export type RootStateKeyType = keyof RootState;

export type InjectedReducersType = {
  [P in RootStateKeyType]?: Reducer<RequiredRootState[P], AnyAction>;
}

export interface InjectedReducerParams<Key extends RootStateKeyType> {
  key: Key;
  reducer: Reducer<RequiredRootState[Key], AnyAction>
}

export interface InjectSagaPrams {
  key: RootStateKeyType | string;
  saga: Saga;
  mode: SagaInjectionModes
}