'use strict'

import {task_01} from './task-01.js'
import {task_02} from './task-02.js'
import {task_03} from './task-03.js'
import {task_04} from './task-04.js'
import {task_05} from './task-05.js'


do {
    let inputMessage = prompt('Пожалуйста, выберите номер задание от 1 до 5!');
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

            case 3:
                task_03();
                break;

            case 4:
                task_04();
                break;

            case 5:
                task_05();
                break;

            default:
                alert('Задание не выбрано! Введите номер задания!');
        }
    }
} while (true);