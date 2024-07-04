import React from 'react';
import Button from './Button';
import './Keyboard.css';

const buttonValues = ["AC", "+/-", "%", "/", 7, 8, 9, "X", 4, 5, 6, "-", 1, 2, 3, "+", "R", 0, ".", "="];

const Keyboard = () => {
  return (
    <div className="keyboard">
      {buttonValues.map((value, index) => (
        <Button key={index} value={value} />
      ))}
    </div>
  );
};

export default Keyboard;
