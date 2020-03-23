'use strict'

function task_06()

{
    let inputMessage;
    let total = 0;
    let numOfIteration = 0;

    do {
        inputMessage = prompt('Введите число!');

        if (inputMessage === null) {
            break;
        }

        if (!isNaN(Number(inputMessage))) {
            total += Number(inputMessage);
            numOfIteration++;
        } else {
            alert('Было введено не число, попробуйте еще раз');
        }

    }
    while (true)

    console.log('Number of iterations:', numOfIteration);

    alert(`Общая сумма чисел равна ${total}`);

}

//======================================================

// inputMessage = null;
// let total = 0;

// do {

//     inputMessage = prompt('Введите число!');

//     let numberInput = Number(inputMessage);
//     if (isNaN(numberInput)) {
//         alert('Введите число!');
//     } else {
//         total += numberInput;
//     }

// } while (inputMessage !== null)

// console.log(total);