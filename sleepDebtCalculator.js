function getSleepHours(day){
  switch (day){
    case 'monday':
    case 'tuesday':
    case 'thursday':
      return 7;
    case 'wednesday':
      return 6;
    case 'friday':
    case 'saturday':
      return 9;
    default:
      return 8;
  }
};

// console.log(getSleepHours('saturday')); //9
// console.log(getSleepHours('sunday')); //8
// console.log(getSleepHours('wednesday')); //6

function getActualSleepHours() {
  const sumSleepHoursPerDay = getSleepHours('monday')
  + getSleepHours('tuesday')
  + getSleepHours('thursday')
  + getSleepHours('wednesday')
  + getSleepHours('friday')
  + getSleepHours('saturday')
  + getSleepHours('sunday');
  return sumSleepHoursPerDay;
};

//console.log(getActualSleepHours());

function getIdealSleepHours() {
  const idealHours = 8 * 7;
  return idealHours
}

//console.log(getIdealSleepHours());

function calculateSleepDebt() {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours){
    console.log('You have the perfect amount of sleep!')
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`You have ${idealSleepHours - actualSleepHours } hours of sleep than needed!`)
  } else {
    console.log('You should get some rest!')
  }
};

calculateSleepDebt(); // You should get some rest!
