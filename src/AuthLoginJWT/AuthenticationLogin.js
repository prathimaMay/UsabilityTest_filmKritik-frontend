/* The authentication service is used to login and logout of the application, 
to login it posts the user's credentials to the /users/authenticate route on the api, 
if authentication is successful the user details including the token are added to local storage, 
and the current user is set in the application by calling currentUserSubject.next(user);.

The logged in user details are stored in local storage so the user will stay logged in if they refresh the browser and 
also between browser sessions until they explicitly logout.
*/

import handleResponse from './HandleResponse';

const currentUserSubject = JSON.parse(localStorage.getItem('currentUser'));
console.log(currentUserSubject);
const API_URL = 'http://localhost:8080'

export const AuthenticationLogin = {
    login,
    logout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value }
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`${API_URL}/authenticate`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            currentUserSubject.next(user);

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}