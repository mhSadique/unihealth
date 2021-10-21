import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../Context/Context';

const PrivateRoute = ({children, ...rest}) => {
    const {isLoggedIn} = useContext(UserContext);
    return (
        <Route
            {...rest}
            render={({location}) => 
            isLoggedIn ? (
                children
            ) : (
                <Redirect 
                    to={{
                        pathname: '/login',
                        state: {from: location}
                    }}
                />
            )
        }
        />
            
        
    );
};

export default PrivateRoute;