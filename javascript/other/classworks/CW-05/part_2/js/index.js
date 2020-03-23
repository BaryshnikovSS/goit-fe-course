'use strict'

// import countTotalSalary from './.history/task1_20191208232836';
const people = [
    {name: 'Mango_1', surname: 'Bananovitch_1', phone: '+380987238801', age: 17},
    {name: 'Mango_2', surname: 'Bananovitch_2', phone: '+380987238802', age: 19},
    {name: 'Mango_3', surname: 'Bananovitch_3', phone: '+380987238803', age: 17},
    {name: 'Mango_4', surname: 'Bananovitch_4', phone: '+380987238804', age: 12},
    {name: 'Mango_5', surname: 'Bananovitch_5', phone: '+380987238805', age: 21},
  ];
  const oldersPerson = (array) => {
    // const result = {};
    let maxAge = 0;
    for(const elem of array) {
      const currentAge = elem.age;
      // console.log(currentAge);
      if(maxAge <  currentAge){
        maxAge = currentAge;
      }
    }
    return maxAge;
  }
  // console.log(oldersPerson(people));
  const specialAge = function(array, maxAgeFilter){
    return processing(array, maxAgeFilter).specialAge;
  }
  const executedPerson = function(array, maxAgeFilter){
    return processing(array, maxAgeFilter).executedPerson;
  }
  let cashedArray;
  let cashedObject = {};
  const processing = function(array, maxAgeFilter) {
    let newArrayString = array.join() + maxAgeFilter;
    if(newArrayString === cashedArray) {
      return cashedObject;
    } else {
      cashedArray = newArrayString;
    }
    let total = 0;
    let rezArray = [];
    console.log('Working')
    for(const elem of array) {
      const currentAge = elem.age;
      // console.log(currentAge);
      if(currentAge < maxAgeFilter) {
        total += currentAge;
      } else {
        rezArray.push(elem.surname)
      }
    }
    cashedObject = { specialAge: total, executedPerson: rezArray }
    return cashedObject;
  }
  console.log(specialAge(people, 19));
  console.log(executedPerson(people, 17));
   
   // oldersPerson( name: oldestMan, spesialAge, ExecutedPerson ) +
    // SpecialAge -> Сумма возрастов всех людей <maxAge;
    // ExecutedPerson -> [] Все фамиллии тех кто не попал в SpecialAge;