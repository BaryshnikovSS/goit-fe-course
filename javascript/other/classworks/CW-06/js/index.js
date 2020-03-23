'use strict'

import importedUsers from './users.js'

// Записать имплемеинтацыю ф-и getReport принимающей мин возраст, массив свойств обьекта и входящий массив. 
// Возвращ новый массив елем которого будут  обекты, содержащие свойства из arrWithProps, 
// значениями кторых будут оригинальныек значения из юзерс

const getReport = (ageMin, arrWithProps, users) => {
    const filteredUsers = users.filter(user => user.age > ageMin);
    const resultArrey = filteredUsers.map(obj => {
        {
            const newObj = {};

            arrWithProps.forEach(elem => {
                newObj[elem] = obj[elem]
            });

            return newObj;
        }
    })

    return resultArrey;
}

// =================================================================



// const getReport = (ageMin, arrWithProps, users) => {
//   const filteredUsers = users.filter(user => user.age > ageMin);
//   let resultArray = filteredUsers.map(obj => {
//     const newObj = {};
//     arrWithProps.forEach(elem => {newObj[elem] = obj[elem];})
//     return newObj;
//   });

//   return resultArray;
// }

console.log(getReport(18, ['name', 'isActive', 'skills'], importedUsers));