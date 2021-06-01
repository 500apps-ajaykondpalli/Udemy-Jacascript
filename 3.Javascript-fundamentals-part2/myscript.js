
//              Functions

function logger() {
    console.log("you are logged into a system")
}
logger();
logger();

function furitProcessor(apples, oranges) {
    console.log(`Juice is mixed of ${apples} and ${oranges}`)
}
let myOrder = furitProcessor(5, 2)
console.log(myOrder)

//            Function Declarations vs. Expressions

// Function declaration
function calcAge1(birthYeah) {
    return 2037 - birthYeah;
}
let age1 = calcAge1(1991);

// Function expression
let calcAge2 = function (birthYeah) {
    return 2037 - birthYeah;
}
let age2 = calcAge2(1991);
console.log(age1, age2);


//              Arrow functions

let myAge = birthYear => 2021 - birthYear;
let AjayAge = myAge(1999)
console.log(AjayAge)

let yearsUntilRetirement = (birthYeah, firstname) => {
    let age = 2021 - birthYeah
    let retirementAge = 65 - age
    return `${firstname} retires in ${retirementAge} years`
}
AjayRetirement = yearsUntilRetirement(1999, 'Ajay')
console.log(AjayRetirement)

//             Function calling another function

function cutFruitPieces(furit) {
    return furit * 4
}
function furitProcessor(apples, oranges) {
    applePieces = cutFruitPieces(apples)
    orangePieces = cutFruitPieces(oranges)
    return `your juice is mixed with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`
}
let ajayJuice = furitProcessor(2, 3)
console.log(ajayJuice)

//                        Coding Challenge #1
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs 
   the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores

*/

let calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins...');
    }
}
checkWinner(scoreDolphins, scoreKoalas);

