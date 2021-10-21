import React, { createContext, useState } from 'react';
import firebaseInit from '../Firebase/firebase.init';

firebaseInit();

const UserContext = createContext();

const Context = ({children}) => {
    const [user, setUser] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState('');

    const userInfo = {user, setUser, isLoggedIn, setIsLoggedIn, error, setError};

    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default Context;
export {UserContext};