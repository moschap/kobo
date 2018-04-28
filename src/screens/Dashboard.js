import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import { css } from '../../styles';
 
export default class Dashboard extends Component {
    static navigationOptions = ({navivate}) => ({
        title: 'Dashboard',
        headerStyle: {
            backgroundColor: css().navHeaderColor,
            elevation: 0, //remove shadow on Android
            shadowOpacity: 0,
            borderColor: '#1d282d'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: '400'//removes the boldness on screen header
        }
    });
    
    render() {
        return(
            <View style={css().normalContainerLight}> 
            <View style={css().dashboardContainer}>
                <View style={{ flex: 1, alignItems: 'center'}}><Text style={css().dashboardCountTextStyle}> 100 </Text></View>
                    <View style={{ flex: 2, alignItems: 'flex-start' }}>
                        <Text style={css().dashboardTitleStyle}> Total SMS</Text>
                        <Text style={css().dashboardSubTitleStyle}>
                            Processed
                        </Text>
                    </View>
                </View>    
                <View style={css().dashboardContainer}>
                    <View style={{ flex: 1, alignItems: 'center'}}><Text style={css().dashboardCountTextStyle}> 20 </Text></View>
                    <View style={{ flex: 2, alignItems: 'flex-start' }}>
                        <Text style={css().dashboardTitleStyle}> CREDIT SMS</Text>
                        <Text style={css().dashboardSubTitleStyle}>
                            Processed
                        </Text>
                    </View>
                </View>    
                <View style={css().dashboardContainer}>
                    <View style={{ flex: 1, alignItems: 'center'}}><Text style={css().dashboardCountTextStyle}> 30 </Text></View>
                    <View style={{ flex: 2, alignItems: 'flex-start' }}>
                        <Text style={css().dashboardTitleStyle}> DEBIT SMS</Text>
                        <Text style={css().dashboardSubTitleStyle}>
                            Processed
                        </Text>
                    </View>
                </View>                
            </View>
        );
    }
}