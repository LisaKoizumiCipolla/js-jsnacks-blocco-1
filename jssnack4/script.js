
const userNumber = prompt("Insert a four digit number");

const output = [];

sNumber = userNumber.toString();

for ( i = 0 , len = sNumber.length ; i < len ; i += 1 ) {
    output.push(+sNumber.charAt(i));
}

console.log(output);

for (var i = 0, sum = 0; i < output.length; sum += output[i++]);
console.log(sum);