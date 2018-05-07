import React, { Component } from 'react';
import {
    PermissionsAndroid,
    View,
    Text
} from 'react-native';

import { css } from '../../styles';
import { processSMSData, loadUserSMS } from '../helpers/SMSHelpers';
import { 
    BankDataItem,
    BankDataItemList, 
    ProcessedCounter,
    ProcessedBankDataItem,
    ActivityIndicatorWithText, 
    ListItemSeparatorComponent,
} from '../components';
 
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

    state = {
        screenState: 'loading',//loaded or error
        processedCount: 0
    }

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

        const updates = loadUserSMS();
        this.setState(prevState => ({screenState: 'loaded', processedCount: 40}))
    }

    renderItems({ item }) {
        return (
            <ProcessedBankDataItem />
        );
    }
    
    render() {
        return(
            <View style={css().normalContainerLight}>                
                { this.state.screenState === 'loading' && 
                    <ActivityIndicatorWithText
                        label='Please wait while we load your messages'
                        labelColor='black'
                        size='large'
                        color='blue'
                    />
                }
                {
                    this.state.screenState === 'loaded' &&
                    <View style={{flex: 1, width: '98%'}}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
                            <ProcessedCounter
                                titleText={this.state.processedCount}
                                subTitleText='SMS Processed'
                            />
                            <ProcessedCounter
                                titleText={3}
                                subTitleText='Banks Imported'
                            />                    
                        </View>
                        <View  style={{ flex: 3, justifyContent: 'flex-start'}}>
                            <BankDataItemList
                                style={{ width: '98%'}}
                                renderItem={this.renderItems}
                                headerTitle='Import Details'
                                ItemSeparatorComponent={() => <ListItemSeparatorComponent />}
                            />     
                        
                        </View>
                    </View>
                }
            </View>
        );
    }
}