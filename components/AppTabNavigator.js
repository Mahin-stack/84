import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator'
import Exchange from '../screens/Exchange';

export const AppTabNavigator = createBottomTabNavigator({
  HomeScreen : {
    screen: AppStackNavigator,
    navigationOptions :{
      tabBarIcon :   <Image source={require("../assets/request-book.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "HomeScreen",
    }
  },
  Exchange: {
    screen: Exchange,
    navigationOptions :{
      tabBarIcon :<Image source={require("../assets/request-list.png")} style={{width:20, height:20,}} />,
      tabBarLabel : "Exchange",
    }
  }
});
