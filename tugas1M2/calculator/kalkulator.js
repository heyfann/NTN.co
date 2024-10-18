
const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');


let currentValue = '';
let previousValue = '';
let operator = '';


function updateDisplay(value) {
  display.value = value;
}


function handleNumber(number) {
  if (currentValue.length < 10) { 
    currentValue += number;
    updateDisplay(currentValue);
  }
}


function handleOperator(selectedOperator) {
  if (currentValue !== '') {
    if (previousValue === '') {
      previousValue = currentValue;
    } else {
      previousValue = calculate(previousValue, currentValue, operator);
    }
    operator = selectedOperator;
    currentValue = '';
    updateDisplay(previousValue); 
  }
}


function calculate(firstValue, secondValue, operator) {
  const a = parseFloat(firstValue);
  const b = parseFloat(secondValue);
  
  switch (operator) {
    case '+':
      return (a + b).toString();
    case '-':
      return (a - b).toString();
    case '×':
      return (a * b).toString();
    case '÷':
      return b !== 0 ? (a / b).toString() : 'Error';
    default:
      return secondValue;
  }
}

// Fungsi untuk menangani perhitungan akhir
function handleEqual() {
  if (previousValue !== '' && currentValue !== '' && operator !== '') {
    currentValue = calculate(previousValue, currentValue, operator);
    previousValue = '';
    operator = '';
    updateDisplay(currentValue);
  }
}


function handleClear() {
  currentValue = '';
  previousValue = '';
  operator = '';
  updateDisplay('0');
}


function handlePlusMinus() {
  if (currentValue !== '') {
    currentValue = (parseFloat(currentValue) * -1).toString();
    updateDisplay(currentValue);
  }
}


function handlePercent() {
  if (currentValue !== '') {
    currentValue = (parseFloat(currentValue) / 100).toString();
    updateDisplay(currentValue);
  }
}

// Fungsi untuk menangani input dari tombol
buttons.forEach(button => {
  button.addEventListener('click', function() {
    const value = this.innerText;

    // Kondisi untuk menangani angka
    if (!isNaN(value)) {
      handleNumber(value);
    } 
    // Kondisi untuk operator
    else if (value === '+' || value === '-' || value === '×' || value === '÷') {
      handleOperator(value);
    }
    // Kondisi untuk sama dengan
    else if (value === '=') {
      handleEqual();
    }
    // Kondisi untuk tombol AC
    else if (value === 'AC') {
      handleClear();
    }
    // Kondisi untuk tombol ±
    else if (value === '±') {
      handlePlusMinus();
    }
    // Kondisi untuk tombol persen (%)
    else if (value === '%') {
      handlePercent();
    }
    // Kondisi untuk titik desimal
    else if (value === '.') {
      if (!currentValue.includes('.')) {
        currentValue += '.';
        updateDisplay(currentValue);
      }
    }
  });
});
