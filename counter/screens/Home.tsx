import {View, Pressable, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../rtk/state/configureStore';
import counterSlice from '../rtk/slice/counterSlice';

const Home = () => {
  const dispatch = useDispatch();
  const count = useSelector<RootState>(state => state.counter.count);
  const actions = counterSlice.actions;

  return (
    <View style={styles.container}>
      <Text style={styles.count}> {count} </Text>

      <Pressable
        onPress={() => {
          dispatch(actions.increment());
        }}>
        <Text style={styles.increment}>Increment</Text>
      </Pressable>

      <Pressable
        onPress={() => {
          dispatch(actions.decrement());
        }}>
        <Text style={styles.decrement}>Decrement</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
  },
  count: {
    textAlign: 'center',
    fontSize: 50,
    color: 'black',
  },
  increment: {
    textAlign: 'center',
    fontSize: 20,
    margin: 20,
    borderRadius: 10,
    padding: 20,
    backgroundColor: '#11ffcc',
  },
  decrement: {
    textAlign: 'center',
    fontSize: 20,
    margin: 20,
    borderRadius: 10,
    padding: 20,
    backgroundColor: '#ee5253',
  },
});

export default Home;
