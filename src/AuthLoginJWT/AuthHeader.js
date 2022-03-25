/*Auth header is a helper function that returns an HTTP Authorization header containing the JWT auth token of the currently logged in user. 
If the user isn't logged in, an empty object is returned. 
The auth header is used to make authenticated HTTP requests to the server api using JWT authentication.*/

import AuthenticationLogin from './AuthenticationLogin';

export function authHeader() {
    // return authorization header with jwt token
    const currentUser = AuthenticationLogin.currentUserValue;
    if (currentUser && currentUser.token) {
        return { Authorization: `Bearer ${currentUser.token}` };
    } else {
        return {};
    }
}