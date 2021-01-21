/**
*
* Test
*
*/

import React from 'react';
import {View, Text} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles';

import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectTest } from './selectors';
import { testSaga } from './saga';

interface Props {}


export function Test(props: Props) {
useInjectReducer({ key: sliceKey, reducer: reducer });
useInjectSaga({ key: sliceKey, saga: testSaga });

const test = useSelector(selectTest);
const dispatch = useDispatch();

return (
  <View>
    <Text>test</Text>
  </View>
);
};