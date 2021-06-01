js = 'amazing'
console.log(100 + 101)
console.log("jonas")

//                          variables

let firstName = "bob"
console.log(firstName)
let PI = 3.1415      // if it is a constant use uppercase

let javascriptIsFun = true
console.log(javascriptIsFun)
console.log(typeof "Jonas")
console.log(typeof 23)

//                      let , const , var declerations


let name = "ajay";
name = "raj";
console.log(name)
// let is block scoped and var is function scoped

//                       Operators in JS

const nowYear = 2021
const ageJonas = nowYear - 1997
const ageRick = nowYear - 1999
console.log(ageJonas, ageRick)

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

//                         Comparison operators

console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

//                            Operator Precedence

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

// string datatypes and template literals
let firstName = "ajay"
let thisyear = 2021
let dob = 1999
let job = "Software developer"
let aboutMe = `I'm ${firstName}, a ${thisyear - dob} year old ${job}!`;
console.log(aboutMe)

console.log(`string with \n\ multiple \n\ lines`)
console.log(`string with more
multiple
lines`)  // above and this both are same

//                          Coding Challenge #2

// Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

// 1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

// HINT: Use an if/else statement

let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;


let BMIMark = massMark / heightMark ** 2;
let BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Marks's (${BMIMark})!`)
}

//                      type conversion and correction

let year = '1999'
console.log(Number(year) + 1)

console.log("23" + 23) // if + sign is present the number is converted to string and it displays 2323
console.log('23' - 3) // as - sign present the string is converted to number and it displays 20
console.log('10' - '4' - '3' - 2 + 5) // first as - sign 10-4-3-2 is done and result is converted to string and merges with 5. displays 15


// t                ruthly and falsely operators

console.log(Boolean(0)) // boolean 0 is false
console.log(Boolean(1)) // boolean 0 is true

const money = 0;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log('You should get a job!'); //returns else value as boolean 0 is a falsly value
}

//                   Equality Operators: == vs. ===

const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // 22 === 23 -> FALSE
    console.log('Cool! 23 is an amzaing number!')
} else if (favourite === 7) {
    console.log('7 is also a cool number')
} else if (favourite === 9) {
    console.log('9 is also a cool number')
} else {
    console.log('Number is not 23 or 7 or 9')
}

if (favourite !== 23) console.log('Why not 23?');

// Logical Operators
let hasDriversLicense = true; // A
let hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}

let isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}

//                      Coding Challenge #3

// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

// 3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
// 4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

// TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

let scoreDolphins = (96 + 108 + 89) / 3;
let scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
    console.log('Dolphins win the trophy');
} else if (scoreKoalas > scoreDolphins) {
    console.log('Koalas win the trophy');
} else if (scoreDolphins === scoreKoalas) {
    console.log('Both win the trophy!');
}

//                    BONUS 1

let scoreDolphins = (97 + 112 + 80) / 3;
let scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log("dohphins win the trophy")
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log("kolas won the trophy")
} else if (scoreKoalas === scoreDolphins && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log("both win the trophy")
} else {
    console.log("no one wins the trophy")
}

//                  switch case

let day = 'sunday'
switch (day) {
    case 'monday':
        console.log("its monday")
        break;
    case 'tuesday':
        console.log("tuesday")
        break;
    case 'wednesday':
        console.log("its wensday")
        break;
    case 'thrusday':
        console.log("its thrusday")
        break;
    case 'friday':
        console.log("its friday")
        break;
    case 'saturday':
    case 'sunday':
        console.log("its weekend")
        break;
}

//                The Conditional (Ternary) Operator

//                     Coding Challenge #4

// Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, 
// it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

// 1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use
// an if/else statement (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). 
// Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

// TEST DATA: Test for bill values 275, 40 and 430

// HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 

let bill = 430
let tip = (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20)
console.log(`the bill is ${bill}, tip is ${tip} and total bill + tip is ${bill + tip}`)