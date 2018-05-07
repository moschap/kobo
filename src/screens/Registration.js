import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { View, Text, TextInput, StatusBar, YellowBox } from 'react-native';

import { css } from '../../styles';
import { Button } from 'react-native-elements';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
export default class Registration extends Component {
    static navigationOptions = ({navigate}) => ({
        title: 'Registration',
        headerStyle: {
            backgroundColor: css().navHeaderColor,
            //elevation: 0, //remove shadow on Android
            //shadowOpacity: 0,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: '400'
        }
    });

    onSignUp = () => (
        this.props.navigation.dispatch(NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ 
                    routeName: 'index',  
                    // params: { 
                    //     name: userObject.firstname,
                    //     phonenos: userObject.phonenos
                    // }
                })
            ]
        }))
    );

    render() {
        return (
            <View style={css().normalContainerLight}>
                <StatusBar backgroundColor={css().statusbarColor} />
                <Text style={css().notice}>
                    Your phone number is required to set you up on Kobo!
                </Text>
                <TextInput 
                    placeholder='e.g. 8100001111'
                    style={[css().emailInputText, { marginVertical: 10}]}
                />
                <Button
                    title='SIGN UP'
                    raised
                    containerViewStyle={{ width: '90%', marginVertical: 10}}
                    backgroundColor={css().navHeaderColor}
                    onPress={this.onSignUp}
                />
            </View>
        );
    }
}