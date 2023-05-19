
const numberList = [];

for ( let i = 0 ; i < 6 ; i++){
    const userNumber = parseInt(prompt("Insert number"));

    if ( !isNaN(userNumber) && userNumbner % 2 === 1){
        numberList.push(userNumber);
    }
}

console.log(numberList);