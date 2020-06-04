let raceNumber = Math.floor(Math.random() * 1000);
console.log(raceNumber);

let registredEarly = false; // did NOT register early.
let runnerAge = 88;

// for runners < 18 , raceNumber < 1000
// for runners > 18 , raceNumber > 1000

if (runnerAge > 18 &&  registredEarly ) {
  raceNumber += 1000;
}

if ( runnerAge > 18 && registredEarly) {
  console.log(`Your race start at 09:30 AM, and your number is ${raceNumber}`);
} else if (runnerAge > 18 && !registredEarly) {
  console.log(`Your race start at 11:00 AM, and your number is ${raceNumber}`);
} else if (runnerAge < 18) {
  console.log(`Your race start at 12:30 PM, and your number is ${raceNumber}`);
} else {
  console.log(`Please, see the registration's desk!`)
}

/* 
All of these statements should be true:

Runners who are 25 years old and registered early will run at 9:30 am.

Runners who are 25 years old and did NOT register early will run at 11:00 am.

Runners who are 16 years old and registered early will run at 12:30 pm.

Runners who are 16 years old and did NOT register early will run at 12:30 pm.
*/
