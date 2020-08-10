/**--- JavaScript Basics ---**/

/* console */
console.log('Hello World!!');


/* var */
var firstName = 'Ravi';
console.log(firstName);

var lastName = 'Shankar';
var age = 26;
console.log(age);
var fullAge = true;
console.log(fullAge);

var job;
console.log(job);
job = 'student';
console.log(job);

console.log(job_profile);


/* alert */
var firstName, age, isMarried, lastName;
firstName = 'Ravi';
age = 26;
isMarried = false;
console.log(firstName + ' - ' + age + ' | Married : ' + isMarried);

age = 'twenty-six';
alert(firstName + ' - ' + age + ' | Married : ' + isMarried);

lastName = prompt('What is his last name ?');
console.log(firstName + ' ' + lastName);


/* typeof */
var now, ageRavi, ageRahul, yearRavi, yearRahul;
now = 2019;
ageRavi = 26;
ageRahul = 22;
console.log(yearRavi = now - ageRavi);
console.log(yearRahul = now - ageRahul);
console.log(now + 1);
console.log(now * 2);
console.log(now / 10);

console.log(ageRavi < ageRahul);

console.log(typeof (ageRavi > ageRahul));


/* operator */
var now, yearRavi, fullAge, isFullAge, ageRavi, ageRahul, avgAge;
now = 2019;
yearRavi = 1993;
fullAge = 18;
isFullAge = now - yearRavi >= fullAge;
console.log(isFullAge);

ageRavi = now - yearRavi;
ageRahul = 22;
avgAge = (ageRavi + ageRahul) / 2;
console.log(avgAge);

var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

x = x * 2;
x *= 2;
console.log(x);
x += 10;
console.log(x);
x++
console.log(x);


/*--- Coding Challenge 1 ---*/
var massMark, massJohn, heightMark, heightJohn, indexMark, indexJohn, isMarkFit;
massMark = prompt('Mass of Mark (kg) :');
heightMark = prompt('Height of Mark (m) :');
massJohn = prompt('Mass of John (kg) :');
heightJohn = prompt('Height of John (m) :');
indexMark = massMark / (heightMark * heightMark);
indexJohn = massJohn / (heightJohn * heightJohn);
isMarkFit = indexMark > indexJohn;
console.log(indexMark, indexJohn);
console.log("Is Mark's BMI higher than John's ? " + isMarkFit);


/* if-block */
var name = 'Ravi Shankar';
var status = 'single';
if (status === 'married') {
  console.log(name + ' is ' + status);
} else {
  console.log(name + ' is currently ' + status);
}

var isMarried = false;
if (isMarried) {
  console.log(name + ' is married.');
} else {
  console.log(name + ' is hopefully getting married in the next few years.');
}


/* if-else nested */
var name = 'Ravi';
var age = 26;
if (age < 13) {
  console.log(name + ' is a boy.');
} else if (age >= 13 && age < 20) {
  console.log(name + ' is a teenager.');
} else if (age >= 20 && age < 30) {
  console.log(name + ' is a young man.');
} else {
  console.log(name + ' is a man.');
}

/* switch-case */
var name = 'Ravi';
var age = 26;
var drink = age >= 18 ? 'beverages' : 'milk';
console.log(name + ' drinks ' + drink);

var job = 'developer';
switch (job) {
  case 'teacher':
    console.log(name + ' is a teacher.');
    break;
  case 'designer':
    console.log(name + ' is a designer.');
    break;
  case 'developer':
    console.log(name + ' is a developer.');
    break;
  default:
    console.log(name + ' does something else.');
}

switch (true) {
  case age < 13:
    console.log(name + ' is a boy.');
    break;
  case age >= 13 && age < 20:
    console.log(name + ' is a teenager.');
    break;
  case age >= 20 && age < 30:
    console.log(name + ' is a young man.');
    break;
  default:
    console.log(name + ' is a man.');
}


/* strict-equal */
var height = '';
if (height || height === 0) {
  console.log('height is defined.');
} else {
  console.log('height is NOT defined.');
}
console.log(23 == '23'); // type-coercion
console.log(23 === '23'); // strict-matching


/*--- Coding Challenge 2 ---*/
var teamJohn, teamMike, teamMary, avgJohn, avgMike, avgMary, winner;
teamJohn = 89 + 120 + 103;
teamMike = 116 + 94 + 123;
console.log(avgJohn = teamJohn / 3);
console.log(avgMike = teamMike / 3);
if (avgJohn > avgMike) {
  console.log('Winner : Team John' + ' - ' + avgJohn);
} else if (avgJohn < avgMike) {
  console.log('Winner : Team Mike' + ' - ' + avgMike);
} else {
  console.log('It\'s a Draw!');
}

