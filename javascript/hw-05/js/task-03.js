'use strict';

export function task_03() {

    // Напиши класс Storage, который будет создавать объекты для управления складом товаров.
    // При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.

    // Добавь методы класса:

    //     getItems() - возвращает массив текущих товаров
    // addItem(item) - получает новый товар и добавляет его к текущим
    // removeItem(item) - получет товар и, если он есть, удаляет его из текущих

    class Storage {

        constructor(arr) {
            this.items = arr;

        }

        getItems() {
            return this.items;
        }

        addItem(item) {
            this.items.push(item);
        }

        removeItem(item) {

            for (let i = 0; i <= this.items.length; i += 1) {

                if (this.items[i] === item) {

                    this.items.splice(i, 1);

                }
            }

        }
    }

    const storage = new Storage([
        'Нанитоиды',
        'Пролонгер',
        'Железные жoпи',
        'Антигравитатор',
    ]);

    const items = storage.getItems();
    console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жoпи", "Антигравитатор" ]

    storage.addItem('Дроид');
    console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жoпи", "Антигравитатор", "Дроид" ]

    storage.removeItem('Пролонгер');
    console.table(storage.items); // [ "Нанитоиды", "Железные жoпи", "Антигравитатор", "Дроид" ]

}