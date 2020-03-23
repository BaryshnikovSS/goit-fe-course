'use strict';

async function getUser(id) {
    try {
        const responce = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const user = await responce.json();
        return user;
    } catch (err) {
        throw new Error("ERROR TO FIRST FUNCTION!");
    }


}

async function main() {

    // этой функцией может быть что угодно, Вы можете создавать карточку юзера и добавлять в дом, вычислять на основе этих что либо...
    
    try {
        const user = await getUser(8);
        console.log(user);
    } catch (err) {
        throw new Error("ERROR TO SECOND FUNCTION!");
    }

}

main();

/* =============
Тот же пример, только с function expression
*/
// const getUser = async function(id) {
//   try {
//     const response = await fetch(
//       `https://jsonplaceholder.typicode.com/users/${id}`
//     );
//     const user = await response.json();
//     return user;
//   } catch (err) {
//     throw new Error("Failed user data from server");
//   }
// };
// const main = async function() {
//   try {
//     const user = await getUser(1);
//     console.log(user);
//   } catch (err) {
//     console.log(err);
//   }
// };
// main();

// const getUser = async id => {
//   try {
//     const response = await fetch(
//       `https://jsonplaceholder.typicode.com/users/${id}`
//     );
//     const user = await response.json();
//     return user;
//   } catch (err) {
//     throw new Error("Failed user data from server");
//   }
// };
// const main = async () => {
//   try {
//     const user = await getUser(1);
//     console.log(user);
//   } catch (err) {
//     console.log(err);
//   }
// };
// main();

/* =============
Тот же пример, только getUser как свойство объекта
*/
// const userData = {
//   getUser: async function(id) {
//     try {
//       const response = await fetch(
//         `https://jsonplaceholder.typicode.com/users/${id}`
//       );
//       const user = await response.json();
//       return user;
//     } catch (err) {
//       throw new Error("Failed user data from server");
//     }
//   }
// };
// const main = async function() {
//   try {
//     const user = await userData.getUser(1);
//     console.log(user);
//   } catch (err) {
//     console.log(err);
//   }
// };
// main();

/* =============
Тот же пример, только getUser как метод объекта
*/
// const userData = {
//   async getUser(id) {
//     try {
//       const response = await fetch(
//         `https://jsonplaceholder.typicode.com/users/${id}`
//       );
//       const user = await response.json();
//       return user;
//     } catch (err) {
//       throw new Error("Failed user data from server");
//     }
//   }
// };
// const main = async function() {
//   try {
//     const user = await userData.getUser(1);
//     console.log(user);
//   } catch (err) {
//     console.log(err);
//   }
// };
// main();

/* =============
Тот же пример, только getUser как метод класса
*/
// class userData {
//   async getUser(id) {
//     try {
//       const response = await fetch(
//         `https://jsonplaceholder.typicode.com/users/${id}`
//       );
//       const user = await response.json();
//       return user;
//     } catch (err) {
//       throw new Error("Failed user data from server");
//     }
//   }
// }
// const main = async function() {
//   const instanceOfUserData = new userData();
//   try {
//     const user = await instanceOfUserData.getUser(1);
//     console.log(user);
//   } catch (err) {
//     console.log(err);
//   }
// };
// main();
