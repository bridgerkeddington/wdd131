// Used Gemini Pro for code generation
// --- Exercise 1: Variables and Constants ---
const PI = 3.14;
let radius = 3;
let area = 0;

// Calculate area with radius 3
area = radius * radius * PI;
console.log("Area with radius 3:", area);

// Change radius to 4 (allowed because 'radius' is a 'let')
radius = 4;
area = radius * radius * PI;
console.log("Area with radius 4:", area);

// Try to change PI (This would cause an error if uncommented)
// PI = 4; 
// console.log("PI cannot be changed because it is a const");


// --- Exercise 2: Type Coercion ---
const one = 1;
const two = '2'; // This is a string!

// JavaScript converts the number 1 to a string to match '2'
let result = one + two; 

console.log("Type Coercion Result:", result); // Outputs "12"


// --- Exercise 3: Scope ---
let course = "CSE131"; // Global Scope

if (true) {
    let student = "John"; // Block Scope (only exists inside these braces)
    
    // Both are accessible here
    console.log("Inside block - Course:", course);
    console.log("Inside block - Student:", student);
}

// Only the global variable is accessible here
console.log("Outside block - Course:", course);

// The following line will cause an error because 'student' doesn't exist out here
// console.log("Outside block - Student:", student);