'use strict'

function task_05()

{

    let country;
    let countryName;
    let value;

    function upperFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    do {
        countryName = prompt('Введите страну доставки');

        if (countryName != null) {
            country = countryName.toLowerCase();
            console.log(country)


            switch (country) {

                case 'китай':
                    value = 100;
                    country = upperFirstLetter(country);
                    alert(`Доставка в ${country} будет стоить ${value} кредитов`);
                    break;

                case 'чили':
                    value = 250;
                    country = upperFirstLetter(country);
                    alert(`Доставка в ${country} будет стоить ${value} кредитов`);
                    break;

                case 'австралия':
                    value = 170;
                    country = upperFirstLetter('австралию');
                    alert(`Доставка в ${country} будет стоить ${value} кредитов`);
                    break;

                case 'индия':
                    value = 80;
                    country = upperFirstLetter('индию');
                    alert(`Доставка в ${country} будет стоить ${value} кредитов`);
                    break;

                case 'япония':
                    value = 120;
                    country = upperFirstLetter('японию');
                    alert(`Доставка в ${country} будет стоить ${value} кредитов`);
                    break;

                default:
                    // value = null; //'не указана страна доставки';
                    alert('В вашей стране доставка не доступна!');
                    console.log(country)
            }

        }
    }

    while (countryName != null);

}