//Authentication Service for GET and POST APIs from backend

const API_URL = 'http://localhost:8080'

class AuthenticationService {

    postAPI(route, body)
    {
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        };
        var url = `${API_URL}/${route}`;
        
        // const response = await fetch(url, requestOptions);
        // const data = await response.json();
        // return data;

       
        fetch(url, requestOptions)
            .then(response => response.toString())
            // .then(data => {console.log(data); return data;});

    }

    async getAPI(route, params)
    {
        // GET request using fetch with async/await
        var url = `${API_URL}/${route}`;
        if(params)
            url = url + '?data=' + params;

        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
}

export default new AuthenticationService()