import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import home from './src/screens/home';
import search from './src/screens/search';
import notification from './src/screens/notification';
import profile from './src/screens/profile';

const Navegador = createBottomTabNavigator({
      home:{
        screen:home
      },
      search:{
        screen:search
      },
      notification:{
        screen:notification
      },
      profile:{
        screen:profile
      }
},{ tabBarPosition:'bottom',
    tabBarOptions:{
        inactiveBackgroundColor:'#003366',
        activeBackgroundColor: '#003366',
        activeTintColor:'black',
        showLabel:true
    }
});

const AppContainer = createAppContainer(Navegador);
export default AppContainer;
