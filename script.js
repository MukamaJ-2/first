// DOM Elements
const text = document.getElementById('text');
const buttonId = document.getElementById('click');
const colorInput = document.getElementById('colorInput');
const errorMessage = document.getElementById('errorMessage');

// Greeting function (from original onload)
function greet() {
    console.log("Page loaded successfully!");
}

// Background color change function
function bg() {
    const color = colorInput.value;
    
    try {
        // Test if the color is valid
        const temp = document.createElement('div');
        temp.style.backgroundColor = color;
        
        if (temp.style.backgroundColor === '') {
            throw new Error('Invalid color');
        }
        
        // Clear any previous error
        errorMessage.textContent = '';
        // Apply the color to the background
        document.body.style.backgroundColor = color;
    } catch (err) {
        errorMessage.innerHTML = 'Please select a valid color';
        // Set default color if there's an error
        document.body.style.backgroundColor = 'green';
    }
}

// Text toggle function
function toggleText() {
    text.innerHTML = text.innerHTML === 'This is the first HTML, CSS and JavaScript fusion' 
        ? 'I am testing inline in Java' 
        : 'This is the first HTML, CSS and JavaScript fusion';
}

// Button click event
buttonId.onclick = function() {
    alert("Button has been clicked.");
}

// Mouse events for the button
buttonId.onmouseout = function() {
    buttonId.style.color = "red";
}

buttonId.onmouseover = function() {
    buttonId.style.color = "yellow";
}

// Call greet function when page loads
window.onload = greet;