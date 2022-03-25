/*The react private route component renders a route component if the user is logged in, 
if the user isn't logged in they are redirected to the /login page.*/

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import authenticationService, { AuthenticationLogin } from './AuthenticationLogin';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => {
        const currentUser = AuthenticationLogin.currentUserValue;
        if (!currentUser) {
            // not logged in so redirect to login page with the return url
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }

        // authorised so return component
        return <Component {...props} />
    }} />
)