'use strict'

// функция createPeople принимает два параметра arr
// в input входит string  \список имен\, в output ложатся обьекты с Name и Age=>целое число не больше 100
// всех людей нужно научить здороваться через метод Сей хеллоу /Привет меня зовут.../
// метод canDrink задает параметры может ли человек пить или нет

const names = ['Petro', 'Marina', 'Volodimir', 'Maxim'];



const createPerson = function (name) {

    const resultObject = {

        name,
        age: Math.round(Math.random() * (100 - 1) + 1),

    }

    return resultObject;

}



const sayHello = function () {

    const name = this.name;
    console.log(`Hello, my name is ${name}! I ${this.canDrink() ? 'can': 'can not'} drink.`);

}



const learnGreetings = function (people) {

    people.sayHello = sayHello;

}





const canDrink = function () {

    return this.age >= 18;

}



const createPeople = function (input) {

    const people = [];

    for (const elem of input) {

        const person = createPerson(elem);
        learnGreetings(person);
        person.canDrink = canDrink;
        people.push(person);

    }

    return people

}

const people = createPeople(names);
console.log(people);
const x = people[1];
x.sayHello();