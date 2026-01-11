// --- 1. Constants and Variables ---
const PI = 3.14;
let radius = 3;
let area = 0;
area = radius * radius * PI;
console.log("Area:", area);

radius = 4; // We can change this because it is a 'let'
area = radius * radius * PI;
console.log("New Area:", area);

// PI = 4; // If you uncomment this, the code will break (Constants can't change)


// --- 2. Type Coercion ---
const one = 1;
const two = '2';
let result = one + two;
console.log("Type Coercion Result:", result); 
// Watch the console: It will say "12" (string) not 3 (math). 
// JS turns the number 1 into a string because '2' is a string.


// --- 3. Global and Block Scope ---
let course = "CSE131"; // Global scope (Available everywhere)

if (true) {
    let student = "John"; // Block scope (Only exists inside these brackets)
    console.log("Inside block - Course:", course);  // Works
    console.log("Inside block - Student:", student); // Works
}

console.log("Outside block - Course:", course); // Works

// THE LINE BELOW WILL CAUSE AN ERROR
// This is intentional. 'student' does not exist out here.
console.log("Outside block - Student:", student);