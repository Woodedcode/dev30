// kelvin set to 293
const kelvin = 293;
// celsius set to 273 < kelvin
const celsius = kelvin - 273;
// setting fahrenheit
const fahrenheit = Math.floor(celsius * (9/5) + 32);
// set to Newton
const newton = Math.floor(celsius * (33/100))




console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
console.log(`The temperature is ${newton} degrees Newton.`)