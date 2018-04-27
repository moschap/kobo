import { Icon } from 'react-native-elements';
import { StackNavigator, TabNavigator } from 'react-navigation';

import Welcome from './screens/Welcome';
import Dashboard from './screens/Dashboard';
import AddAccount from './screens/AddAccount';
import Registration from './screens/Registration';
import AccountLists from './screens/AccountLists';

import {css} from '../styles';


const AuthorizedTab = TabNavigator({
    dashboard: { screen: Dashboard },
    accounts: { screen: AccountLists }
},{
    tabBarOptions: {
        style: {
            backgroundColor: css().tabHeaderColor,
        },
        indicatorStyle:{
            backgroundColor: 'white',
        }
    },
    navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'dashboard') {
              iconName = `ios-information-circle${focused ? '' : '-outline'}`;
            } else if (routeName === 'accounts') {
              iconName = `ios-options${focused ? '' : '-outline'}`;
            }
    
            // You can return any component that you like here! We usually use an
            // icon component from react-native-vector-icons
            console.warn(iconName);
            return <Icon name={iconName} size={25} color={tintColor} />;
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