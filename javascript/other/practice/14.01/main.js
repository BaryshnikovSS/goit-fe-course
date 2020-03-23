'use strict';

// 1. Найти документацию API этого сервиса
// 2. Получить массив фильмов по заданной теме и обработать результат работы fetch
// 2.1) с помощью then catch
// 2.2) async await

const url = 'http://api.tvmaze.com/search/shows?q=';

let newArr;

const getFilms = (theme = 'cats') => {
    fetch(url + theme)
        .then(resp => resp.json())
        .then(data => console.table(data.map(el => el.show.name)))
        .catch(error => console.error(error));
};

// (function goReadNewArr() {
//     getFilms().then(resp => show.data(resp)).then(console.log('newArr = >>>>', newArr));

    

// })();




let arr;

const getFilmsAsinc = async (theme = 'dogs') => {
    try {
        const resp = await fetch(url + theme);
        const arrFilms = await resp.json();
        arr = arrFilms;
        await goReadArr();
        console.log(arrFilms);
    } catch (error) {
        console.error(error);
    }
};

const goReadArr = () => {
    console.log('arr = >>>>', arr);
}


// getFilms('times');

getFilmsAsinc();




// обработать - вывести в консоль массив объектов фильмов