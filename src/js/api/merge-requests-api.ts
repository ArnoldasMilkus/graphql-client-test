import { MergeRequestInterface } from '../interfaces';

function checkStatus(response): Response {
    if (response.status >= 200 && response.status < 400) {
        return response;
    }

    const error = new Error(response.statusText);
    error.stack = response;

    throw error;
}

function fetchJSON(url: string, options: object = {}): Promise<{}> {
    return fetch(url, { credentials: 'same-origin', ...options })
        .then(checkStatus)
        .then((response) => response.text().then((text) => (text ? JSON.parse(text) : '')));
}

export default function getMergeRequests(): Promise<MergeRequestInterface[]> {
    // const url = 'https://www.boredapi.com/api/activity';
    // const url = 'https://community-open-weather-map.p.rapidapi.com/weather?q=san%20francisco%2Cus';
    const url = 'https://joke-api-strict-cors.appspot.com/jokes/random';

    return fetchJSON(url, {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:8080/',
            'Host': 'http://localhost:8080/',
            'Connection': 'Keep-Alive',
            'Accept': '*/*',
            'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Access-Control-Allow-Origin, access-control-allow-methods, Authorization, X-Requested-With',
            'Accept-Encoding': 'gzip, deflate, br',
            'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
        }
    }).then((data) => data['hydra:member'] ?? data);
}

