let restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {thu: {open: 12,close: 22,},fri: {open: 11,close: 23,},sat: {open: 0, close: 24,},
      
    },

    order:function(starterIndex,mainIndex){
        return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]]
    },
    orderDelivery: function({starterIndex,mainIndex,time,address='hyd'}){
        console.log(`order  received, ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be
        delivered to ${address} at ${time}`);
    }// here we can set default values aslo
};




//                          destructuring objects

restaurant.orderDelivery({starterIndex:2,mainIndex:1,time:"22:30"});

let{name,openingHours,categories}=restaurant;
console.log(name,openingHours,categories)

let{name: resturantName,openingHours:hours,categories:tags}=restaurant // if we want to assign new variable names to it.
console.log(resturantName,hours,tags)

// mutating objects
let a=100
let b=99
let obj={a:1,b:2};
({a,b}=obj); // inorder to destructure objects we need to put them in ()braces.
console.log(a,b);

let{fri:{open,close}} = openingHours; // nested objects
console.log(open,close);


//                          destructuring arrays
let arr=[2,3,4]
let [x,y,z]=arr
console.log(x,y,z)
console.log(arr)

let[first, ,third]=restaurant.categories; //skipping the second element and destructuring only 1st , 3rd
console.log(first,third)

let[starter,mainCourse]=restaurant.order(2,0)
console.log(starter,mainCourse)

// nested destructuring

let nested=[2,4,[5,6]]
let [i, ,[j,k]]=nested      
console.log(i,j,k)


//                          working with strings part 1

let airline='air india'
let plane='A230'

console.log(airline[2])
console.log('B777'[2])

console.log(airline.length)
console.log('B777'.length)

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r')); // if there are many r's present in string
console.log(airline.indexOf('india'));

console.log(airline.slice(4)); // starts from 4 to end
console.log(airline.slice(4,9));

console.log(airline.slice(0,airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(' ')+1)) // to get last word

console.log(airline.slice(-2));

//excercise
let checkMiddleSeat=function(seat){
    let myseat=seat.slice(-1)
    if(myseat=='B'||myseat=='E'){
        console.log("you got middle seat")
    }else{
        console.log("you got lucky")
    }
}
console.log(checkMiddleSeat("11B"))
console.log(checkMiddleSeat("21C"))

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// fixing capitilaztion
let passenger = 'AjAy'; // Ajay
let passengerLower = passenger.toLowerCase();
let passengerCorrect = passenger[0].toUpperCase() + passengerLower.slice(1)
console.log(passengerCorrect)

// fixing email
let myemail = ' AjaYKondapaLLi@Gmail.com \n';
let emailCorrected=myemail.toLowerCase().trim();
console.log(emailCorrected);

//  replacing
let announcement="All passengers come to boarding door 23. Boarding door 23!";
console.log(announcement.replace("door","gate"));
console.log(announcement.replaceAll("door","gate"));

//Boolean
let flight="AirBus A320neo";
console.log(flight.includes("A320"));
console.log(flight.includes("indigo"));
console.log(flight.startsWith("Air"));

if (flight.startsWith('AirBus') && flight.endsWith('neo')) {
    console.log('Part of the NEW ARirbus family');
  }

// Practice exercise
const checkBaggage = function (items) {
    const baggage = items.toLowerCase();
  
    if (baggage.includes('knife') || baggage.includes('gun')) {
      console.log('You are NOT allowed on board');
    } else {
      console.log('Welcome aboard!');
    }
};
  
checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

//                          Working with Strings Part-2

// Split and Join
console.log("This+is+NewYork".split("+"));
console.log("Hyderabad Telangana".split(" "));

let [firstName, lastName]="ajay raj".split(" ");
let newName=["Mr.",firstName,lastName.toUpperCase()].join(" ");
console.log(newName);

let capitalizeName = function (name) {
    let correctName=[];
    let word= name.split(" ");

    for(let n of word){
        correctName.push(n[0].toUpperCase() + n.slice(1));
        // correctName.push(n.replace(n[0], n[0].toUpperCase()));
    }
    console.log(correctName.join(" "));
};
capitalizeName("ajay raj");

//                          Scope in practise

function calcAge(birthYear) {
    let age = 2021 - birthYear;
  
    function printAge() {
      let output = `${myFirstName}, you're age is ${age} and born in ${birthYear}`;
      console.log(output);
  
      if (birthYear < 2000) {
        var millenial = false; //var is function scoped, it ignores the blocks
  
        // Creating NEW variable with same name as outer scope's variable
        let myFirstName = "raj";
  
        // Reasssigning outer scope's variable
        output = "NEW OUTPUT!";
  
        let str = `Oh ${myFirstName}, you're born in the 1990's`; // let and const are block-scoped,they cannot be accessed outside their block
        console.log(str);
  
        function add(a, b) {
          return a + b;
        }
      }
      console.log(millenial);
      console.log(output);
    }
    printAge();
    return age;
  }
  
  let myFirstName = "ajay";
  calcAge(1999);
  
  
//                      Hoisting and TDZ(temporal dead zone) in practise

//hoisting with variables

console.log(me); // var goes undefined
//console.log(job); //gets error here "cannot acess before initialization".
//console.log(age);

var me = "Ajay";
let job = "Developer";
const age = 1999;

//hoisting with functions

console.log(addNumbers(5, 5)); // no errors
//console.log(addExpr(5, 5)); // throws error because the function is aslo assigned to const.
//console.log(addArrow(5, 5));

function addNumbers(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};
var addArrow = (a, b) => a + b;

// Example of hoisting failing

console.log(undefined);
if (!numProducts) deleteShoppingCart();
//because var will be declared as undefined after hoisting the deleteShoppingCart function executes.

var numProducts = 10;

function deleteShoppingCart() {
  console.log("All products deleted!");
}

//                The this Keyword in Practice

console.log(this);

const myCalcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); // here it goes undfined
};
myCalcAge(1991);

const myCalcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
myCalcAgeArrow(1980);

const ajay = {
  year: 1991,
  myCalcAge: function () {
    console.log(this);
    console.log(2037 - this.year);  
  },
};
ajay.myCalcAge();  // here it returns ajay because ajay is calling myCalcAge.
//next it returns 2037-1999 because this is called by year so 1999 is called

const raj = {
  year: 2017,
};

raj.myCalcAge = ajay.myCalcAge;
raj.myCalcAge();// here this refers to raj which is called by ajay so it give 2037-2017
