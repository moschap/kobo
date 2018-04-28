import React, { Component } from 'react';
import {
    PermissionsAndroid,
    View,
    Text
} from 'react-native';
import SmsAndroid  from 'react-native-get-sms-android';

import { css } from '../../styles';
 
const perms = [
    'android.permission.READ_SMS'
];

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

    async componentDidMount() {
        const granted = await PermissionsAndroid.requestMultiple(perms);
        if (
            granted['android.permission.READ_SMS'] === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('You can load SMS');
        } else {
            Alert.alert(
            'Denied Permissions',
            'Rejecting any permission may impact negatively on your usage experience. ' +
            'Kindly enable the permissions from your phone settings.',
            [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
            { cancelable: false }
            );
        }

        var filter = {
            box: 'inbox', 
        }
        SmsAndroid.list(
            JSON.stringify(filter), 
            (fail) => {
                console.log("Failed with this error: " + fail)
            },
            (count, smsList) => {
                console.log('Count: ', count);
                console.log('List: ', smsList);
                var arr = JSON.parse(smsList);
        
                arr.forEach(function(object){
                    console.log("Object: " + object);
                    console.log("-->" + object.date);
                    console.log("-->" + object.body);
                })
            }
        );
    }
    
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