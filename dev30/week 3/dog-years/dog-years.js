// set age
let myAge = 36;

// Create a variable for the first two years of life
let earlyYears = 2;

// Multiply earlyYears by 10.5 to convert the first two years into dog years
earlyYears *= 10.5;

// Subtract 2 from myAge since the first two years are already accounted for
let laterYears = myAge - 2;

// to calculate the number of year accounted for
laterYears *= 4
console.log("early years",earlyYears);
console.log("later years",laterYears);
// add them together
let myAgeInDogYears = earlyYears + laterYears;
// my name
let myName = "Ryan".toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} in human years, which is ${myAgeInDogYears}`)