import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import { css } from '../../styles';
 
export default class AddAccount extends Component {
    static navigationOptions = ({navivate}) => ({
        title: 'New Account',
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
            </View>
        );
    }
}