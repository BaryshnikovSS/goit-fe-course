'use strict';

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

Counter.prototype.decrement = function() {
        this.value -= this.step;
    };
    
const counter = new Counter({initialValue: 10, step: 8});

const counterValueField = document.querySelector('.js-counter-value');
const incrementBtn = document.querySelector(`button[data-action='increment']`);
const decrementBtn = document.querySelector(`button[data-action='decrement']`);

counterValueField.textCounter = counter.value;

incrementBtn.addEventListener('click', () => {
    counter.increment();
    counterValueField.textContent = counter.value;
});

decrementBtn.addEventListener('click', () => {
    counter.decrement();
    counterValueField.textContent = counter.value;
});
console.dir(counterValueField);
console.dir(incrementBtn);
console.dir(decrementBtn);