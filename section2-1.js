// Section 2.1
// let acts as var
let myName = 'Max';
console.log(myName);

// correct
myName = 'Manu';
console.log(myName);

// const acts as a constant
const myName2 = 'Max';
console.log(myName);

// error
// myName2 = 'Manu';
// console.log(myName);

// ---
// Section 2.2
// arrows act as function
const printMyName = name => {
  console.log(name);
}

printMyName('Max');

// simplified form
const multiply = number => number * 2;

console.log(multiply(2));

// ---
// Section 2.3
// import defaults
// import someThing from './somefile.js'

// import named values
// import {someThing} from './somefile.js'

// use 'as' to assign an allias
// use '*' to bring in all
