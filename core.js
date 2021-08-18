// inches to feet
function inchtoFeet(inch){
    var feet = inch/12;
    return feet;
}

var nanaFeet = inchtoFeet(156);
console.log(nanaFeet);

var naniFeet = inchtoFeet(288);
console.log(naniFeet);

var dadiFeet = inchtoFeet(442);
console.log(Math.round(dadiFeet));




// leap year
const year = 3996;
let reminder = year % 4;

if(reminder == 0){
    console.log('your year is a leap year');
}

const year = 3998;
let reminder = year % 4;

if(reminder == 0){
    console.log('your year is a leap year');
}
else{
    console.log('your year is not a leap year');
}



function isLeapYear (year){
    const reminder = year % 4;

    if(reminder == 0){
      return true;
    }
    else{
      return false;
    }
}

const check2020 = isLeapYear(2020);
console.log(check2020);





// factorial number
let factorial = 1;
for(var i = 1; i <= 10; i++){

    factorial = factorial * i;
    console.log(factorial);
}


function factorial(n){
    let factorial = 1;
    for(var i = 1; i <= n; i++){
      factorial = factorial * i;
    }
    return factorial;
}
let result = factorial(10);
console.log(result);


let i = 1;
let factorial = 1;
while(i <= 10){
    factorial = factorial * i;
    console.log(factorial);
    i++;
}


function factorial(n){
    if(n == 0){
        return 1;
    }
    else{
        return n * factorial(n - 1);
    }
}
 let result = factorial(10);
 console.log(result);





// fibonacci series 
var fibo = [0, 1];
for(var i = 2; i <= 10; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
}

function fibonacci(n){
    var fibo = [0, 1];
    for(var i = 2; i <= n; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}
var result = fibonacci(10);
console.log(result);


function fibonacci(n){
    if(n == 0){
        return 0;
    }
    if(n == 1){
        return 1;
    }
    else{
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
var result = fibonacci(10);
console.log(result);


function fibonacci(n){
    if(n == 0){
        return [0];
    }
    else if(n == 1){
        return [0, 1];
    }
    else{
        // find array with nth element
        var fibo = fibonacci(n-1);
        var nextElement = fibo[n-1] + fibo[n-2];
        fibo.push(nextElement);
    }
    return fibo;
}
var result = fibonacci(10);
console.log(result);





// prime number
var n = 79;
for(var i = 2; i < n; i++){
    console.log(n%i);
    if(n%i == 0){
        console.log('Not a prime number')
        break;
    }
}


function isPrime(n){
    for(var i = 2; i < n; i++){
        if(n%i == 0){
            return 'Not a prime number';
        }
    }
    return 'your number is a prime number';
}
var result = isPrime(73);
console.log(result);





//swap number
var a = 5;
var b = 8;
var temp = a;
a = b;
b = temp;
console.log('a =', a, ',', 'b =', b);


var x = 6;
var y = 9;
x = x + y;
y = x - y;
x = x - y;
console.log('after swap: x =', x, ',', 'y =', y);


var p = 7;
var q = 4;
[p, q] = [q, p];
console.log('p =', p, ',', 'q =', q);






// random number
var num = 2.56652;
var floorResult = Math.floor(num);
var ceilResult = Math.ceil(num);
var roundResult = Math.round(num);
for(var i = 1; i < 6; i++){
    var randomNum = Math.random() * 6;
    var output = Math.round(randomNum);
    console.log(output);
}






// max number
var business = 550;
var minister = 850;
var shochib = 650;

if(business > minister){
    if(business > shochib){
        console.log('business is bigger')
    }
    else{
        console.log('shochib is bigger')
    }
}
else{
    if(minister > shochib){
        console.log('minister is bigger')
    }
    else{
        console.log('shochib is bigger')
    }
}


var business = 550;
var minister = 850;
var shochib = 650;

var max = Math.max(business, minister, shochib);
console.log(max);





// array max
var marks = [55, 85, 55, 74, 58, 94, 23, 33];
var max = [0];
for(var i = 0; i < marks.length; i++){
    var element = marks[i];
    if(element > max){
        max = element;
    }
}
console.log('Highest value is', max);






// array sum
var numbers = [55, 85, 55, 74, 58, 94, 23, 33];
var sum = 0;
for(var i = 0; i < numbers.length; i++){
    var element = numbers[i];
    sum = sum + element;
}
console.log('Total of the numbers', sum);

//use functional way
function getArrayTotal(numbers){
    var sum = 0;
    for(var i = 0; i < numbers.length; i++){
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
var total = [55, 85, 55, 74, 58, 94, 23, 33];
var numbers = [ 74, 58, 94, 23, 33];
var result = getArrayTotal(numbers);
console.log(result);






// unique number
var num = [22, 50, 86, 47, 39, 56, 22, 47, 50];
var uniqueNum = [];
for(var i = 0; i < num.length; i++){
    var element = num[i];
    var index = uniqueNum.indexOf(element);
    if(index == -1){
        uniqueNum.push(element);
    }
}
console.log(uniqueNum);






// word count
var speech = "I am a good boy. I don't snore at night";
var count = 0;

var i = 0;
while(i < speech.length){
    var char = speech[i];
    if(char == ' ' && speech[i-1] != ' '){
        count++;
    }
    i++;
}
count++;
console.log(count);







// reverse word
function reverseString(str){
    var reverse = '';
    for(var i = 0; i < str.length; i++){
       var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}
var statement = 'Hello alien vai brothers.... kemon acho tomra?'
var result = reverseString(statement);
console.log(result);