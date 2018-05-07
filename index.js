import { AppRegistry } from 'react-native';
import App from './App';

const SMSReceiver = async (data) => {
    console.log('It works!')
  }
  
AppRegistry.registerHeadlessTask('SMSReceiver', () => SMSReceiver)

AppRegistry.registerComponent('Lsmn', () => App);
