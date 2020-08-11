/***** ES6 : ES2015 *****/

/* --- let and const --- */

// ES5 : var
var name = 'Jane Smith';
var age = 23;
name = 'Jane Miller';
console.log(name, age);

// ES6 : let and const
const nameES6 = 'Jane Smith';
let ageES6 = 23;
nameES6 = 'Jane Miller';
console.log(name, age);


// ES5 : fx-scoped
function dL(pass) {
  if (pass) {
    var fName, bYear;
    fName = 'John';
    bYear = 1990;
  }
  console.log(fName, bYear);
}
dL(true);

// ES6 : block-scoped
function dLES6(pass) {
  if (pass) {
    let fName = 'John';
    const bYear = 1990;
  }
  console.log(fName, bYear);
}
dLES6(true);


// ES5 : scoping
var i = 23;
for (var i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i); // i = 5
// vars w. same name ins and out the block are same.

// ES6 : scoping
let j = 23;
for (let j = 0; j < 5; j++) {
  console.log(j);
}
console.log(j); // j = 23
// vars w. same name ins and out the block are diff.


/* --- IIFEs and Blocks --- */

// ES5 : IIFEs
(function () {
  var a = 2;
  var b = 3;
  console.log(a + b);
})();

// ES6 : Blocks
{
  let c = 4;
  let d = 5;
  console.log(c * d);
}


/* --- Strings --- */

let fName = 'John';
let lName = 'Smith';
const bYear = 1990;
function calcAge(year) {
  return 2020 - year;
}

// ES5 : Strings
console.log('This is ' + fName + ' ' + lName + '. I was born in ' + bYear + ' and am ' + calcAge(bYear) + ' years old.');

// ES6 : Strings
console.log(`This is ${fName} ${lName}. I was born in ${bYear} and am ${calcAge(bYear)} years old.`); // template-literal

const name = 'Ravi Shankar';
console.log(name.startsWith('R'));
console.log(name.startsWith('r')); // case-sensitive
console.log(name.endsWith('ar'));
console.log(name.includes('nk'));
console.log(`${name}, `.repeat(5)); // spacing b/w repeat


/* --- Arrow Functions --- */

const years = [1983, 2007, 2011, 2018];

// ES5 : function
var ages = years.map(function (curr) {
  return 2020 - curr;
});
console.log(ages);

// ES6 : arrow-fx
let agesES6 = years.map(curr => 2020 - curr); // simple arrow-fx
console.log(agesES6);

agesES6 = years.map((curr, ind) => `Age for element ${ind + 1} is ${2020 - curr}`); // arrow-fx w. args.
console.log(agesES6);

agesES6 = years.map((curr, ind) => {
  const now = new Date().getFullYear();
  const age = now - curr;
  return `Age for element ${ind + 1} is ${age}`; // arrow-fx w. args and expr.
});
console.log(agesES6);


/* --- Arrow Fx : this keyword --- */

// ES5 : this keyword
var box = {
  color: 'green',
  postn: 1,
  click: function () { // fx - obj.method
    var self = this; // hack : decl self and point the the this obj ins the method.
    document.querySelector('.green').addEventListener('click', function () { // fx - regular fx
      // var str = 'This is box number ' + this.postn + ' of color ' + this.color; // this -> global window object
      var str = 'This is box number ' + self.postn + ' of color ' + self.color; // this -> box object
      alert(str);
    });
  }
};
// box.click();

// ES6 : lexical this keyword
const boxES6 = {
  color: 'green',
  postn: 1,
  click: function () {
    document.querySelector('.green').addEventListener('click', () => { // arrow-fx
      let str = `This is box number ${this.postn} of color ${this.color}.`; // this -> boxES6 (lexical share)
      alert(str);
    });
  }
};
boxES6.click();


// arrow-fx are used only to preserve this keyword
const boxES61 = {
  color: 'green',
  postn: 1,
  click: () => { // arrow-fx used and this -> window obj now (lexical share)
    document.querySelector('.green').addEventListener('click', () => { // arrow-fx
      let str = `This is box number ${this.postn} of color ${this.color}.`; // this -> boxES61 -> window (root lexical share)
      alert(str);
    });
  }
};
boxES61.click();


function Person(name) { // fx-constr
  this.name = name;
}

// ES5 : fx constructor protoype
Person.prototype.friends = function (frnds) { // fx - obj.method
  var arr = frnds.map(function (curr) { // fx - regular fx
    return this.name + ' is friends with ' + curr; // this -> window
  }.bind(this)); // hack : bind this keyword with the fx to make this -> Person obj
  console.log(arr);
};

