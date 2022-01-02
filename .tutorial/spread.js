// Section 2.6
// Spread and Rest

// Spread
const array1 = [1, 4, 2, 5];

const array2 = [...array1, 5, 9, 3];
const bigArray = array2.sort();

console.log(bigArray);

// Rest
const sortArgs = (...args) => {
  return args.sort();
}

console.log(sortArgs(3, 4, 2, 6, 4));

// Section 2.7
// Destructuring

// Arrays
const testArray = ['Test', 'Array'];
[a, b] = testArray;
console.log(a);
console.log(b);

// Objects
const testing = {test:"Test", object:"Object"};
const {test} = testing;
console.log(test)
