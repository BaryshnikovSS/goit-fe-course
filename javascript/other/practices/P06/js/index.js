'use strict'

const ourCallBack = (acum, val, ind, arr) => {
    console.log('--->', acum, val, ind);
    acum += val;
   return acum;
  }
  const myReduce = function(callBackF, initParam){
    const arr = this;
    let rezult = initParam?initParam:arr[0];
    const startFrom = initParam?0:1;
    for (let i=startFrom;i<arr.length;i++){
      rezult = callBackF(rezult, arr[i], i, arr);
    }
    return rezult; 
  }
  const rez = [1,3,4,2,5].reduce(ourCallBack, 40);
  console.log('BuildReduce:',rez);
  const rez1 = myReduce.call([1,3,4,2,5], ourCallBack, 40);
  console.log('OurReduze:',rez1);