teamMary = 97 + 134 + 105;
console.log(avgMary = teamMary / 3);
switch (true) {
  case avgJohn > avgMike && avgJohn > avgMary:
    console.log('Winner : Team John' + ' - ' + avgJohn);
    break;
  case avgMike > avgJohn && avgMike > avgMary:
    console.log('Winner : Team Mike' + ' - ' + avgMike);
    break;
  case avgMary > avgJohn && avgMary > avgMike:
    console.log('Winner : Team Mary' + ' - ' + avgMary);
    break;
  default:
    console.log('It\'s a Draw!');
}

/* function */
function calcAge(birthYear) {
  return 2019 - birthYear;
}
var ageRavi = calcAge(1993);
var ageRahul = calcAge(1996);
var ageRamesh = calcAge(1948);
console.log(ageRavi, ageRahul, ageRamesh);

function calcRetirement(name, year) {
  var age = calcAge(year);
  var retirement = 65 - age;
  if (retirement > 0) {
    console.log(name + ' retires in ' + retirement + ' year(s).');
  } else {
    console.log(name + ' is already retired.');
  }
}
calcRetirement('Ravi', 1993);
calcRetirement('Rahul', 1996);
calcRetirement('Ramesh', 1948);


/* declaration/expression */

// fx-declaration
function profession(name, job) { }

// fx-expression
var profession = function (name, job) {
  switch (job) {
    case 'teacher':
      return name + ' is a teacher.'
    case 'developer':
      return name + ' is a developer.'
    case 'publisher':
      return name + ' is a publisher.'
    default:
      return name + ' does something else.'
  }
}
console.log(profession('Ravi', 'developer'));
console.log(profession('Rahul', 'publisher'));
console.log(profession('Ramesh', 'driver'));

profession('Rishab', 'engineer'); // fx-expression : expects a result
if (true) { console.log(18) } // fx-statement : doesn't expect a result


/* mutation */
var names = ['Ravi', 'Rahul', 'Ramesh'];
var years = new Array(1993, 1996, 1948);
console.log(names[2]);
console.log(names);
console.log(names.length);

names[1] = 'Amit'; // mutate index
console.log(names);
names[5] = 'Ankit'; // mutate non-existent index
console.log(names);
names[names.length] = 'Suresh'; // mutate as last index
console.log(names);


/* array-methods */
var ravi = ['Ravi', 'Shankar', 1993, 'developer', false]; // using array.methods();
console.log(ravi);
ravi.push('black');
console.log(ravi);
ravi.unshift('Mr.');
console.log(ravi);
ravi.pop();
console.log(ravi);
ravi.shift();
console.log(ravi);
console.log(ravi.indexOf('developer'));

var isDesigner = ravi.indexOf('designer') === -1 ? 'Ravi is NOT a designer.' : 'Ravi IS a designer.'
console.log(isDesigner);


/*--- Coding Challenge 3 ---*/
var bill_A = 124, bill_B = 48, bill_C = 268;
var calcTip = function (bill) {
  switch (true) {
    case bill < 50:
      return 0.2 * bill;
    case bill >= 50 && bill < 200:
      return 0.15 * bill;
    case bill >= 200:
      return 0.1 * bill;
    default:
      return 0;
  }
}
var tip = [];
tip.push(calcTip(bill_A));
tip.push(calcTip(bill_B));
tip.push(calcTip(bill_C));
console.log(tip);
var paid = [];
paid.push(bill_A + (calcTip(bill_A)));
paid.push(bill_B + (calcTip(bill_B)));
paid.push(bill_C + (calcTip(bill_C)));
console.log(paid);


/* object */
var ravi = { // object literal
  firstName: 'Ravi',
  lastName: 'Shankar',
  birthYear: 1993,
  job: 'Developer',
  isMarried: false,
  family: ['Dad', 'Mom', 'Oreo']
};
console.log(ravi);
console.log(ravi.firstName);
console.log(ravi['lastName']);
var x = 'birthYear';
console.log(ravi[x]);

var jane = new Object(); // object instantiate
jane.firstName = 'Jane';
jane['lastName'] = 'Smith';
jane.birthYear = 1994
console.log(jane);


