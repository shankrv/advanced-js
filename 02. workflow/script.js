///////////////////////////////////////
// Lecture: Hoisting

/* functions */
calcAge(1993); // available before declaration (hoisting)
// fx - declaration
function calcAge(year) {
  console.log(2019 - year);
}

retirement(1993); // unavailable before declaration
// fx - expression (no hoisting)
var retirement = function (year) {
  console.log(65 - (2019 - year));
}


/* variables */
console.log(age); // hoisting
var age = 26;
console.log(age);

function foo() {
  console.log(age);
  var age = 45;
  console.log(age);
}
foo();
console.log(age);



///////////////////////////////////////
// Lecture: Scoping

var a = 'Hello!';
first();

function first() {
  var b = 'Hi!';
  second();

  function second() {
    var c = 'Hey!';
    console.log(a + b + c);
  }
}

/* execution stack v/s. scope chain */
var a = 'Hello!';
first();

function first() {
  var b = 'Hi!';
  second();

  function second() {
    var c = 'Hey!';
    third()
  }
}

function third() {
  var d = 'John';
  console.log(a + b + c + d);
}



///////////////////////////////////////
// Lecture: The this keyword

console.log(this);

calcAge(1993);
function calcAge(year) {
  console.log(2019 - year);
  console.log(this);
}

var john = {
  name: 'John',
  birthYear: 1990,
  calcAge: function () {
    console.log(this); // this -> object // method-call
    console.log(2019 - this.birthYear);
    function innerFun() {
      console.log(this); // this -> window // fx-call
    }
    innerFun();
  }
}
john.calcAge();

var ravi = {
  name: 'Ravi',
  birthYear: 1993
}
ravi.calcAge = john.calcAge; // fx - borrowing from object
ravi.calcAge(); // this -> object (ravi instead of john)
