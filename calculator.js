const buttons = document.querySelectorAll('.button'); // Select all calculator buttons
const display = document.getElementById('display');   // Select the display area

let input = ''; // Stores the current expression

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'AC') {
      // Clear everything
      input = '';
      display.textContent = '0';

    } else if (value === '=') {
      // Calculate the result
      try {
        const result = eval(input.replace('÷', '/').replace('×', '*'));
        input = result.toString();
        display.textContent = input;
      } catch {
        display.textContent = 'Error';
        input = '';
      }

    } else {
      // Add button value to the input
      input += value;
      display.textContent = input;
    }
  });
});