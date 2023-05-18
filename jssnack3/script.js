
const askNumber1 = parseInt(prompt("Insert number"));
const askNumber2 = parseInt(prompt("Insert number"));
const askNumber3 = parseInt(prompt("Insert number"));
const askNumber4 = parseInt(prompt("Insert number"));
const askNumber5 = parseInt(prompt("Insert number"));
const askNumber6 = parseInt(prompt("Insert number"));

const resultList = [ askNumber1 , askNumber2 , askNumber3 , askNumber4 , askNumber5 , askNumber6 ]

const numberList = [];

for (let i = 0 ; i < resultList.length ; i++){
    
    if (resultList[i] % 2 !== 0 ){
        numberList.push(resultList[i]);
    }
}

console.log(numberList);