/* The user service contains just a couple of methods for retrieving user data from the api, 
it acts as the interface between the application and the backend api. */

import authHeader from './AuthHeader';
import handleResponse from './HandleResponse';

const API_URL = 'http://localhost:8080'

export const userService = {
    getAll
};

function getAll() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${API_URL}/users`, requestOptions).then(handleResponse);
}