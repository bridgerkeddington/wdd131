// 1. Select the HTML elements
const selectElem = document.querySelector('#theme-select');
const pageContent = document.querySelector('body');

// 2. Add the Event Listener
// When 'change' happens, run the function 'changeTheme'
selectElem.addEventListener('change', changeTheme);

// 3. Define the Function
function changeTheme() {
    // Get the value the user selected
    let current = selectElem.value;
    
    // Check the value and update CSS accordingly
    if (current === 'ocean') {
        pageContent.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/ocean.jpg')";
        pageContent.style.fontFamily = "Papyrus, fantasy";
        pageContent.style.color = "navy"; // Optional: change text color too
    } 
    else if (current === 'forest') {
        pageContent.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/forest.jpg')";
        pageContent.style.fontFamily = "Impact, sans-serif";
        pageContent.style.color = "darkgreen";
    } 
    else if (current === 'desert') {
        pageContent.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/desert.jpg')";
        pageContent.style.fontFamily = "'Big Caslon', serif";
        pageContent.style.color = "brown";
    } 
    else {
        // If they pick the default "Select a Theme" option
        pageContent.style.backgroundImage = "none";
        pageContent.style.fontFamily = "Georgia, serif";
        pageContent.style.color = "black";
    }
}