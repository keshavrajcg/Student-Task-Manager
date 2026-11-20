// 1. Variables & Constants
const appName = "My First App";
let clickCount = 0;

// 2. Selecting HTML Elements (DOM)
const button = document.getElementById("myButton");
const display = document.getElementById("output");

// 3. Functions
function handleButtonClick() {
  clickCount++;
  
  // 4. Conditional Logic
  if (clickCount === 1) {
    display.textContent = "Button clicked 1 time!";
  } else {
    display.textContent = `Button clicked ${clickCount} times!`;
  }
}

// 5. Event Listeners (Running code on user action)
if (button) {
  button.addEventListener("click", handleButtonClick);
}

// 6. Console Output (For debugging)
console.log(`${appName} loaded successfully.`);
