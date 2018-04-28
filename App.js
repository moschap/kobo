/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import FCM from 'react-native-fcm';

import UnauthorizedStack from './src/router';



//type Props = {};
export default class App extends Component {
  componentDidMount() {
    FCM.getFCMToken().then(token => {
        console.log("TOKEN (getFCMToken)", token);
        //this.setState({token: token || ""})
    });
  }
  render() {
    return (
      <UnauthorizedStack />
    );
  }
}

