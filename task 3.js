// LEVEL 1: FUNCTION BASCIS
// Task 1: Student Form Function
function studentform(name, age, course){
    console.log( "Name: " + name);
    console.log( "age: " + age);
    console.log( "course: "+ course);
}
studentform("Naveen", 22, "MERN");
   // Output: 
// Name: Naveen
// age: 22
// course: MERN 


// Task 2: Calculator Function
function calc(a, b) {
    console.log("Addition:", a + b);
    console.log("Subtraction:", a - b);
    console.log("Multiplication:", a * b);
}

calc(10, 5);
   // Output: 
//Addition: 15
// Subtraction: 5
//Multiplication: 50 


// Task 3:Reusable Greeting
function greet(name) {
    console.log("Hello", name);
}
greet("Kamal");
greet("Praveen");
greet("Sai");
   // Output: 
// Hello Kamal
// Hello Praveen
// Hello Sai


// LEVEL 2: Return & Scope
// Task 4: Return Value
function square(num) {
    return num * num;
}
console.log(square(5)); // 25
    // Output:25


// Task 5: Scope Check
let secret;
function testScope() {
     secret = "javascript";
}   
testScope();
console.log(secret); 
  // Output: ReferenceError

//Why this happens:
// let has block scope
// The variable secret exists only inside the function
// Outside the function, it is not accessible.


// Level 3 – Spread / Rest
// Task 6: Merge Arrays (Spread Operator)
let boys = ["car", "bike"];
let girls = ["doll", "teddy"];

let toys = [...boys, ...girls];
console.log(toys);
   // Output:
// Array(4)0: "car"
// 1: "bike"   
// 2: "doll"
// 3: "teddy"
// length: 4
// [[Prototype]]: Array(0)


// Task 7: Unlimited Numbers (Rest Operator)
function sumAll(...nums) {
    let total = 0;

    for (let num of nums) {
        total += num;
    }
    console.log(total);
}
sumAll(10, 20, 30, 40);
   // Output: 100


// Level 4 – Destructuring
// Task 8: Array Destructuring
let colors = ["red", "green", "blue"];
let [c1, c2, c3] = colors;
console.log(c1, c2, c3);
    // Output: red green blue


// Task 9: Object Destructuring
let emp = {
    name: "Naveen",
    role: "Developer",
    salary: "5LPA"
};
let { name, role } = emp;
console.log(name, role);
   // Output: Naveen Developer


// Level 5 – Real-Time Logic
// Task 10: Offer Generator
function* offerGenerator() {
    yield "10% cashback";
    yield "20% cashback";
    yield "50% cashback";
    yield "Try again";
    return "No more offers";
}
let offers = offerGenerator();

console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);
    // Output: 
//10% cashback
//20% cashback
//50% cashback
//Try again
//No more offers


// Level 6 – Advanced
// Task 11: Curry Function
function add(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

console.log(add(10)(20)(30));
    // Output: 60


// Task 12: Student Marks Analyzer
function marks(...nums) {
    let total = 0;

    for (let num of nums) {
        total += num;
    }
    let average = total / nums.length;
    console.log("Total =", total);
    console.log("Average =", average);
}
marks(80, 90, 70, 60);
   // Output: 
//Total = 300
//Average = 75


// Challenge Task (Real Company Level)
// Employee Registration System
function register(name, role, ...skills) {
    console.log("Name:", name);
    console.log("Role:", role);
    console.log("Skills:", skills.join(" "));
}
register("Naveen", "Frontend", "HTML", "CSS", "JS", "React");
    // Output:
//Name: Naveen
//Role: Frontend
//Skills: HTML CSS JS React
