import { AsyncStorage } from 'react-native';

const INCOMING = 'incoming';
const OUTGOING = 'outgoing';

const filterMapping = new Map([
    [INCOMING, /AMT: NGN\d{1,3}(,\d{3})+.\d{2} CR/],//AMT NGN\d+,\d{3}.\d{2} CR
    [OUTGOING, /AMT: NGN([0-9,.]+) (DR)/]
]);


module.exports.applyFilterToSMS = (message) => {
    filterMapping.forEach((mapValue, mapKey) => {
        if (mapValue.test(message.body)) {
            const amount = message.body.match(mapValue);
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