import React from 'react';

export const AppContext = React.createContext({
    fcmID: '',
    authState: 'unauthorized',// or authorized
    phoneNumber: '',
    monitoredBanks: [
        {key: '1', name: 'Guaranty Trust Bank'}, 
        {key: '2', name: 'First Bank Nigeria'},
        {key: '3', name: 'United Bank Africa'}
    ],
    updateFcmID: () => {},
    updateAuthState: () => {},
    updatePhoneNumber: () => {},
    updateMonitoredBanks: () => {}
});