var frnds = ['Jane', 'Bob', 'Mark'];
new Person('John').friends(frnds);

// ES6 : fx constructor protoype
Person.prototype.friendsES6 = function (frndsES6) { // fx - obj.method
  let arrES6 = frndsES6.map(curr => `${this.name} is friends with ${curr}`); // arrow-fx : this -> Person obj
  console.log(arrES6);
};

let frndsES6 = ['Lily', 'Peter', 'Scott'];
new Person('Mike').friendsES6(frndsES6);


/* --- Destructuring --- */

var john = ['John', 26];

// ES5 : arr-destructuring
var name = 'John';
var age = 26;
console.log(name, age);

// ES6 : arr-destructuring
const [nameES6, ageES6] = ['Mike', 32];
console.log(nameES6, ageES6);

// ES6 : obj-destructuring
const obj = { fName: 'John', lName: 'Smith' };

const { fName, lName } = obj; // destr. w. same keys
console.log(fName, lName);

const { fName: a, lName: b } = obj; // destr. w. diff keys
console.log(a, b);

// Usecase : return multiple values from a fx.
calcRetirement = function (year) {
  const age = new Date().getFullYear() - year;
  return [age, 65 - age];
}
const [currAge, retirement] = calcRetirement(1993);
console.log(currAge, retirement);


/* --- Arrays --- */

const boxes = document.querySelectorAll('.box');

// ES5 : list -> array
var boxArr = Array.prototype.slice.call(boxes); // hack : list -> array
boxArr.forEach(function (curr) {
  curr.style.backgroundColor = 'dodgerblue';
});

// ES6 : list -> array
const boxesArr = Array.from(boxes); // from()
boxesArr.forEach(curr => curr.style.backgroundColor = 'lightpink'); // arrow-fx

// ES5 : loop w. break and continue
for (var i = 0; i < boxArr.length; i++) {
  if (boxArr[i].className === 'box blue') {
    continue;
  }
  boxArr[i].textContent = 'I changed to blue.';
}

// ES6 : loop w. break and continue
for (const curr of boxesArr) {
  if (curr.className.includes('blue')) {
    curr.style.backgroundColor = 'dodgerblue';
    continue;
  }
  curr.textContent = 'I changed to light pink.';
}

const ages = [11, 17, 21, 15, 7, 12];
// ES5 : Finding Array Elements
var adults = ages.map(function (curr) {
  return curr >= 18;
});
console.log(adults);
console.log(adults.indexOf(true), ages[adults.indexOf(true)]);

// ES6 : Finding Array Elements
console.log(ages.findIndex(curr => curr >= 18), ages.find(curr => curr >= 18));


/* --- The Spread Operator --- */

function add(a, b, c, d) {
  return a + b + c + d;
}

// ES5 : Add Arr Elems
var arr = [12, 17, 31, 23];
var sum = add.apply(null, arr);
console.log(sum);

// ES6 : Add Arr Elems
const arrES6 = [8, 21, 10, 34];
const sumES6 = add(...arrES6); // using ... operator
console.log(sumES6);

// ES6 : Join Arrays
const arrJoin = [...arr, 5, ...arrES6]; // ... operator w. custom elem
console.log(arrJoin);

// ES6 : Spread on NodeList
const head = document.querySelector('h1'); // sel h1 elem
const boxs = document.querySelectorAll('.box'); // returns nodeList
const spNL = [head, ...boxs]; // elem w. nodeList

Array.from(spNL).forEach(curr => curr.style.color = 'purple'); // list -> arr.forEach()


/* --- Rest Parameters --- */

// ES5 : Arbit. Arguments
function calcAge() {
  // console.log(arguments); // 'arguments'- special variable in exec. context
  var arr = Array.prototype.slice.call(arguments); // args -> arr using slice.call()
  arr.forEach(function (curr) {
    console.log((2020 - curr) >= 18);
  })
}
calcAge(1990, 1993, 1996, 2011);
calcAge(1987, 1965, 2007, 2015, 1994, 1992);

// ES6 : Rest Parameters
function isAdult(...years) { // ... rest parameter w. variable
  years.forEach(curr => console.log((2020 - curr) >= 18));
}
isAdult(1990, 1993, 1996, 2011);
isAdult(1987, 1965, 2007, 2015, 1994, 1992);


// ES5 : Arbit. Args w. predef arg
function calcAge(lim) {
  // console.log(arguments); // 'arguments'- special variable in exec. context
  var arr = Array.prototype.slice.call(arguments, 1); // args -> arr w/o. predef arg.
  arr.forEach(function (curr) {
    console.log((2020 - curr) >= lim);
  })
}
calcAge(16, 1990, 1993, 1996, 2011);
calcAge(21, 1987, 1965, 2007, 2015, 1994, 1992);

