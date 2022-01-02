// Section 2.4
// using Classes
class Man{
    constructor(){
      this.gender = 'male';
    }
    
    printGender(){
      console.log(this.gender);
    }
  }
  
// inherits Man
class Person extends Man{
  constructor(){
    // IMPORTANT! Call the super constructor!
    super();
    this.name = 'Max';
  }
    
  printMyName(){
    console.log(this.name);
  }
}
  
const person = new Person;
person.printMyName();
person.printGender();

// Section 2.5
// NextGen
class ExampleClass{
    
  myProperty = 'value';
    
  myMethod = () => {
    console.log(this.myProperty);
  }
}
  
const test = new ExampleClass;
test.myMethod();
  