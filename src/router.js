import React from 'react';
import {Icon } from 'react-native-elements';
import { StackNavigator, TabNavigator } from 'react-navigation';


import Welcome from './screens/Welcome';
import Dashboard from './screens/Dashboard';
import AddAccount from './screens/AddAccount';
import IncomeScreen from './screens/IncomeScreen';
import Registration from './screens/Registration';
import AccountLists from './screens/AccountLists';
import ExpensesScreen from './screens/ExpensesScreen';

import {css} from '../styles';


const AuthorizedTab = TabNavigator({
    dashboard: { screen: Dashboard },//dashboard
    accounts: { screen: AccountLists },//accounts
    income: { screen: IncomeScreen },//transactions
    payments: { screen: ExpensesScreen }//support
},{
    tabBarOptions: {
        showLabel: false,
        showIcon: true,
        style: {
            backgroundColor: css().tabHeaderColor,
        },
        labelStyle: {
            fontSize: 11,
        },
        indicatorStyle:{
            backgroundColor: 'white',
        }
    },
    //tabBarPosition: 'bottom',
    navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'dashboard') {
              iconName = `ios-home${focused ? '' : '-outline'}`;
            } else if (routeName === 'accounts') {
              iconName = `ios-paper${focused ? '' : '-outline'}`;
            } else if (routeName === 'income') {
              iconName = `ios-stats${focused ? '' : '-outline'}`;
            } else if (routeName === 'payments') {
              iconName = `ios-chatboxes${focused ? '' : '-outline'}`;
            }    
            return <Icon name={iconName} size={25} type='ionicon' color={tintColor} />;
        },
    })
});

const UnauthorizedStack = StackNavigator({
    //auth: { screen: AuthScreen },
    welcome: { screen: Welcome },
    registration: { screen: Registration },
    index: { screen: AuthorizedTab },
    addaccount: { screen: AddAccount }
},{
    headerTitleStyle: {
        fontWeight: '400'
    }
});

export default UnauthorizedStack;