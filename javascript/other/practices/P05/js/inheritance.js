'use strikct';

const Hero = function(name, xp) {
    this.name = name,
    this.xp = xp,
}

Hero.prototipe.gainXp = function(amount) {
    console.log(`${this.name} gained ${amound} experience points`);
    this.xp += amount
}

const Warrior = function(name, xp, weapon) {
    // this = Object.create(Warrior.prototype);
    Herro.call(this, name, xp);
    // this: {name:'Mango', xp:1000}

    this.weapon = weapon;
}

Warrior.prototype = Object.create(Hero.prototype);

Warrior.prototype.constructor = Warrior;

Warrior.prototype.attacks = function() {
    console.log(`${this.name} attack with ${this.weapon}`);
}

const mango = new Warrior('Mango', 1000, 'halbert');

console.log(mango);

// ====================================================================

// class Hero {
//     constructor(name) {
//         this.name = name;
//     }

//     gainXp() {}
// }

// class Warrior extends Hero {
//     constructor(name, weapon) {
//         super(name);

//         this.weapon = weapon;
//     }
// }

// const mango = new Warrior('Mango', 'axe');

// console.log(mango);
