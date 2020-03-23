'use strict';

function task_02()

{

    const total = 100; //количество товара на складе
    const ordered = 50; //единицы товара на складе
    let value;

    if (total <= ordered) {
        value = 'На складе недостаточно тваров!';
    } else {
        value = ('Заказ оформлен, с вами свяжется менеджер');
    }

    console.log(value);

}