/* 'this' keyword */
var ravi = {
  firstName: 'Ravi',
  lastName: 'Shankar',
  birthYear: 1993,
  job: 'Developer',
  isMarried: false,
  family: ['Dad', 'Mom', 'Oreo'],
  calcAge: function (birthYear) { // fx - expression w/o. using the object properties
    return 2019 - birthYear;
  }
};
console.log(ravi.calcAge(1993));

var jane = {
  birthYear: 1994,
  calcAge: function () { // fx - expression using the object properties - 'this' keyword
    return 2019 - this.birthYear;
  }
};
console.log(jane.calcAge());

var john = {
  birthYear: 1996,
  calcAge: function () { // fx - expression using 'this' keyword and adding as a property
    this.age = 2019 - this.birthYear;
  }
};
john.calcAge(); // fx - statement
console.log(john.age);


/*--- Coding Challenge 4 ---*/
var mark = {
  fullName: 'Mark Wood',
  mass: 75,
  height: 1.65,
  calcBMI: function () {
    this.bmass = this.mass / (this.height * this.height);
    return this.bmass;
  }
};
var john = {
  fullName: 'John Smith',
  mass: 80,
  height: 1.63,
  calcBMI: function () {
    this.bmass = this.mass / (this.height * this.height);
    return this.bmass;
  }
};
console.log(mark.calcBMI(), john.calcBMI());
if (mark.bmass > john.bmass) {
  console.log(mark.fullName + '\'s BMI is higher than John\'s and the value is ' + mark.bmass);
} else if (john.bmass > mark.bmass) {
  console.log(john.fullName + '\'s BMI is higher than Mark\'s and the value is ' + john.bmass);
} else {
  console.log('Both have equal BMI\'s');
}


/* for loop */
for (var i = 0; i < 10; i++) { // for - loop
  console.log(i);
}

var ravi = ['Ravi', 'Shankar', 1993, 'developer', false];
for (var i = 0; i < ravi.length; i++) { // for - loop in an array
  console.log(ravi[i]);
}

var i = 0;
while (i < ravi.length) { // while - loop
  console.log(ravi[i]);
  i++;
}

for (var i = 0; i < ravi.length; i++) {
  if (typeof ravi[i] !== 'string') break; // the 'break' statement
  console.log(ravi[i]);
}

for (var i = 0; i < ravi.length; i++) {
  if (typeof ravi[i] !== 'string') continue; // the 'continue' statement
  console.log(ravi[i]);
}

for (var i = ravi.length - 1; i >= 0; i--) console.log(ravi[i]); // reverse iteration


/*--- Coding Challenge 5 ---*/
var john = {
  bill: [124, 48, 268, 180, 42],
  tips: [],
  paid: [],
  calcTip: function () {
    var percentage;
    for (var i = 0; i < this.bill.length; i++) {
      if (this.bill[i] < 50) percentage = 0.2;
      else if (this.bill[i] >= 50 && this.bill[i] < 200) percentage = 0.15;
      else percentage = 0.1;
      this.tips[i] = percentage * (this.bill[i]);
      this.paid[i] = this.bill[i] + this.tips[i];
    }
    console.log(this.tips, this.paid);
  }
};
john.calcTip();

var mark = {
  bill: [77, 375, 110, 45],
  tips: [],
  paid: [],
  calcTip: function () {
    var percentage;
    for (var i = 0; i < this.bill.length; i++) {
      if (this.bill[i] < 100) percentage = 0.2;
      else if (this.bill[i] >= 100 && this.bill[i] < 300) percentage = 0.1;
      else percentage = 0.25;
      this.tips[i] = percentage * (this.bill[i]);
      this.paid[i] = this.bill[i] + this.tips[i];
    }
    console.log(this.tips, this.paid);
  }
};
mark.calcTip();

var calcAvgTip = function (tips) {
  var sum = 0;
  for (var i = 0; i < tips.length; i++) sum = sum + tips[i];
  return sum / (tips.length); // avg-tip
}

var avgTipJohn = calcAvgTip(john.tips);
var avgTipMark = calcAvgTip(mark.tips);
if (avgTipJohn > avgTipMark) console.log('John\'s family paid the highest avg. tip : ' + avgTipJohn);
else if (avgTipMark > avgTipJohn) console.log('Mark\'s family paid the highest avg. tip : ' + avgTipMark);
else console.log('Both the families paid equal avg. tip.');
