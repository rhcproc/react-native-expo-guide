import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
// import {rootReducer} from './rtk/store/configureStore';
// import {ApiProvider}
import {Provider} from 'react-redux';
import store from './rtk/store';



export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
    
    // <View style={styles.container}>
    //   <Text>Open up App.tsx to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
