'use strict';

import users from './users.js';

export function task_08() {
    // Массив имен всех пользователей у которых есть друг с указанным именем.

    const getUsersWithFriend = (users, friendName) => users.filter(user => user.friends.includes(friendName)).map(elem => elem.name);

    console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
    console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
}