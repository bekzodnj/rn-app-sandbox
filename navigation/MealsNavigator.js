import {createStackNavigator} from '@react-navigation/stack';
import {createAppContainer} from '@react-navigation/native';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {title: 'My app'},
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
      params: {user: 'me'},
    },
    MealDetail: {
      screen: MealDetailScreen,
      params: {user: 'me'},
    },
  },
  {
    initialRouteName: 'Categories',
    defaultNavigationOptions: {
      gestureEnabled: false,
    },
  },
);

export default MealsNavigator;
