// Cited: Gemini 3 Pro and Claude Haiku 4.5 for code generation and edits
const themeSelector = document.querySelector('#theme-select'); // Select the dropdown
const logo = document.querySelector('#logo'); // Select the logo image

function changeTheme() {
    // Check the value of the dropdown
    if (themeSelector.value === 'dark') {
        // If "Dark" is selected:
        document.body.classList.add('dark'); // Add the .dark class (turns bg gray)
        logo.src = 'https://consent.trustarc.com/v2/asset/16:31:37.768zapcra_BYU-Idaho-Logo-Box.svg';    // Swap to the white logo
    } else {
        // If "Light" is selected:
        document.body.classList.remove('dark'); // Remove the .dark class
        logo.src = 'https://brightspotcdn.byui.edu/dims4/default/da76ca4/2147483647/strip/true/crop/604x314+0+0/resize/1600x832!/format/webp/quality/90/?url=http%3A%2F%2Fbyu-idaho-brightspot-production-us-east-2.s3.us-east-2.amazonaws.com%2F6c%2Fa1%2Fb3306ea14ed5aef8b82a86ee39d0%2Fbyui-offical-logo-blue-01.png';       // Swap back to the blue logo
    }
}

// Add the event listener to listen for changes
themeSelector.addEventListener('change', changeTheme);