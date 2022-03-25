// Getting API calls from backend

import AuthenticationService from '../Components/AuthenticationService'

class SignUpRepository
{
    getSecurityQuestions()
    {
        return AuthenticationService.getAPI('getSecurityQuestions');
    }

    getGenres()
    {
        return AuthenticationService.getAPI('getGenres');
    }

    createAccount(params)
    {
        return AuthenticationService.postAPI('register', params);
    }
}

export default new SignUpRepository();