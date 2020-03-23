'use strict';

const hotel = {

  name: 'Resort Hotel',
  stars: 5,
  capacity: 100,

};




hotel['summa'] = function (a, b) { return a + b; };



hotel.summa1 = (a1,b1)=>{return a1>=b1?a1:b1 };



hotel.allSumma = (...rest) => {

  let sum = 0;

  for (let i = 0;i < rest.length; i++) {
 
    sum += Number(rest[i]) ? rest[i] : 0;

  }

  return sum;

}

for (const key in hotel) {

  console.log(key, ' => ', hotel[key]); 

}

console.log('--------------------');
console.log(hotel.allSumma(3,4,3,'hello'));