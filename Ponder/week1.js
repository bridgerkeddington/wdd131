// --- Exercise 1: Variables and Constants ---
// Citation: Code structure and examples assisted by Gemini AI.
const PI = 3.14;
let radius = 3;
let area = 0;

// 1. Calculate area with radius 3
area = radius * radius * PI;
console.log("Area with radius 3:", area);

// 2. Calculate area with radius 4
radius = 4;
area = radius * radius * PI;
console.log("Area with radius 4:", area);

// 3. Calculate area with radius 20 
radius = 20;
area = radius * radius * PI;
console.log("Area with radius 20:", area);


// --- Exercise 2: Type Coercion ---
const one = 1;
const two = '2'; // This is a string!

// Part 1: The Problem (String Concatenation)
let result = one + two; 
console.log("Type Coercion Result (String):", result); // Outputs "12"

// Part 2: The Fix (Using parseInt to do Math) -> THIS WAS MISSING
result = one + parseInt(two);
console.log("Type Coercion Result (Integer):", result); // Outputs 3


// --- Exercise 3: Scope ---
let course = "CSE131"; // Global Scope

if (true) {
    let student = "John"; // Block Scope
    console.log("Inside block - Course:", course);
    console.log("Inside block - Student:", student);
}

console.log("Outside block - Course:", course);