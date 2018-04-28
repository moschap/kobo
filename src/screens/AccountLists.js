import React, { Component } from 'react';
import ActionButton from 'react-native-action-button';
import {
    View,
    Text
} from 'react-native';
import { Icon } from 'react-native-elements';

import { css } from '../../styles';


 
export default class AccountLists extends Component {
    static navigationOptions = ({navivate}) => ({
        title: 'Accounts',
        headerStyle: {
            backgroundColor: css().navHeaderColor,
            elevation: 0, //remove shadow on Android
            shadowOpacity: 0,
            borderColor: '#1d282d'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: '400'
        }
    });
    
    render() {
        return(
            <View style={css().normalContainerLight}>                
                <Text style={css().notice}>
                AccountList
                </Text>
                <ActionButton
                    buttonColor='#223ca2'//{css().tabHeaderColor}//"rgba(231,76,60,1)"
                    onPress={() => this.props.navigation.navigate('addaccount')}
                />
            </View>
        );
    }
}