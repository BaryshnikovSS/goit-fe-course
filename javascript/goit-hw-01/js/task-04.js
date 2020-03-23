'use strict';

function task_04()

{

    const credits = 23580;
    const pricePerDroid = 3000;
    // let totalPrice;
    let inputMessage;
    // let balans;
    let message;

    inputMessage = prompt('Сколько дроидов Вы хотите преобрести?');

    const totalPrice = inputMessage * pricePerDroid;
    const balans = credits - totalPrice;

    if (totalPrice <= credits) {
        alert(`Вы купили ${inputMessage} дроидов, на счету осталось ${balans} кредитов.`);
        alert(`Вы потратились на сумму ${totalPrice} кредитов. Спасибо за покупку!`);

    } else if (inputMessage === '') {
        message = 'Не указано количество товара!';
    } else if (inputMessage === false) {
        message = 'Отменено пользователем!';
    } else

        message = 'Недостаточно средств на счету!';

    // message = totalPrice;


    console.log(message);

}