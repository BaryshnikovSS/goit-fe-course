'use strict'

// const newElement = document.createElement('button');
// newElement.innerText = 'BUTTON';
// window.document.body.appendChild(newElement);
// newElement.style.width = '500px';
// newElement.onclick = ()=>{
//   newElement.innerHTML = newElement.innerHTML == "CLICKED"?"BUTTON":"CLICKED";
// }

// Cортировка "методом пузырька"!

const arr = [6, 7, 8, 3, 4, 5];

const my_sort = (_arr) => {

    let isArraySorted;

    do {

        isArraySorted = true;

        for (let i = 0; i < _arr.length - 1; i++) {

            if (_arr[i] > _arr[i + 1]) {

                let temp = _arr[i + 1];
                _arr[i + 1] = _arr[i];
                _arr[i] = temp;
                isArraySorted = false;

            }

        }

    } while (!isArraySorted);

    return [..._arr];

}

const newArray = my_sort(arr);
newArray[0] = '!!!';

console.log(arr); // 3, 4, 5, 6, 7, 8
console.log(newArray); // !!!, 4, 5, 6, 7, 8