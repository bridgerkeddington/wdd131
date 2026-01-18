// Cited: Gemini 3 Pro for code generation
const PI = 3.14;
let radius = 3;
let area = 0;

area = radius * radius * PI;
console.log("Area with radius 3:", area);

radius = 4;
area = radius * radius * PI;
console.log("Area with radius 4:", area);

radius = 20;
area = radius * radius * PI;
console.log("Area with radius 20:", area);


// --- Exercise 2: Type Coercion ---
const one = 1;
const two = '2'; 

let result = one + two; 
console.log("Type Coercion Result (String):", result); 

result = one + parseInt(two);
console.log("Type Coercion Result (Integer):", result);


// --- Exercise 3: Scope ---
let course = "WDD131"; 

if (true) {
    let student = "Bridger Keddington"; 
    console.log("Inside block - Course:", course);
    console.log("Inside block - Student:", student);
}

console.log("Outside block - Course:", course);


// --- NEW ASSIGNMENT CODE: DOM Manipulation ---
// 1. Select the HTML elements we need to manipulate
const dropdown = document.getElementById('webdevlist');
const htmlSection = document.getElementById('html');
const cssSection = document.getElementById('css');
const jsSection = document.getElementById('js');

// 2. Add the event listener to listen for changes in the dropdown
dropdown.addEventListener('change', function() {
    
    // Get the value selected by the user
    const choice = dropdown.value;
    
    // 3. Clear all previous highlights (Reset)
    htmlSection.classList.remove('highlight');
    cssSection.classList.remove('highlight');
    jsSection.classList.remove('highlight');

    // 4. Check which option was selected and add the highlight class
    if (choice === 'html') {
        htmlSection.classList.add('highlight');
        console.log("Selected HTML"); // Optional log for testing
    } 
    else if (choice === 'css') {
        cssSection.classList.add('highlight');
        console.log("Selected CSS");
    } 
    else if (choice === 'js') {
        jsSection.classList.add('highlight');
        console.log("Selected JS");
    }
});