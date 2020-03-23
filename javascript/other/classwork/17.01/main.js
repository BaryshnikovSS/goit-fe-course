// import fetchCountries from './fetchCountries';
const BASE_URL = 'https://restcountries.eu/rest/v2/all/';
let dataUrl;

const countrySearch = fetch(BASE_URL)
    .then(response => response.json())
    .then(data => preperData(data))
    .catch(err => console.log(err));


const refs = {
    country: document.getElementById('Country'),
    infoCn: document.getElementById('Info'),
    lang: document.getElementById('Languages'),
}

// пишем процесы

function preperData(data) {
    dataUrl = data.map(elem => {
        return {
            name: elem.name,
            languages: elem.languages.map(el => el.name)
        }
    })

    procesData();
}

function procesData() {
    const makeName = dataUrl.reduce((acc, el) => (acc += `<p>${el.name}</p>`), '');
    refs.country.insertAdjacentHTML('beforeend', makeName);

    createLang();
}


function createLang() {
    const makeLang = dataUrl
        .reduce((acc, el) => acc.concat(el.languages), [])
        .filter((el, idx, arr) => arr.indexOf(el) === idx)
        .sort()
        .reduce((acc, el) => acc += `<p>${el}</p>`, '');

    refs.lang.insertAdjacentHTML('beforeend', makeLang);
}

refs.country.addEventListener('click', handleClickNameCountry);
refs.lang.addEventListener('click', handleCLickNameLang);

function handleClickNameCountry(e) {
    if (e.turget === e.currentTarget) {
        return;
    }

    const countryLang = dataUrl
        .find(el => el.name === e.target.innerText)
        .languages.reduce((acc, el) => acc += `<p>${el}</p>`, '');

    refs.infoCn.innerHTML = '';
    refs.infoCn.insertAdjacentHTML('beforeend', countryLang);

}

function handleCLickNameLang(e) {
    if (e.target === e.currentTarget) {
        return
    }

    const langCountry = dataUrl
        .filter(el => el.languages.includes(e.target.innerText))
        .map(e => e.name)
        .reduce((acc, el) => acc += `<p>${el}</p>`, '');
    refs.infoCn.innerHTML = '';

    refs.infoCn.insertAdjacentHTML('beforeend', langCountry);
}




// function clearAll() {
//     ref.infoCn.innerHTML = "";
//     Array.from(document.querySelectorAll("p")).forEach(el => el.style.color = "black")
// }​​
// ref.btn.addEventListener("click", clearAll)