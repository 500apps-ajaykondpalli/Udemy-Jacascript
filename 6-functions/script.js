//function

let oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

let firstUpperWord = function (str) {
  let [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join("  ");
};

//higher order functions and call back
let transformer = function (str, fn) {
  console.log(`original string : ${str}`);
  console.log(`transofrmed string: ${fn(str)}`);
  console.log(`transformed by ${fn.name}`);
};

transformer("JavaScript is best", firstUpperWord);
transformer("JavaScript is best", oneWord);

let greetings = function (greet) {
  return function (name) {
    console.log(` ${greet} ${name}`);
  };
};
greetings("hey")("ajay");

greetHey = greetings("hey");
greetHey("ajay raj");

// .call and .bind methods

let lufthansa = {
  airline: "lufthansa",
  code: "LH",
  bookings: [],
  book(flightnum, name) {
    console.log(
      `${name} booked seat on ${this.airline} at ${this.code}${flightnum}`
    );
    this.bookings.push({
      flight: `${name}, ${this.airline}, ${this.code}${flightnum}`,
    });
  },
};

lufthansa.book(23, "ajay");

let book = lufthansa.book;
book.call(lufthansa, 112, "kondapalli");
console.log(lufthansa);

//bind

let booklft = book.bind(lufthansa);
booklft(112, "kane");

lufthansa.planes = 300;
lufthansa.buyplane = function () {
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyplane.bind(lufthansa));
