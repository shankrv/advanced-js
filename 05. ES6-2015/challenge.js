/* --- Coding Challenge # 8 --- */

console.log('--- Coding Challenge # 8 ---');

/*
Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.
*/

// a. Classify town elements.
class Element {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

class Park extends Element {
  constructor(name, year, area, tree) {
    super(name, year);
    this.area = area;
    this.tree = tree;
  }
  calcAge() {
    return new Date().getFullYear() - this.year;
  }
}

class Street extends Element {
  constructor(name, year, long, size = 'normal') {
    super(name, year);
    this.long = long;
    this.size = size;
  }
  classify() {
    if (this.long <= 250) {
      this.size = 'tiny';
    } else if (this.long > 250 && this.long <= 500) {
      this.size = 'small';
    } else if (this.long > 500 && this.long <= 750) {
      this.size = 'normal';
    } else if (this.long > 750 && this.long <= 1000) {
      this.size = 'big';
    } else if (this.long > 1000) {
      this.size = 'huge';
    }
  }
}

// b. Instance of 3 parks and 4 streets.
const parkA = new Park('Eden Park', 1990, 1250, 612);
const parkB = new Park('Green Park', 1999, 2278, 1778);
const parkC = new Park('Sabina Park', 2007, 895, 523);

// const street1 = new Street('Old Street', 1983);
const street1 = new Street('Old Street', 1983, 224);
const street2 = new Street('College Street', 2005, 731);
const street3 = new Street('Park Street', 1996, 1149);
const street4 = new Street('Chaat Street', 2018, 450);

// c. Create a data structure.
const data = new Map();
data.set('parks', [parkA, parkB, parkC]);
data.set('streets', [street1, street2, street3, street4]);

// d. Methods for density, average and totals.
console.log('..... Park Reports .....');
function density(elem) {
  data.get(elem).forEach(curr => console.log(`density of ${curr.name} : ${(curr.tree / curr.area).toFixed(2)}`));
}
density('parks');

function avgAge(elem) {
  let sum = 0;
  data.get(elem).forEach(curr => sum += curr.calcAge());
  num = data.get(elem).length;
  console.log(`avg. age of town's ${elem} : ${(sum / num).toFixed(2)}`);
}
avgAge('parks');

function centrees(elem) {
  data.get(elem).forEach(curr => {
    if (curr.tree >= 1000) {
      console.log(`${curr.name} has ${curr.tree} trees.`);
    }
  });
}
centrees('parks');

console.log('..... Street Reports .....');
function totAvg(elem) {
  let sum = 0;
  data.get(elem).forEach(curr => sum += curr.long);
  console.log(`total length of town's ${elem} : ${sum}`);
  num = data.get(elem).length;
  console.log(`avg. length of town's ${elem} : ${(sum / num).toFixed(2)}`);
}
totAvg('streets');

// e. Classify the streets.
function classifSize() {
  data.get('streets').forEach(curr => {
    curr.classify();
    console.log(`size classif. of ${curr.name} is ${curr.size}`)
  });
}
classifSize();
