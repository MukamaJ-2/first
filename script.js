// DOM Elements
const text = document.getElementById('text');
const buttonId = document.getElementById('click');
const colorInput = document.getElementById('colorInput');
const colorNameInput = document.getElementById('colorNameInput');
const errorMessage = document.getElementById('errorMessage');

// Greeting function
function greet() {
    console.log("Hello Joseph Mukama");
}

// Background color change function
function bg() {
    const colorPickerValue = colorInput.value;
    const colorNameValue = colorNameInput.value.trim();
    
    // Reset error message
    errorMessage.textContent = '';
    
    try {
        // Check if text input is empty
        if (!colorNameValue && !colorPickerValue) {
            throw new Error('Please enter a color name or use the color picker');
        }

        // Create a temporary element to test the color
        const temp = document.createElement('div');
        
        // If color name is provided, use it; otherwise use the color picker value
        const colorToTest = colorNameValue || colorPickerValue;
        
        // Test if the color is valid
        temp.style.backgroundColor = colorToTest;
        
        if (temp.style.backgroundColor === '') {
            throw new Error(`"${colorNameValue}" is not a valid color name`);
        }
        
        // Apply the color to the background
        document.body.style.backgroundColor = colorToTest;
        
        // Sync the color picker with the text input if a valid color name was used
        if (colorNameValue) {
            const tempElement = document.createElement('div');
            tempElement.style.backgroundColor = colorNameValue;
            const computedColor = window.getComputedStyle(tempElement).backgroundColor;
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = computedColor;
            ctx.fillRect(0, 0, 1, 1);
            const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;
            const hex = '#' + [r, g, b].map(x => {
                const hex = x.toString(16);
                return hex.length === 1 ? '0' + hex : hex;
            }).join('');
            colorInput.value = hex;
        }

        // Clear the text input if color was successfully applied
        if (!colorNameValue) {
            colorNameInput.value = '';
        }

    } catch (err) {
        // Show specific error message
        errorMessage.textContent = err.message;
        // Set default color if there's an error
        document.body.style.backgroundColor = 'white';
        // Clear the text input on error
        colorNameInput.value = '';
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