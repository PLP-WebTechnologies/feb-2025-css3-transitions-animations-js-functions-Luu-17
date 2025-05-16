// Get elements by ID
let animatedElement = document.getElementById("animatedElement");
let animateButton = document.getElementById("animateButton");
let themeOptions = document.querySelectorAll(".theme-option");

// Function to toggle animation
function toggleAnimation() 
{
// Toggle the animation class
animatedElement.classList.toggle("pulse-animation");

// Update button text based on animation state
if (animatedElement.classList.contains("pulse-animation")) {
animateButton.textContent = "Stop Animation";
} else {
animateButton.textContent = "Start Animation";
}

// Store animation state in localStorage
let isAnimating = animatedElement.classList.contains("pulse-animation");
localStorage.setItem("animationEnabled", isAnimating);
}

// Function to set theme
function setTheme(theme) 
{
// Remove all theme classes
document.body.classList.remove("dark-theme", "colorful-theme");

// Add the selected theme class
if (theme === "dark") {
document.body.classList.add("dark-theme");
} else if (theme === "colorful") {
document.body.classList.add("colorful-theme");
}

// Update the selected class on theme options
themeOptions.forEach(option => {
option.classList.remove("selected");
if (option.id === theme) {
    option.classList.add("selected");
}
});

// Store theme preference in localStorage
localStorage.setItem("preferredTheme", theme);
}

// Function to load user preferences from localStorage
function loadUserPreferences() 
{
// Load theme preference
let savedTheme = localStorage.getItem("preferredTheme");
if (savedTheme) {
setTheme(savedTheme);
} else {
// Default theme
setTheme("light");
}

// Load animation state
let savedAnimationState = localStorage.getItem("animationEnabled");
if (savedAnimationState === "true") {
animatedElement.classList.add("pulse-animation");
animateButton.textContent = "Stop Animation";
}
}

// Add event listener to the animate button
animateButton.addEventListener("click", toggleAnimation);

// Load user preferences when the page loads
document.addEventListener("DOMContentLoaded", loadUserPreferences);