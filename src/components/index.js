import React from 'react';
import Tags from "react-native-tags";
import { ActivityIndicator, FlatList, Picker, Text, TextInput, View } from 'react-native';

import { css } from '../../styles';
import { AppContext } from '../AppContext';

export const TitleText = (props) => {
    const textStyle = props.textStyle || {};
    const containerStyle = props.containerStyle || {};
    return (
        <View style={[{ width: '100%', maxHeight: '15%', padding: 10 }, containerStyle]}>
            <Text
                style={[{ fontSize: 20, textAlign: 'left', fontWeight: '500' }, textStyle ]}
            >
                {props.children}
            </Text>
        </View>
    );
};

TitleText.defaultProps = {
    textStyle: {},
    containerStyle: {}
};

export const TextInputWithTitle = (props) => {
    return (
        <View style={{ width: '100%'}}>
            <Text style={props.labelStyle}>{props.label}</Text>
            <TextInput 
                {...props}
                style={props.inputStyle}
            />
        </View>
    );
}

export const TextInputTagsWithTitle = (props) => {
    return (
        <View style={{ width: '100%'}}>
            <Text style={props.labelStyle}>{props.label}</Text>
            <Tags
                initialText="monkey"
                initialTags={["dog", "cat", "chicken"]}
                onChangeTags={tags => console.log(tags)}
                onTagPress={(index, tagLabel, event) => console.log(index, tagLabel, event)}
                containerStyle={{ justifyContent: "center" }}
                inputStyle={{ backgroundColor: "white" }}
            />
        </View>
    );
}

export const BankDataItem = (props) => {
    const shortBankName = props.bankName.split(' ').map(item => item.substring(0, 1).toUpperCase()).join('');
    return (
        <View style={css().bankMainContainer}>
            <View style={css().bankSubContainer(1, 'center')}>
                <View style={css().bankInnerContainer}>
                    <Text style={{ color: 'white'}}>{shortBankName}</Text>
                </View>
            </View>
            <View style={css().bankSubContainer(3)}>
                <Text style={{ color: 'black', fontSize: 16}}>{props.bankName}</Text>
            </View>
        </View>
    );
}

export const ListHeaderComponent = props => (
    <View style={{ paddingBottom: 10, paddingLeft: 20}}>
        <Text>{props.title}</Text>
    </View>
);

export const ListItemSeparatorComponent = props => (
    <View
        style={{
        backgroundColor: 'lightgray',
        height: 0.5,
        }}
    />
);

export const BankDataItemList = ({headerTitle, ...props}) => (
    <AppContext.Consumer>
        {data => (
            <FlatList
                {...props}
                data={data.monitoredBanks}
                ListHeaderComponent={() => <ListHeaderComponent title={headerTitle} />}
                style={{ width: '100%'}}
            />
        )}
    </AppContext.Consumer>
);

export const ActivityIndicatorWithText = ({ label, labelColor, ...props }) => (
    <View style={[css().newContainer]}>
        <ActivityIndicator
            {...props}
        />
        <Text style={{ color: labelColor }}>
            {label}
        </Text>
    </View>
);

export const ProcessedCounter = ({ titleText, subTitleText }) => (
    <View style={[css().newContainer, { alignItems: 'center', backgroundColor: 'white', elevation: 0, shadowOpacity: 0, borderWidth: 1, borderColor: '#e8ebf4', paddingVertical: 15, marginVertical: 3, marginHorizontal: 2 }]}>
        <Text style={{ color: 'black', fontSize: 35, fontWeight: '500' }}>
            {titleText}
        </Text>
        <Text style={{ color: '#595959' }}>
            {subTitleText}
        </Text>
    </View>
);

export const ProcessedBankDataItem = () => (
    <View style={[css().bankMainContainer, css().horizontal, { maxHeight: 70, backgroundColor: 'white' } ]}>
        <View style={[css().bankSubContainer(1, 'center'), {height: 50} ]}>
            <View style={css().bankInnerContainer}>
                <Text style={{ color: 'white'}}>{'GTB'}</Text>
            </View>
        </View>
        <View style={[css().bankSubContainer(3, 'center'), { alignItems: 'flex-start', height: 50  }]}>
            <Text style={{ color: 'black', fontSize: 15, textAlign: 'left', fontWeight: '500'}}>
                GTBank
            </Text>
            <Text style={{ color: '#595959', fontSize: 15, textAlign: 'left'}}>
               Processed 3 SMS messages related to GTBank
            </Text>
        </View>
    </View>
);