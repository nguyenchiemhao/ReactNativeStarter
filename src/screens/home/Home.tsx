import React from 'react';
import {View, Text} from 'react-native';
import {useInjectReducer, useInjectSaga} from 'redux-injectors';
import {homeKey, homeReducer} from './slice';
import {homeSaga} from './saga';
import {useDispatch, useSelector} from 'react-redux';
import {selectTitle} from './selector';

interface CompProps {
  // title: string;
}

const Home = (props: CompProps) => {
  useInjectReducer({key: homeKey, reducer: homeReducer});
  useInjectSaga({key: homeKey, saga: homeSaga});

  const title = useSelector(selectTitle);

  const dispasth = useDispatch();

  return (
    <View>
      <Text> {title} </Text>
    </View>
  );
};

export default Home;
