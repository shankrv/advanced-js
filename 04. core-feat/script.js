/**--- Advanced JavaScript ---**/

/* Function Constructors */

// object-literal
var ravi = {
  name: 'Ravi',
  birthYear: 1993,
  job: 'Employer'
};


// fx - constructor
var Person = function (name, birthYear, job) {
  this.name = name;
  this.birthYear = birthYear;
  this.job = job;
}

// prototype property outside fx-constructor
Person.prototype.calcAge = function () {
  console.log(2020 - this.birthYear)
};

// instance using fx-constructor
var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calcAge();
jane.calcAge();
mark.calcAge();

Person.prototype.lastName = 'Smith';
console.log(john.lastName, jane.lastName, mark.lastName);



/* Object.create() Method */

// 1. define an object which will act as a prototype
var personProto = {
  calcAge: function () {
    console.log(2020 - this.birthYear);
  }
};

// 2. create a new object based on that new prototype
var john = Object.create(personProto); // w/o. object data in args.
john.name = 'John';
john.birthYear = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, { // w object data as {} in args.
  name: { value: 'Jane' },
  birthYear: { value: 1969 },
  job: { value: 'designer' }
});



/* Primitives v/s Objects */

// Primitives
var a = 23, b = a;
a = 46;
console.log(a, b); // 'b' held in the init. val of 'a'

// Objects
var objA = {
  name: 'John',
  age: 30
};
var objB = objA;
objA.age = 45;
console.log(objA, objB); // 'objB' updated the 'objA' as both had refer to the same obj in memory

// Functions
var age = 26;
var obj = {
  name: 'Ravi',
  city: 'Bengaluru'
};
function change(a, b) {
  a = 28;
  b.city = 'Patna'
}
change(age, obj);
console.log(age, obj.city); // 'a' holds the value, whereas 'b.city' changes per the obj reference



/* Callback Functions */
var years = [1983, 1993, 2007, 2011, 2018];

function arrImp(arr, fun) { // fun -> callback fx
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    res.push(fun(arr[i]));
  }
  return res;
}

function calcAge(year) {
  return 2020 - year;
}

function isAdult(age) {
  return age >= 18;
}

function maxHRate(age) {
  if (age >= 18 && age <= 81) {
    return Math.round(206.9 - (0.67 * age));
  } else {
    return -1;
  }
}

var ages = arrImp(years, calcAge); // calcAge -> callback fx
var adults = arrImp(ages, isAdult); // isAdult -> callback fx
var rates = arrImp(ages, maxHRate); // maxHRate -> callback fx
console.log(ages);
console.log(adults);
console.log(rates);



/* Return Functions */
function interview(profile) {
  if (profile === 'designer') {
    return function (name) { // anonymous return fx
      console.log(name + '! Can you explain the term UI/UX ?');
    }
  } else if (profile === 'teacher') {
    return function (name) { // anonymous return fx
      console.log('What subject can you teach, ' + name + ' ?');
    }
  } else {
    return function (name) { // anonymous return fx
      console.log('Hello ' + name + ' ! What do you do ?');
    }
  }
}

var teachQ = interview('teacher');
teachQ('John'); // execution of a return fx
var designQ = interview('designer');
designQ('Jane'); // execution of a return fx
var developQ = interview('developer');
developQ('Mark'); // execution of a return fx

interview('designer')('Ravi'); // implementation of return fx



/* IIFE pattern */
function game() {
  var score = Math.random() * 10;
  console.log(score >= 5);
}
game();

(function (luck) {
  var score = Math.random() * 10;
  console.log(score >= 5);
  console.log(score >= 5 - luck);
})(3); // IIFE pattern : (func(){})();



/* Closures */
function retirement(rAge) {
  var txt = ' years left for retirement.';
  return function (birthYear) {
    var age = 2020 - birthYear;
    console.log((rAge - age), txt);
  }
}

var retireUS = retirement(66);
var retireUK = retirement(65);
var retireIN = retirement(60);
retireUS(1993);
retireUK(1993);
retireIN(1993);

retirement(65)(1990);

function interview(profile) {
  var txt = '';
  if (profile == 'teacher') {
    txt = ', Which subject can you teach ?';
  } else if (profile === 'designer') {
    txt = ', Can you explain about UI/UX ?';
  } else {
    txt = ', What do you do ?';
  }
  return function (name) {
    console.log(name, txt);
  }
}

var queDesign = interview('designer');
var queTeacher = interview('teacher');
var queDeveloper = interview('developer');
queDesign('Jane');
queTeacher('John');
queDeveloper('Mark');



/* Call, Apply and Bind Methods */
var john = {
  name: 'John',
  age: 26,
  job: 'teacher',
  present: function (style, daytime) {
    if (style === 'formal') {
      console.log('Good ' + daytime + '! Ladies and Gentlemen. My name is ' + this.name + '. I\'m ' + this.age + ' years old and a ' + this.job + ' by profession.');
    } else if (style === 'friendly') {
      console.log('Hey ! Whats up ? I\'m ' + this.name + '. I\'m a ' + this.job + ' and ' + this.age + ' years old. Have a nice ' + daytime + '!');
    }
  }
}

var jane = {
  name: 'Jane',
  age: 35,
  job: 'designer',
}

john.present('formal', 'morning');

john.present.call(jane, 'friendly', 'afternoon'); // call() or method-borrowing

john.present.apply(jane, ['formal', 'evening']); // apply() method

var johnFriend = john.present.bind(john, 'friendly'); // bind() method or carrying
johnFriend('morning');
johnFriend('evening');
johnFriend('night');


// Real Time Example
var years = [1983, 1993, 2007, 2011, 2018];

function arrImp(arr, fun) { // fun -> callback fx
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    res.push(fun(arr[i]));
  }
  return res;
}

function calcAge(year) {
  return 2020 - year;
}

function isAdult(lim, age) {
  return age >= lim;
}

var ages = arrImp(years, calcAge);
var adultJN = arrImp(ages, isAdult.bind(this, 20));
console.log(ages);
console.log(adultJN);
