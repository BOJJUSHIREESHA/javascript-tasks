// LEVEL 1 : CONCATENATION 

// Task 1
let firstName = "Spider";
let lastName = "Man";
console.log(firstName + " Hero " + lastName);

// Task 2
let city = "Salem";
console.log("Welcome to " + city);

// Task 3
let name = "Naveen";
let skill = "JavaScript";
console.log(`${name} learning ${skill}`);


// LEVEL 2 : TYPE CONVERSION

// Task 4
console.log("Result:", "10" + 5); // string concatenation

// Task 5
let num2 = Number("100");
console.log("After Conversion:", num2 + 50);

// Task 6
console.log("Boolean(0):", Boolean(0));

// Task 7
console.log("Boolean('hello'):", Boolean("hello"));

// Task 8
console.log("Number(true):", Number(true));


// LEVEL 3 : IF STATEMENT

// Task 9
let age2 = 20;
if (age2 >= 18) {
    console.log("Eligible Vote");
}

// Task 10
let marksp = 35;
if (marksp >= 35) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// Task 11
let userpassword = "1234";
if (userpassword == "1234") {
    console.log("Login Success");
} else {
    console.log("Wrong Password");
}


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


//LEVEL 5 : SWITCH 

// Task 14
let day = 3;
switch(day) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    default: console.log("Invalid day");
}

// Task 15
let color = "red";
switch(color) {
    case "red": console.log("Stop"); break;
    case "yellow": console.log("Ready"); break;
    case "green": console.log("Go"); break;
    default: console.log("Invalid color");
}


console.log("\n===== LEVEL 6 : FOR LOOP =====");

// Task 16
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Task 17
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// Task 18
for (let i = 10; i >= 1; i--) {
    console.log(i);
}


console.log("\n===== LEVEL 7 : WHILE LOOP =====");

// Task 19
let i = 5;
while (i >= 1) {
    console.log(i);
    i--;
}

// Task 20
let j = 1;
while (j <= 10) {
    console.log("2 x " + j + " = " + (2 * j));
    j++;
}


//LEVEL 8 : DO WHILE LOOP 

// Task 21
let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 5);

// Task 22
let m = 10;
do {
    console.log(m);
    m--;
} while (m >= 1);


// LEVEL 9 : FOR OF LOOP
// Task 23
let word = "javascript";
for (let char of word) {
    console.log(char);
}

// Task 24
let arr = [10, 20, 30, 40];
for (let value of arr) {
    console.log(value);
}


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


// REAL TIME TASKS 

// Task 26
let balance = 5000;
let withdraw = 2000;
balance -= withdraw;
console.log("Remaining Balance:", balance);

// Task 27
let price = 1000;
if (price > 500) {
    console.log("Discount Applied");
}

// Task 28
let username = "admin";
let pass = "1234";
if (username === "admin" && pass === "1234") {
    console.log("Login Successful");
} else {
    console.log("Invalid Login");
}

// Task 29
let signal = "red";
switch(signal) {
    case "red": console.log("Stop"); break;
    case "yellow": console.log("Ready"); break;
    case "green": console.log("Go"); break;
}

// Task 30
for (let x = 1; x <= 15; x++) {
    if (x % 2 !== 0) {
        console.log(x);
    }
}


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

// Task 32
let str2 = "hello";
let reversed = "";
for (let n = str2.length - 1; n >= 0; n--) {
    reversed += str2[n];
}
console.log("Reversed:", reversed);

// Task 33
let numbers = [4, 8, 2, 9, 1];
let largest = numbers[0];
for (let num1 of numbers) {
    if (num1 > largest) {
        largest = num1;
    }
}
console.log("Largest:", largest);

// Task 34
let sum = 0;
for (let s = 1; s <= 100; s++) {
    sum += s;
}
console.log("Sum 1-100:", sum);

// Task 35
let str3 = "madam";
let rev = str3.split("").reverse().join("");
if (str3 === rev) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}