import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Platform} from 'react-native';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import Colors from '../constants/Colors';

const Stack = createStackNavigator();

export default function ShopNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
          },
          headerTitleStyle: {
            fontFamily: 'OpenSans-Bold',
          },
          headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
        }}>
        <Stack.Screen
          name="ProductsOverview"
          component={ProductsOverviewScreen}
          options={{title: 'All Products'}}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetailScreen}
          options={(props) => ({title: props.route.params.productTitle})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
