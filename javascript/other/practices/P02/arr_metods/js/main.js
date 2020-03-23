'use strict'

import {arr} from './arr.js';

// 1. Добавить в новый массив объекты всех ученых и под ключем firstName вывести имя, под ключем lastName фамилию, кроме этих объектов в массиве не должно быть ничего.

console.log(arr.map(el => ({firstName: el.first, lastName: el.last})));

// 2. Узнать, все ли ученые родились позднее 1500 года включительно - результат правда или нет.

console.log(arr.every(el => el.year >= 1500))

// 3. Вывести сумму лет жизни всех ученых

console.log(arr.reduce((acc, arr) => acc += arr.passed - arr.year, 0));

// 4. Узнать, есть ли ученые родившиеся в 17 столетии - результат правда или нет

console.log(arr.some(el => el.year <= 1601 & el.year > 1700));

// 5. Создать объект,
// {
//      sumBornYear: 0,
//      sumPasssedYear: 0,
// }
// sumBornYear - сумма всех годов рождений всех ученых
// sumPasssedYear - сумма всех годов смерти всех ученых

console.log({
    sumBornYear: arr.reduce((acc, arr) => acc += arr.year, 0),
    sumPasssedYear: arr.reduce((acc, arr) => acc += arr.passed, 0),
})

// 5-6. oldSomeYear - сумма всех годов рождений всех ученых + всех годов смерти всех ученых

console.log(arr.reduce((acc, el) => ({
    sumBornYear: acc.sumBornYear + el.year,
    sumPasssedYear: acc.sumPasssedYear + el.passed,
    oldSomeYear: acc.oldSomeYear + el.year + el.passed
}), {
    sumBornYear: 0,
    sumPasssedYear: 0,
    oldSomeYear: 0
}))