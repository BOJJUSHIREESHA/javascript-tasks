// LEVEL 1 : CONCATENATION 
// Task 1
let firstName = "Spider";
let lastName = "Man";
console.log(firstName + " Hero " + lastName);
*//output: Spider Hero Man


// Task 2
let city = "Salem";
console.log("Welcome to " + city);
*//output: Welcome to Salem


// Task 3
let name = "Naveen";
let skill = "JavaScript";
console.log(`${name} learning ${skill}`);
*//output: Naveen learning JavaScript


// LEVEL 2 : TYPE CONVERSION
// Task 4
console.log("Result:", "10" + 5); // string concatenation
*//output: Result: 105


// Task 5
let num2 = Number("100");
console.log("After Conversion:", num2 + 50);
*//output: After Conversion: 150


// Task 6
console.log("Boolean(0):", Boolean(0));
*//output: Boolean(0): false


// Task 7
console.log("Boolean('hello'):", Boolean("hello"));
*//output: Boolean('hello'): true


// Task 8
console.log("Number(true):", Number(true));
*//output: Number(true): 1


// LEVEL 3 : IF STATEMENT
// Task 9
let age2 = 20;
if (age2 >= 18) {
    console.log("Eligible Vote");
}
*//output: Eligible Vote


// Task 10
let marksp = 35;
if (marksp >= 35) {
    console.log("Pass");
} else {
    console.log("Fail");
}
*//output: Pass


// Task 11
let userpassword = "1234";
if (userpassword == "1234") {
    console.log("Login Success");
} else {
    console.log("Wrong Password");
}
*//output: Login Success


// LEVEL 4 : ELSE IF
// Task 12
let hour = 9;
if (hour < 12) {
    console.log("Morning");
} else if (hour < 17) {
    console.log("Afternoon");
} else if (hour < 21) {
    console.log("Evening");
} else {
    console.log("Night");
}
*//output: Morning


// Task 13
let score = 85;
if (score >= 90) {
    console.log("Grade A");
} else if (score >= 75) {
    console.log("Grade B");
} else if (score >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}
*//output: Grade B


//LEVEL 5 : SWITCH 
// Task 14
let day = 3;
switch(day) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    default: console.log("Invalid day");
}
*//output: Wednesday


// Task 15
let color = "red";
switch(color) {
    case "red": console.log("Stop"); break;
    case "yellow": console.log("Ready"); break;
    case "green": console.log("Go"); break;
    default: console.log("Invalid color");
}
*//output: Stop


// LEVEL 6 : FOR LOOP 
// Task 16
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
*//output:
//1
 //2
 //3
 //4
 //5
 //6
 //7
 //8
 //9
//10


// Task 17
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}
*//output:
 //2
 //4
 //6
 //8
 //10
 //12
 //14
 //16
 //18
//20


// Task 18
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
*//output:
 //10
 //9
 //8
 //7
 //6
 //5
 //4
 //3
 //2
 //1


// LEVEL 7 : WHILE LOOP
// Task 19
let i = 5;
while (i >= 1) {
    console.log(i);
    i--;
}
*//output:
 //5
 //4
//3
//2
//1


// Task 20
let j = 1;
while (j <= 10) {
    console.log("2 x " + j + " = " + (2 * j));
    j++;
}
*//output:
//2 x 1 = 2
//2 x 2 = 4
//2 x 3 = 6
//2 x 4 = 8
//2 x 5 = 10
//2 x 6 = 12
//2 x 7 = 14
//2 x 8 = 16
//2 x 9 = 18
//2 x 10 = 20


//LEVEL 8 : DO WHILE LOOP 
// Task 21
let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 5);
*//output:
//1
//2
//3
//4
//5


// Task 22
let m = 10;
do {
    console.log(m);
    m--;
} while (m >= 1);
*//output:
//10
//9
//8
//7
//6
//5
//4
//3
//2
//1


// LEVEL 9 : FOR OF LOOP
// Task 23
let word = "javascript";
for (let char of word) {
    console.log(char);
}
*//output:
//j
//a
//v
//a
//s
//c
//r
//i
//p
//t


// Task 24
let arr = [10, 20, 30, 40];
for (let value of arr) {
    console.log(value);
}
*//output:
//10
//20
//30
//40


// LEVEL 10 : FOR IN LOOP 
// Task 25
let student1 = {
    name: "Naveen",
    age: 20,
    course: "JS"
};
for (let key in student1) {
    console.log(student1[key]);
}
*//output:
//Naveen
 //20
//JS


// REAL TIME TASKS 
// Task 26
let balance = 5000;
let withdraw = 2000;
balance -= withdraw;
console.log("Remaining Balance:", balance);
*//output: Remaining Balance: 3000


// Task 27
let price = 1000;
if (price > 500) {
    console.log("Discount Applied");
}
*//output: Discount Applied


// Task 28
let username = "admin";
let pass = "1234";
if (username === "admin" && pass === "1234") {
    console.log("Login Successful");
} else {
    console.log("Invalid Login");
}
*//output: Login Successful


// Task 29
let signal = "red";
switch(signal) {
    case "red": console.log("Stop"); break;
    case "yellow": console.log("Ready"); break;
    case "green": console.log("Go"); break;
}
*//output: Stop


// Task 30
for (let x = 1; x <= 15; x++) {
    if (x % 2 !== 0) {
        console.log(x);
    }
}
*//output:
//1
//3
//5
//7
//9
//11
//13
//15


// CHALLENGE TASKS 
// Task 31
let str1 = "javascript";
let count = 0;
for (let ch of str1) {
    if ("aeiou".includes(ch)) {
        count++;
    }
}
console.log("Vowel Count:", count);
*//output: Vowel Count: 3


// Task 32
let str2 = "hello";
let reversed = "";
for (let n = str2.length - 1; n >= 0; n--) {
    reversed += str2[n];
}
console.log("Reversed:", reversed);
*//output: Reversed: olleh


// Task 33
let numbers = [4, 8, 2, 9, 1];
let largest = numbers[0];
for (let num1 of numbers) {
    if (num1 > largest) {
        largest = num1;
    }
}
console.log("Largest:", largest);
*//output: Largest: 9


// Task 34
let sum = 0;
for (let s = 1; s <= 100; s++) {
    sum += s;
}
console.log("Sum 1-100:", sum);
*//output: Sum 1-100: 5050


// Task 35
let str3 = "madam";
let rev = str3.split("").reverse().join("");
if (str3 === rev) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}
*//output: Palindrome
