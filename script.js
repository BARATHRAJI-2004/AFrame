function calculate() {
  try {
    let result = eval(display.value);
    history.push(display.value + ' = ' + result.toFixed(2)); // Limit result to 2 decimal places
    display.value = result.toFixed(2); // Update display with limited decimal places
    updateHistory();
  } catch (error) {
    display.value = 'Error';
  }
}

function clearHistory() {
  history = [];
  updateHistory();
}

// Keyboard support
document.addEventListener('keydown', function(event) {
  const key = event.key;
  if (!isNaN(key) || key === '.' || key === '+' || key === '-' || key === '*' || key === '/' || key === 'Enter') {
    addToDisplay(key);
  } else if (key === 'Escape') {
    clearDisplay();
  }
});
