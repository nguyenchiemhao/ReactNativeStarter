/**
 *
 * Details
 *
 */

import React from 'react';
import {View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import styles from './styles';
import {useInjectReducer, useInjectSaga} from 'redux-injectors';
import {reducer, sliceKey} from './slice';
import {selectDetails} from './selectors';
import {detailsSaga} from './saga';

interface Props {}

export function Details(props: Props) {
  useInjectReducer({key: sliceKey, reducer: reducer});
  useInjectSaga({key: sliceKey, saga: detailsSaga});

  const details = useSelector(selectDetails);
  const dispatch = useDispatch();

  return (
    <View>
      <Text>details</Text>
    </View>
  );
}
