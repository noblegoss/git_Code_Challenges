const myAge = 18;
// my 1st two years in dog's years
let earlyYears = 2;
earlyYears *= 10.5;
// my years from the 3rd year forwoard
let laterYears = myAge - 2;
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);
// my age in dog's years
const myAgeInDogYears = earlyYears + laterYears;
console.log(myAgeInDogYears);

let myName = "France".toLowerCase();

console.log(`My name is ${myName}. I am HUMAN ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
