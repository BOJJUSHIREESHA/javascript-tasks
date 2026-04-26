//LEVEL 1:Variables
//Task 1:

var name = "Naveen";
console.log(name);


//Task 2:
let age = 20;
age = age + 5;
console.log(age);

//Task 3:
const country = "India";
console.log("I am from " + country);


//LEVEL 2: Data Types
//Task 4:
let str = "Hello";
let num = 10;
let isTrue = true;
let notDefined;
let emptyValue = null;

console.log(typeof str);        // string
console.log(typeof num);        // number
console.log(typeof isTrue);     // boolean
console.log(typeof notDefined); // undefined
console.log(typeof emptyValue); // object (special case in JS)

//Task 5:
let fruits = ["apple", "banana", "orange", "grape"];

console.log(fruits[0]); // first fruit
console.log(fruits[fruits.length - 1]); // last fruit
console.log(fruits[Math.floor(fruits.length / 2)]); // middle fruit

//Task 6:
let student = {
    name: "Naveen",
    age: 20,
    course: "JavaScript"
};

console.log(student.name);
console.log(student.course);


//LEVEL 3:OPERATORS
//Task 7:
let a = 20;
let b = 5;

console.log(a + b); // addition
console.log(a - b); // subtraction
console.log(a * b); // multiplication
console.log(a / b); // division
console.log(a % b); // modulus

//Task 8:
let x = 10;
x++;   // increase by 1
console.log(x);

//Task 9:
let result = 2 ** 5;
console.log(result);


//LEVEL 4: Comparison
//Task 10:
console.log(10 > 5);      // true
console.log(20 < 15);     // false
console.log(5 == "5");    // true (loose equality)
console.log(5 === "5");   // false (strict equality)

//Task 11:
console.log("100" > 50);        // true
console.log(null == undefined); // true


//LEVEL 5:Logical Operators
//Task 12:
let age1 = 22;
let citizen = true;
console.log(age1 >= 18 && citizen == true);

//Task 13:
let marks = 35;

console.log(marks >= 35 || marks > 40);


//LEVEL 6: Ternary Operator
//Task 14:
let num1 = 7;

let result1 = (num1 % 2 === 0) ? "Even" : "Odd";
console.log(result1);

//Task 15:
let password = true;

let message = password ? "Welcome User" : "Wrong Password";
console.log(message);