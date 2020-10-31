import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import 'react-native-gesture-handler';

import ProductsOverviewScreen from './screens/shop/ProductsOverviewScreen';

// Navigation import
import ShopNavigator from './navigation/ShopNavigator';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

/* Redux setup starts */
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import productsReducer from './store/reducers/products';

const rootreducer = combineReducers({
  products: productsReducer,
});

const store = createStore(rootreducer);

/*Redux setup ends*/

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
});
