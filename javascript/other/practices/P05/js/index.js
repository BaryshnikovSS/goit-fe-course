'use strict'

const Counter = function({initialValue = 0, step = 1})  {
    //this = {}

    this.value = initialValue;
    this.step = step;

    // this.increment = function() 

    // return this;
};

Counter.prototype.increment = function() {
        this.value += this.step;
    };

// [[Call]]
// Counter();

// [[Constract]]
// const counter = new Counter({initialValue: 10, step: 5});
// console.log(counter);

const counterA = new Counter({initialValue: 15, step: 8});
console.log('counterA.value: ', counterA.value);
counterA.increment();
console.log('counterA.value: ', counterA.value);

const counterB = new Counter({initialValue: 100, step: 22});
console.log('counterB.value: ', counterB.value)
counterB.increment();
console.log('counterB.value: ', counterB.value);

console.log(counterA, counterB);