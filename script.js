// complete this js code
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log("Hello, my name is " + this.name + ", I am " + this.age + " years old.");
}

function Employee(name, age, jobTitle) {
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.jobGreet = function() {
  console.log("Hello, my name is " + this.name + ", I am " + this.age + " years old, and my job title is " + this.jobTitle + ".");
}
const person1 = new Person('Alice', 25);
person1.greet(); // logs "Hello, my name is Alice, I am 25 years old."

const employee1 = new Employee('Bob', 30, 'Software Engineer');
employee1.greet(); // logs "Hello, my name is Bob, I am 30 years old."
employee1.jobGreet(); // logs "Hello, my name is Bob, I am 30 years old, and my job title is Software Engineer."

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
