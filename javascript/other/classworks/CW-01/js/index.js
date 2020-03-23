'use strict'

const greenFruits = ['woavanga', 'guayava', 'jackfruit', 'durian'];
const redFruits = ['cherry', 'cranberries', 'red currants', 'pomegranate', 'raspberries'];
let selectedFruit;



function fruitAlgoritm() {

    if (redFruits.includes(selectedFruit)) {

        alert('This is red fruit!');
        stop();

    } else {

        if (greenFruits.includes(selectedFruit)) {
            alert('This is green fruit!');
            stop();

        } else {

            const isFruitNeededToAdd = confirm('Fruct not in Array! Add it?');

            if (isFruitNeededToAdd) {

                addFruit(selectedFruit);

            } else {

                alert('User don`t want to add fruit! User canceled!');
                stop();

            }
        }
    }
}



function stop() {

    console.log('RED', redFruits);
    console.log('GRREN', greenFruits);

}



function logFruitAdded(_color) {

    alert(`Added to aray color ${_color}!`);
    stop();

}



function addFruit(_selectedFruit) {

    const isRed = confirm('Is fruit RED?');

    if (isRed) {

        redFruits.push(_selectedFruit);
        logFruitAdded('RED');

    } else {

        const isGreen = confirm('Is fruit GREEN?');

        if (isGreen) {

            greenFruits.push(_selectedFruit);
            logFruitAdded('GREEN');

        } else

            alert('!!!YOU BIAKA!!!');

        stop();
    }
}

//----------------------------PROGRAM--------------------------------


selectedFruit = prompt('Please, input something fruit!');


if (selectedFruit === null) {

    alert('User canceled!');
    stop();

} else {

    fruitAlgoritm(selectedFruit);

}