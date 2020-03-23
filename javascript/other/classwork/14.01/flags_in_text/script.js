"use strict";

const baseUrl = 'https://restcountries.eu/rest/v2/alpha/';
const promises = [];

function getData(url, query) {
    const currentFetch = fetch (url + query)
        .then(response => response.json())
        .then(data => {
            doReplace(data.flag, query);
        })
        .catch(error => console.log(error));
        promises.push(currentFetch);
}

const countries = ["ru","usa","ua","fr"];
const search = document.getElementById('search');
const textContent = search.innerText;

let newString = textContent;

function doReplace(newUrl, country) {
    newString = newString.replace(country, `<img src="${newUrl}"/>`);
    //search.innerHTML = newString;
}

countries.forEach(element => getData(baseUrl, element));
Promise.all(promises).then(elem => search.innerHTML = newString);