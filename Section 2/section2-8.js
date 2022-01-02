// Section 2.8
// Primative Types

// numbers, strings, booleans, etc.
const number = 1;
const num2 = number;

console.log(num2);

// Reference Types
const Person = {
    name: 'Max'
};

const secondPerson = person;

person.name = 'Manu';

// Copies a pointer, rather than the value itself
console.log(secondPerson)

// Use spread to create an actual copy
const thridPerson = {
    ...person
};

console.log(thirdPerson);

// Scetion 2.9
// Array Functions

const numbers = [1, 2, 3];

const doubleNumArray = numbers.map((num) => {
    return num * 2;
});

console.log(doubleNumArray);
