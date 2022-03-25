/*The handleResponse function checks responses from the api to see if the request was unauthorised, forbidden or unsuccessful.
If the response status is 401 Unauthorized or 403 Forbidden then the user is automatically logged out of the application, 
this handles if the user token is no longer valid for any reason. 
If the response contains an error then a rejected promise is returned that includes the error message, 
otherwise if the request was successful then the response data is returned as a JSON object.*/

import AuthenticationLogin  from './AuthenticationLogin';

export function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if ([401, 403].indexOf(response.status) !== -1) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                AuthenticationLogin.logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}