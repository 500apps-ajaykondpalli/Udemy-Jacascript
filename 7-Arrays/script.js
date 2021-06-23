// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//slice
let arr = ["a", "b", "c", "d", "e", "f"];
console.log(arr);
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(-1, 2));
console.log(arr.slice());

//Looping Arrays: forEach
var movementss = [200, 450, -400, 3000, -650, -130, 70, 1300];
for (movement of movementss) {
  if (movement > 0) {
    console.log(`you deposited ${movement}`);
  } else {
    console.log(`you withdrew ${Math.abs(movement)}`);
  }
}

console.log("-------for each-------");

movementss.forEach(function (movement, index) {
  if (movement > 0) {
    console.log(`movement ${index + 1} : You deposited ${movement}`);
  } else {
    console.log(`movement ${index + 1} : You withdrew ${Math.abs(movement)}`);
  }
});

// the map method
// map method is used whrn we want to perform an operation with our elements.

usdToInr = 75;
let inrMovement = movements.map(function (mov) {
  return mov * usdToInr;
});
console.log(movements);
console.log(inrMovement);

inrMovementFor = [];
for (mov of movements) inrMovementFor.push(mov * usdToInr);
console.log(inrMovementFor);

let movementDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i} : You ${mov > 0 ? "deposited" : "withdrew"}  ${Math.abs(
      movement
    )}`
);
console.log(movementDescriptions);

// the filter method
// filter mwthod is used when we want to our array elements to pass any condition.

let withdrawals = movements.filter(function (mov) {
  return mov < 0;
});
console.log(withdrawals);

//the reduce method
//it is used to accumulate to one single value

let balance = movements.reduce(function (acc, mov, i) {
  console.log(` movement ${i + 1} : ${acc}`);
  return acc + mov;
}, 0);
console.log(balance);

// chainig all methods

let allDeposits = movements
  .filter(function (mov) {
    return mov > 0;
  })
  .map(function (mov) {
    return mov * usdToInr;
  })
  .reduce(function (acc, mov, i) {
    return acc + mov;
  }, 0);

console.log(allDeposits);
