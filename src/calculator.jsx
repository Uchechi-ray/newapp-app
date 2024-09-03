import React, { useState } from 'react';
import './calculator.css';

const Calc = () => {
  const [input, setInput] = useState('');

  const calculateResult = (expression) => {
    try {
      // Regular expression to split numbers and operators
      const numbers = expression.split(/[-+*/]/).map(Number);
      const operators = expression.replace(/[0-9]|\./g, '').split('');

      let result = numbers[0];

      for (let i = 0; i < operators.length; i++) {
        const operator = operators[i];
        const nextNumber = numbers[i + 1];

        if (operator === '+') result += nextNumber;
        if (operator === '-') result -= nextNumber;
        if (operator === '*') result *= nextNumber;
        if (operator === '/') result /= nextNumber;
      }

      return result;
    } catch (e) {
      return 'Error';
    }
  };

  const handleButtonClick = (value) => {
    if (value === '=') {
      const result = calculateResult(input);
      setInput(result.toString());
      return;
    }

    if (value === 'C') {
      setInput('');
      return;
    }

    setInput(input + value);
  };

  return (
    <div className="cal">
      <div className="display">{input}</div>
      <div className="buttons">
        {['7', '8', '9', '/'].map((value) => (
          <button key={value} onClick={() => handleButtonClick(value)}>
            {value}
          </button>
        ))}
        {['4', '5', '6', '*'].map((value) => (
          <button key={value} onClick={() => handleButtonClick(value)}>
            {value}
          </button>
        ))}
        {['1', '2', '3', '-'].map((value) => (
          <button key={value} onClick={() => handleButtonClick(value)}>
            {value}
          </button>
        ))}
        {['0', '.', '=', '+'].map((value) => (
          <button key={value} onClick={() => handleButtonClick(value)}>
            {value}
          </button>
        ))}
        <button onClick={() => handleButtonClick('C')}>C</button>
      </div>
    </div>
  );
};

export default Calc;
