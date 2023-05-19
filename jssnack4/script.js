
const userNumber = prompt("Insert a four digit number");

const output = [];

sNumber = userNumber.toString();

for ( i = 0 , len = sNumber.length ; i < len ; i += 1 ) {
    output.push(+sNumber.charAt(i));
}

console.log(output);

for (var i = 0, sum = 0; i < output.length; sum += output[i++]);
console.log(sum);

/*
let userNumber = prompt("Insert a four digit number");

if( !(userNumber ===4)){

    userNumber = prompt("Insert a four digit number");
}

let sum = 0

for ( let i = 0 ; i < userNumber.length ; i++){
    sum+= parseInt(userNumber.charAt(i));
}

console.log(sum);
*/