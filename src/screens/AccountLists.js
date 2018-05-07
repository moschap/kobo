import React, { Component } from 'react';
import ActionButton from 'react-native-action-button';
import {
    FlatList,
    View 
} from 'react-native';
import { Icon, ListItem } from 'react-native-elements';

import { css } from '../../styles';
import { AppContext } from '../AppContext';
import { 
    BankDataItem, 
    BankDataItemList,
    ListHeaderComponent,
    ListItemSeparatorComponent
} from '../components';


 
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
    
    renderItems({ item }) {
        return (
            <BankDataItem bankName={item.name} />
        );
    }

    render() {
        return(
            <View style={[css().normalContainerLight, { padding: 0}]}>    
                <BankDataItemList
                    style={{ width: '100%'}}
                    renderItem={this.renderItems}
                    headerTitle='Monitored Accounts'
                    ItemSeparatorComponent={() => <ListItemSeparatorComponent />}
                />           
                
                <ActionButton
                    buttonColor='#223ca2'
                    onPress={() => this.props.navigation.navigate('addaccount')}
                />
            </View>
        );
    }
}