// ES6 : Rest Params w. predef arg
function isAdult(lim, ...years) { // ... rest parameter w. predef arg
  years.forEach(curr => console.log((2020 - curr) >= lim));
}
isAdult(16, 1990, 1993, 1996, 2011);
isAdult(21, 1987, 1965, 2007, 2015, 1994, 1992);


/* --- Default Parameters --- */

// ES5 : fx-constr w. def params
function Person(name, age, country) { // params -> undefined by default

  country === undefined ? country = 'India' : country; // set def params

  this.name = name;
  this.age = age;
  this.country = country;
}
var ravi = new Person('Ravi', 26); // 2 of 3 args passed
var john = new Person('John', 30, 'USA');
console.log(ravi, john);

// ES6 : fx-constr w. def params
function PersonES6(name, age, country = 'India') {
  this.name = name;
  this.age = age;
  this.country = country;
}
var ravi = new PersonES6('Ravi', 26); // 2 of 3 args passed
var john = new PersonES6('John', 30, 'USA');
console.log(ravi, john);


/* --- Maps --- */

const ques = new Map(); // creates a new Map obj

// set key-value pairs
ques.set('que', 'Who was the MoM in 2011 WC match b/w. Ind v Pak ?');
ques.set(1, 'Virender Sehwag');
ques.set(2, 'Sachin Tendulkar');
ques.set(3, 'Yuvraj Singh');
ques.set(4, 'MS Dhoni');
ques.set('ans', 2);
ques.set(true, 'Correct ! Tendulkar scored 85 runs and was adjudged the Man of the Match.');
ques.set(false, 'Incorrect ! Please try again.');

// poprties and methods
console.log(ques.size);
console.log(ques.get('que'));
console.log(ques.has('ans'));
// console.log(ques.delete(4));
// console.log(ques.clear());

// iteration : forEach and for-of loop
// ques.forEach((val, key) => console.log(`Key : ${key}, Val : ${val}`));

for (let [key, val] of ques.entries()) {
  if (typeof (key) === 'number') {
    console.log(key, val);
  }
}

const inp = parseInt(prompt(`Enter the answer : `));
console.log(ques.get(inp === ques.get('ans')));


/* --- Classes --- */

// ES5 : fx-constructor
function Person(name, year, prof) {
  this.name = name;
  this.year = year;
  this.prof = prof;
}

Person.prototype.calcAge = function () {
  var age = new Date().getFullYear() - this.year;
  console.log(age);
};

var john = new Person('John', 1990, 'teacher');

// ES6 : Class
class PersonES6 {

  // each class has a constr-fx
  constructor(name, year, prof) {
    this.name = name;
    this.year = year;
    this.prof = prof;
  }

  // methods
  calcAge() {
    let age = new Date().getFullYear() - this.year;
    console.log(age);
  }

  // static method
  static greet() {
    console.log('Hello!');
  }
}

const johnES6 = new PersonES6('John', 1990, 'teacher');

PersonES6.greet(); // static methods are access w. the class only


/* --- Classes and Subclasses : Inheritance --- */

// ES5 : fx-constructor
var Person = function (name, year, prof) {
  this.name = name;
  this.year = year;
  this.prof = prof;
};

Person.prototype.calcAge = function () {
  var age = new Date().getFullYear() - this.year;
  console.log(age);
};

// ES5 : Inheritance
var Athlete = function (name, year, prof, odis, runs) {
  Person.call(this, name, year, prof); // call Person obj
  this.odis = odis;
  this.runs = runs;
}
Athlete.prototype = Object.create(Person.prototype);

Athlete.prototype.wonMatch = function () {
  this.runs += 85;
  console.log(this.runs);
}

var lara = new Athlete('BC Lara', 1999, 'cricketer', 289, 8568);
lara.calcAge();
lara.wonMatch();

// ES6 : Class
class PersonES6 {
  constructor(name, year, prof) {
    this.name = name;
    this.year = year;
    this.prof = prof;
  }
  calcAge() {
    let age = new Date().getFullYear() - this.year;
    console.log(age);
  }
}

// ES6 : Inheritance
class AthleteES6 extends PersonES6 {
  constructor(name, year, prof, odis, runs) {
    super(name, year, prof);
    this.odis = odis;
    this.runs = runs;
  }
  wonMatch() {
    this.runs += 115;
    console.log(this.runs);
  }
}

var gilly = new AthleteES6('Adam Gilchrist', 2003, 'cricketer', 228, 6237);
gilly.calcAge();
gilly.wonMatch();
