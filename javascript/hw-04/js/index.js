import {task_01} from './task-01.js'
import {task_02} from './task-02.js'

do {
    let inputMessage = prompt('Пожалуйста, выберите номер задание!');
    console.clear();

    if (isNaN(inputMessage) || inputMessage === null) {
        if (isNaN(inputMessage)) {
            alert('Введите пожалуйста цифру!');
            continue;
        } else {
            alert('Спасибо за выбор нашего сервиса! До свидания!');
            break;
        }
    } else {
        inputMessage = Number(inputMessage);

        switch (inputMessage) {
            case 1:
                task_01();
                break;

            case 2:
                task_02();
                break;

            default:
                alert('Задание не выбрано! Введите номер задания!');
        }
    }
} while (true);