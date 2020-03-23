"use strict";

const arr = [3, "c", "a", 1, "b", 3, 2];
const newArr = [];

// Array.prototype.forEach()
// Единственный из функциональных методов который ничего не возвращает, а просто перебирает коллекцию.
// Используется как замена цикла for.

// array.forEach(callback[currentValue, index, array])

// Перебирает, Может изменять, Не возвращает

// arr.forEach((value, idx, arr) => );

arr.forEach(value => (!newArr.includes(value) ? newArr.push(value) : false));

// console.log(arr);
// console.log(newArr);

// Array.prototype.map()
// Используется для транформации массива. Применяет callback-функцию к каждому элементу исходного массива, результат работы callback-функции записывает в новый массив, который и будет результатом выполнения метода. Исходный и новый массив всегда имеют одинаковую длину. Не мутирует иходный массив.

// array.map(callback[currentValue, index, array])

// Используется для трансформации массива
// Перебирает
// Не изменяет
// Возвращает коллекцию

// console.log(arr.map(el => `elem ${el}`));
// console.log(arr)

// Array.prototype.filter()
// Применяет callback-функцию к каждому элементу исходного массива и если результат ее выполнения имеет значение true, то копирует значение из исходного массива в новый массив. Исходный и новый массив могут иметь разную длину. Не мутирует иходный массив. Всегда возвращает массив, даже если в нем всего 1 элемент. Если ничего не найдено, вернет пустой массив. Используется когда необходимо найти более одного элемента в коллекции.

// array.filter(callback[currentValue, index, array])

// Используется для фильтрации массива
// Перебирает
// Не изменяет
// Возвращает коллекцию

console.log(arr.filter(el => el === 2 + 1));

// Array.prototype.find()

// Для таких случаев есть метод find, который будет искать до первого совпадения, после чего прервет свое выполнение.

// Применяет callback-функцию к каждому элементу исходного массива и если результат ее выполнения имеет значение true, то возвращает этот элемент и завершает свое выполнение. Если ничего не найдено, вернет undefined.

// array.find(callback[currentValue, index, array])

// Используется для поиска уникального элемента массива
// Перебирает
// Не изменяет
// Возвращает элемент

console.log(arr.find(el => el === 2 + 1));

// Array.prototype.every() и Array.prototype.some()
// Метод every проверяет, прошли ли все элементы массива тест, предоставляемый callback-функцией. Возвращает true, если вызов callback-функции вернет true для каждого элемента в array.

// array.every(callback[currentValue, index, array])

// Метод some проверяет, проходит ли по крайней мере один элемент в массиве тест, предоставляемый callback-функцией. Возвращает true, если вызов callback-функции вернет true хотябы для одного элемента в array.

// array.some(callback[(currentValue, index, array)]);

// Перебирает
// Не изменяет
// Возвращает true или false

console.log(arr.every(el => el === 2 + 1));

console.log(arr.some(el => el === 2 + 1));

// Array.prototype.reduce()
// Аккумулирующая функция, используется для последовательной обработки каждого элемента массива с сохранением промежуточного результата. Швейцарский нож функциональных методов массива. Возможно немного сложна в усвоении, но результат стоит того.

// Перебирает
// Не изменяет
// Возвращает что угодно
// array.reduce(сallback[(previousValue, currentItem, index, array)], initialValue)

console.log(
  arr.reduce((acc, value) => {
    !acc.includes(value) ? acc.push(value) : false;
    return acc;
  }, [])
);



// Array.prototype.sort()
// Позволяет сортировать элементы массива на месте. Помимо возврата отсортированного массива метод sort также отсортирует массив, на котором он был вызван. По умолчанию метод sort сортирует, преобразуя элементы к строке.

// Перебирает
// Изменяет
// Возвращает коллекцию



console.log(arr.sort())


const users = [
    { name: 'Mango', daysActive: 15 },
    { name: 'Poly', daysActive: 4 },
    { name: 'Ajax', daysActive: 27 },
    { name: 'Chelsey', daysActive: 2 },
  ];
  

console.log(users.sort((a, b) => a.daysActive - b.daysActive));