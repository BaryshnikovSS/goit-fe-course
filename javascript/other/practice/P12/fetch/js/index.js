// 'use strict'

const baseURL = 'https://swapi.co/api/';

fetch(baseURL + 'planets/', {
    headers: {
        Accept: 'application/json'
    },
}).then(response => {
    console.log(response);
    return response.json();
}).then(data => {
    console.log(data)
})