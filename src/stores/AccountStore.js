import React, {useState} from 'react';

export const AccountContext = React.createContext();

export const AccountProvider = ({children}) => {
    const [account, setAccount] = useState({email: '', password: '', isLogin:false});

    const store = {
        account,  setAccount
    };

    return (
        <AccountContext.Provider value={store}>
            {children}
        </AccountContext.Provider>
    )
};