import React, { Component } from 'react';
import Flag from 'react-native-flags';
import {
    View,
    Text,
    Platform,
    TextInput,
    StatusBar,
    TouchableWithoutFeedback
} from 'react-native';
import { css } from '../../styles';

export default class Welcome extends Component {
    static navigationOptions = ({navivate}) => ({
        header: null
    });

    onClick = () => {
        this.props.navigation.navigate('registration');
    }
    
    render() {
        return(
            <View style={css().container}>
                <StatusBar backgroundColor={css().statusbarColor} />
                <View style={css().smallContainerDark}>
                    <Text style={css().welcome}>
                        Welcome to Kobo!
                    </Text>
                    <Text style={css().instructions}>
                        Follow step below to start
                    </Text>
                </View>
                <TouchableWithoutFeedback
                        onPress={() => this.onClick()}
                >
                    <View style={css().containerLightHorizontal}>
                        <Flag
                            code='NG'
                            size={32}
                        />
                        <Text style={css().notice}>
                            +234 
                        </Text>                        
                        <View>
                            <Text style={css().notice}>
                                Enter your phone number
                            </Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
};//Kuokoa