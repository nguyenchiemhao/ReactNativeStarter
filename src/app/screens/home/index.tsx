import React from 'react';
import {View, Text, Touchable, Button} from 'react-native';
import {useInjectReducer, useInjectSaga} from 'redux-injectors';
import {sliceKey, reducer} from './slice';
import {homeSaga} from './saga';
import {useDispatch, useSelector} from 'react-redux';
import {selectTitle} from './selector';
import database from '@react-native-firebase/database';
interface CompProps {
  // title: string;
}

const Home = (props: CompProps) => {
  useInjectReducer({key: sliceKey, reducer: reducer});
  useInjectSaga({key: sliceKey, saga: homeSaga});

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
        onPress={() =>
          database()
            .ref('count')
            .push()
            .set({
              name: 'Howie',
              age: 23,
            })
            .then(() => console.log('data has been set'))
        }
        title="Press me"
      />
    </View>
  );
};

export default Home;
