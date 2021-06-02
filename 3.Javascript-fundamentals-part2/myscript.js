
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
/*
//                        Coding Challenge #1

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

//          Arrays and Basic Array Operations

let friends = ['virat', 'dhoni', 'rohit']
console.log(typeof friends)

let years = new Array(1999, 2000, 2001)
console.log(typeof years)
console.log(years)

let firstName = "jonas"
let jonas = [firstName, 'jones', '22', friends]
console.log(jonas)
console.log(jonas.length)

friends.push("bumrah")  // push function adds to the last value of array
console.log(friends)

friends.unshift("dhawan") // unshift adds to the start of array
console.log(friends)

friends.pop() // removes last element
console.log(friends)

friends.shift() // shift removes  the first element of array
console.log(friends)

console.log(friends.indexOf("dhoni"))  // to check the index of element

console.log(friends.includes("dhoni"))   // to know if element exists or not
console.log(friends.includes("bumrah"))


//                 Introduction to objects

let ajayrray = [
    'Ajay',
    'raj',
    2037 - 1991,
    'developer',
    ['Michael', 'Peter', 'Steven']];

let ajay = { firstName: 'Ajay', lastName: 'Raj', dob: 2021 - 1999, job: 'developer', friends: ['Michael', 'Peter', 'Steven'] };
console.log(ajay.dob)
ajay.location = "india"
console.log(ajay)

let ajay1 = {
    firstName: 'Ajay', lastName: 'Raj', birthYear: 1999, job: 'developer',
    friends: ['Michael', 'Peter', 'Steven'], hasLiscence: true,
    calcAge: function () {
        this.age = 2021 - this.birthYear;
        return this.age;          //method is age, method refers to its object so this keyword refers to the object("ajay1")
    },
    getSummary: function () {
        return `${this.firstName} ${this.lastName} has ${this.hasLiscence ? 'a' : 'no'} Driving liscence}`
    }
};

console.log(ajay1.calcAge())
//console.log(ajay1['calcAge'](1999))
console.log(ajay1.age)

console.log(ajay1.getSummary())


//                          Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

*/

let mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2
        return this.bmi;
    }
};

let john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2
        return this.bmi;
    }
};

mark.calcBMI()
john.calcBMI()

console.log(mark.bmi, john.bmi)

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
}

//                          Iteration: The for Loop

for (let rep = 1; rep <= 10; rep++) {
    console.log(`His repcount is ${rep} times!`)
}


//                      Looping Arrays, Breaking and Continuing

let ajayArray = [
    'Ajay',
    'raj',
    2037 - 1991,
    'developer',
    ['Michael', 'Peter', 'Steven']
];

for (let i = 0; i <= ajayArray.length; i++) {
    console.log(ajayArray[i], typeof ajayArray[i])
}

for (let i = 0; i < ajayArray.length; i++) {
    if (typeof ajayArray[i] != 'string') continue;
    console.log(ajayArray[i], typeof ajayArray[i])
}

for (let i = 0; i < ajayArray.length; i++) {
    if (typeof ajayArray[i] == 'number') break;
    console.log(ajayArray[i], typeof ajayArray[i])
}


//                      The while Loop

for (let rep = 1; rep <= 5; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}

let rep = 1;
while (rep <= 5) {
    console.log(`WHILE: Lifting weights repetition ${rep}`);
    rep++;
}

/*

//                          Coding Challenge 

Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value
 in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays.

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of
          all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0.
        Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end
         of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

*/
let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
let tips = []
let totals = []
let calcTip = function (bill) {
    return bill > 50 && bill <= 200 ? bill * 0.15 : bill * 0.20
}
for (let i = 0; i < bills.length; i++) {
    let tip = (calcTip(bills[i]))
    tips.push(tip)
    totals.push(bills[i] + tip)
}
console.log(tips)
console.log(totals)

