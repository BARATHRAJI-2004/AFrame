let display = document.getElementById('display');
let historyContainer = document.getElementById('history-container');
let historyList = document.getElementById('history-list');
let history = [];

function addToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

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

function toggleHistory() {
  historyContainer.style.display = historyContainer.style.display === 'none' ? 'flex' : 'none';
}

function updateHistory() {
  historyList.innerHTML = '';
  history.forEach(item => {
    let li = document.createElement('li');
    li.textContent = item;
    historyList.appendChild(li);
  });
}
