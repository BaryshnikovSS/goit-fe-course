'use strict';

function task_03()

{

    const ADMIN_PASSWORD = 'jqueryismyjam';
    let message;
    let result;

    result = prompt('Please enter password');

    if (result === null) {
        message = 'Отменено пользователем!';
    } else if (result === ADMIN_PASSWORD) {
        message = 'Добро пожаловать!';
    } else {
        message = 'Доступ запрещен, неверный пароль!';
    }

    alert(message);

}