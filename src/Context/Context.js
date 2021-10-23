import React, { createContext, useState } from 'react';
import firebaseInit from '../Firebase/firebase.init';

firebaseInit();

const UserContext = createContext();

const Context = ({children}) => {
    const [user, setUser] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [loggedInAfterPageRefresh, setLoggedInAfterPageRefresh] = useState(null);

    const userInfo = {user, setUser, isLoggedIn, setIsLoggedIn, error, setError, isLoading, setIsLoading, loggedInAfterPageRefresh, setLoggedInAfterPageRefresh};

    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default Context;
export {UserContext};