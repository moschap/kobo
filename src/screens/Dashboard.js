import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import FCM from 'react-native-fcm';

import { css } from '../../styles';
import { registerAppListener } from '../helpers/FCMHelper';
 
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

    async componentDidMount() {
        this.props.navigation.state.params('newData')
        registerAppListener(this.props.navigation);
        FCM.getFCMToken().then(token => {
            console.log("TOKEN (getFCMToken)", token);
            //ethis.setState({token: token || ""})
        });
    
        try{
            let result = await FCM.requestPermissions({badge: false, sound: true, alert: true});
            } catch(e){
              console.error(e);
        }
    
        FCM.getInitialNotification().then(notif => {
            console.log(notif);
            if(notif && notif.targetScreen === 'detail'){
              setTimeout(()=>{
                this.props.navigation.navigate('Detail')
              }, 500)
            }
        });
      }
          
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