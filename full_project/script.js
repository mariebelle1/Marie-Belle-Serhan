// Get references to the buttons using their IDs
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');

// Function to handle button click event
function handleButtonClick(event) {
  const button = event.target;

  // Generate a random color and apply it to the button's background
  const randomColor = getRandomColor();
  button.style.backgroundColor = randomColor;
}

// Function to generate a random color in hexadecimal format
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Add event listeners to the buttons
button1.addEventListener('click', handleButtonClick);
button2.addEventListener('click', handleButtonClick);
button3.addEventListener('click', handleButtonClick);
