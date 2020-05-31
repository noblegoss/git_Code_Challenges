// setting a variable for today's forecast.
let kelvin = 300;
// converting kelvin to celsius
let celsius;
celsius = kelvin - 273;
console.log(celsius);
// converting celsius to fahrenheit
let fahrenheit;
fahrenheit = celsius * (9/5) + 32;
console.log(fahrenheit);
// round down the Fahrenheit temperature.
fahrenheit = Math.floor(fahrenheit);
console.log(fahrenheit);
// string interpolation
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`); // The temperature is 80 degrees Fahrenheit.

// converting celsius to Newton
const newton = celsius * 33/100;
console.log(newton);
console.log(Math.floor(newton));
console.log(`The temperature is ${newton} degrees newton.`); // The temperature is 8.91 degrees newton.

console.log(`The temperature is ${Math.floor(newton)} degrees newton.`); // The temperature is 8 degrees newton.
