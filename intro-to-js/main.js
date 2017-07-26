// Answer the following questions in this file using comments without running the code

// 1.
// What does `givenName` equal right now?
let givenName;
// A:right now it is blank so it empty and equals nothing. Its empty giving it a fasley value.


// 2.
// What is `givenName` set to right now?
givenName = "Tim";
// A: It is Tim and equallying a true value.


// 3.
// What is `givenName` set to right now?
givenName = givenName;
// A: It is considered empty since ' ' is not around givenname. Its a flase value.


// 4.
// What is `greeting` set to? "Hello, how are you?"
let greeting = "Hello, how are you? " + givenName;
// A: Its a true value and it is set to "Hello, how are you?"


// 5.
// What is `math` set to?
let high = 50;
let low  = 10;
let math = high - low;
// A: It is set to 40. 


// 6.
// What is `math` set to?
math = high - "5";
// A: It is 45. 


// 7.
// Create a variable to calculate Tim's age
// The answer should read "Tim is 33 years old"
// The answer shoud not be written in a comment.
let born = 1984;
let today = 2017;
console.lo (born - "2017");
// A:let age = born - "2017";


// 8.
// Adjust this code. Store some information in the following variables.
// A:
let yourName = Candace;
let instructorName = Tim
console.log (yourName, instructorName);


// 9.
// Update the variables `yourName` and `instructorName` so the expression below reads correctly.
// A:
let statement;
let yourName;
let instructorName;


// This statement should read correctly
let statement = yourName + " is taking a class at The Iron Yard, my instructor's name is " + instructorName;


// 10.
// We've created a variable named after each primitive type.
// Use the `=` operator to assign a value to each variable matching the type in the name.
let myNumber= "12";
let myString= yourName + "is taking a class at The Iron Yard, my intructor's name is" + instructorName;
let myBoolean = (yourName + "is taking a class at The Iron Yard, my instructor's name is" + instructorName);
// This one's a little tricky - think carefully about what makes a value "undefined"!
let myUndefined = x;
// A:


// For questions 11 - 19: List which boolean value will be stored in each variable. (Remember: `==` does not check data type)

// 11.
let x = (false == 0);
// A. returns false;


// 12.
let y = (false == "");
// A. returns false;


// 13.
let z = (0 == "");
// A. returns false;


// 14.
let a = (null == null);
// A. returns false;


// 25.
let b = (undefined == undefined);
// A. returns false;


// 16.
let c = (undefined == null);
// A. returns false;


// 17.
let d = (null == false);
// A. returns false;


// 18.
let e = (NaN == null);
// A. returns false;


// 19.
let f = (NaN == NaN);
// A. returns false;

// 20.
// Fix the `if...else` statement below by adding an `if` keyword and conditional expression.
// Use the variable `thirsty` as part of your conditional expression.
// A:
let thirsty = true;
if (thirsty) {
	console.log("True!");
} else {
	if (thirsty) {
	console.log ("I'm parched!");
} else {
	if (thirsty) {
  console.log("I've had enough to drink.");
}

// For questions 21 - 29 list which statement will be logged.

// 21.
let x;

if(x){
	console.log("True!");
} else {
	console.log("False!");
}
// A:
let x;

// 22.
if(""){
	console.log("True!");
} else {
	console.log("False!");
}
// A: undefined


// 23.
// this expression will set x to NaN
let x = 1 * undefined;

if(x){
	console.log("True!");
} else {
	console.log("False!");
}
// A: Nan


// 24.
if(false){
	console.log("True!");
} else {
	console.log("False!");
}
// A: Boolean


// 25.
if(-5 && 5){
	console.log("True!");
} else {
	console.log("False!");
}
// A: equal


// 26.
if("Hello World!"){
	console.log("True!");
} else {
	console.log("False!");
}
// A:True


// 27.
if({}){
	console.log("True!");
} else {
	console.log("False!");
}
// A:false


// 28.
if({name: "Yehuda Katz"}){
	console.log("True!");
} else {
	console.log("False!");
}
// A: false


// 29.
if(new Date()){
	console.log("True!");
} else {
	console.log("False!");
}
// A: false


// 30.
// Link this file to the sibling `index.html` document, open the file in your browser and make sure there are no errors in your console.
