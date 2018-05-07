import { AsyncStorage } from 'react-native';
import SmsAndroid  from 'react-native-get-sms-android';

import { Parser } from './SMSParser';

const INCOMING = 'incoming';
const OUTGOING = 'outgoing';

const filterMapping = new Map([
    [INCOMING, /AMT: NGN((\d{1,3},\d{3})+.\d{2}) CR/],//AMT NGN\d+,\d{3}.\d{2} CR
    [OUTGOING, /AMT: NGN([0-9,.]+) (DR)/]
]);

const badgeColor = [
    'black',
    'darkmagenta',
    'khaki'
];

const bankSenderIds = /\+2348087616915/g;

module.exports.getRandomNumber = function (max){
    console.log('#########');
    return badgeColor[Math.floor(Math.random() * Math.floor(max))];
} 

module.exports.checkForBankInSMS = (sender, body, text) => {
    bankSenderIds.map(item => console.log(item));
}

const processSMSData = data => {
    let processedSMSMap = new Map();
    //const sam = data.filter(value => value.address === value)
    //const filteredSMS = 
    data.filter(value => bankSenderIds.test(value.address))
    .forEach(item => {
        const response = Parser.Message.parse(item.body);
        
        if (response.status) {
            if (processedSMSMap.get(item.address)) {
                 processedSMSMap.get(item.address).push([response, item.date]);
            } else {
                processedSMSMap.set(item.address, [[response, item.date]]);
            } 
        }
        console.log(processedSMSMap);
    } );
        
    console.log('##############', processedSMSMap.get('Uber'));
    
}

//extract the senderid and body of all the messages
//reduce the response from step 1 and add the result to a Map object
//check if the backsenderIds is found in the returned Map

module.exports.applyFilterToSMS = (message) => {
    filterMapping.forEach((mapValue, mapKey) => {
        if (mapValue.test(message)) {
            const amount = message.match(mapValue);
            console.log(amount);
            const amountInKobo = amount[1].replace(',', '').replace('.', '');

            saveNewAmountByType(
                mapKey,
                getSavedAmountByType(mapKey) + parseInt(amountInKobo)
            );
        }
    });
}

const getSavedAmountByType = (type) => {
    return (type === INCOMING) 
        ? parseInt(AsyncStorage.getItem('@total-credit') || 0)
        : parseInt(AsyncStorage.getItem('@total-debit') || 0);
}

const saveNewAmountByType = (type, value) => {
    (type === INCOMING) 
        ? AsyncStorage.setItem('@total-credit', value) 
        : AsyncStorage.setItem('@total-debit', value);
}

module.exports.loadUserSMS = () => {
    const  filter = { box: 'inbox', };
    SmsAndroid.list(
        JSON.stringify(filter), 
        (fail) => {
            console.log("Failed with this error: " + fail)
        },
        (count, smsList) => {
            console.log('Count: ', count);
            console.log('List: ', smsList);
            var arr = JSON.parse(smsList);
            processSMSData(arr);
            // arr.forEach(function(object){
            //     console.log("Object: " + object);
            //     console.log("-->" + object.date);
            //     console.log("-->" + object.body);
            // })
        }
    );
}