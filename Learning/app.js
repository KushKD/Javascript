alert("Javascript Loaded");
console.log("Hello via Console");

/**
 * Variables and Data Types
 * */
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 26;

//Number , String, boolean, Undifiened and Null
//Javascript has dynamic typing i.e. Data types are automatically assigned to variables

var fullAge = true;
console.log(fullAge);

var job;  //declare and not assign a value to it
console.log(job);

job = 'teacher';
console.log(job);
//Variable name cannot be staarted with a number but $ and underscore_ works perfect

/**
 * Variable Mutation and Type Coercion
 * Conversion of Types from one another is Type Coercion
 */

var firstName = 'John';
var age = 26;
console.log(firstName + " " + age);  //Type Coercion in practice

var job, isMarried;

job = 'teacher';
isMarried = false;
console.log(firstName + " " + age + "years old" + job + " is he Married ?" + isMarried);

//Variable Mutation
age= 28;
job = 'driver';
console.log(firstName + " " + age + "years old" + job + " is he Married ?" + isMarried);

var lastName = prompt("What is his last name?");
console.log(lastName);