function fizzBuzz(input){
    if (typeof input !== 'number' ){
      return 'Not a number';
    } else if (input % 3 === 0 && input % 5 === 0) {
      return 'FizzBuzz';
    } else if(input % 3 === 0) {
      return 'Fizz';
    }else if (input % 5 === 0) {
      return 'Buzz';
    } else if (input % 3 !== 0 || input % 5 !== 0) {
      return input;
    }
  }
  

console.log(fizzBuzz(8)); // 8
console.log(fizzBuzz('you')); // Not a number
console.log(fizzBuzz(3)); // Fizz
console.log(fizzBuzz(5)); // Buzz
console.log(fizzBuzz(45)); // Fizzbuzz
