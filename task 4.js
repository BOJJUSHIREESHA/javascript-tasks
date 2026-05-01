// LEVEL 1(Basic Practice)

// Task 1: Array Basics
{
let arr = [10, 20, 30, 40, 50];
console.log("First Element:", arr[0]);
console.log("Last Element:", arr[arr.length - 1]);
console.log("Length:", arr.length);
}

/* OUTPUT:
First Element: 10
Last Element: 50
Length: 5 */



// Task 2:Push & Pop
{
let arr = [1, 2, 3];
arr.push(4, 5);
arr.pop();
console.log("Final Array:", arr);
}

/* OUTPUT:
Final Array: [1, 2, 3, 4] */



// TASK 3:Includes Check
{
let arr = ["html", "css", "javascript", "react"];
console.log("Is 'javascript' present?", arr.includes("javascript"));
}

/*OUTPUT:
Is 'javascript' present? true */



// LEVEL 2(Intermediate)

// Task 4: Filter Salaries
{
let emp = [
  {name:"A", salary:10000},
  {name:"B", salary:50000},
  {name:"C", salary:30000}
];
let result = emp.filter(e => e.salary > 20000);
console.log(result);
}

/* OUTPUT:
[
  { name: "B", salary: 50000 },
  { name: "C", salary: 30000 }
] */



// Task 5: Map Names
{
let emp = [
  {name:"A", salary:10000},
  {name:"B", salary:50000},
  {name:"C", salary:30000}
];
let names = emp.map(e => e.name);
console.log(names);
}

/* OUTPUT: ["A", "B", "C"] */



// Task 6: Reduce Sum
{
let emp = [
  {name:"A", salary:10000},
  {name:"B", salary:50000},
  {name:"C", salary:30000}
];
let total = emp.reduce((sum, e) => sum + e.salary, 0);
console.log(total);
}

/* OUTPUT: 90000 */


// LEVEL 3(Logic Building)

// Task 7: Remove Duplicates
{
let arr = [1,2,2,3,4,4,5]
let unique = [...new Set(arr)];
console.log(unique);
}

/* OUTPUT: [1, 2, 3, 4, 5] */



// Task 8: Find Largest Number
{
let arr = [10, 200, 5, 90];
let max = Math.max(...arr);
console.log(max);
}

/* OUTPUT: 200 */



// Task 9: Reverse String (WITHOUT reverse())
{
let str = "hello";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}
console.log(reversed);
}

/* OUTPUT: olleh */



// LEVEL 4 (Advanced Thinking)

// Task 10: Group by Salary
{
let emp = [
  {name:"A", salary:10000},
  {name:"B", salary:50000},
  {name:"C", salary:10000}
];
let result = emp.reduce((acc, e) => {
  if (!acc[e.salary]) {
    acc[e.salary] = [];
  }
  acc[e.salary].push(e.name);
  return acc;
}, {});

console.log(result);
}

/* OUTPUT:
{
  10000: ["A", "C"],
  50000: ["B"]
} */



// Task 11: Flatten Array (without flat)
{
let arr = [1, [2, [3, [4]]]];
function flatten(arr) {
  let result = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  }
  return result;
}
console.log(flatten(arr));
}

/* OUTPUT: [1, 2, 3, 4] */



// Task 12: Custom Sort (Descending)
{
let arr = [5, 2, 9, 1];
arr.sort((a, b) => b - a);
console.log(arr);
}

/* OUTPUT: [9, 5, 2, 1] */



// BONUS (Interview Level)

// Task 13: Find Second Largest
{
let arr = [10, 50, 20, 40];
let unique = [...new Set(arr)];
unique.sort((a, b) => b - a);
let secondLargest = unique[1];
console.log(secondLargest);
}

/* OUTPUT: 40 */



// Task 14: Count Characters
{
let str = "aabbccdde";
let count = {};
for (let char of str) {
  if (count[char]) {
    count[char]++;
  } else {
    count[char] = 1;
  }
}
console.log(count);
}

/* OUTPUT: { a: 2, b: 2, c: 2, d: 2, e: 1 } */
