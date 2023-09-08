const welcomeEl = document.getElementById("welcome-el")

// Give the function a parameter, greeting, that replaces "Welcome back"
function greetUser(greetings, name) {
    welcomeEl.textContent = greetings + ", " + name    
}

greetUser("Howdy", "James")