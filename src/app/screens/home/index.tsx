import React from 'react';
import {View, Text, Button} from 'react-native';
import {useInjectReducer, useInjectSaga} from 'redux-injectors';
import {sliceKey, reducer} from './slice';
import {homeSaga} from './saga';
import {useDispatch, useSelector} from 'react-redux';
import {selectTitle} from './selector';
import database from '@react-native-firebase/database';
import {useNavigation} from '@react-navigation/native';
interface CompProps {
  // title: string;
}

const Home = (props: CompProps) => {
  useInjectReducer({key: sliceKey, reducer: reducer});
  useInjectSaga({key: sliceKey, saga: homeSaga});
  const navigation: any = useNavigation();

  const title = useSelector(selectTitle);

  const dispasth = useDispatch();

  database()
    .ref('/test')
    .on('value', (snapshot) => console.log('data', snapshot.val()));

  database()
    .ref('/count')
    .on('value', (snapshot) => console.log('data1', snapshot.val()));
  return (
    <View>
      <Text> {title} </Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.push('Details')}
      />
    </View>
  );
};

export default Home;
