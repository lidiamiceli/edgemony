import React from 'react';
import Display from './components/Display';
import './App.css';
import Keyboard from './components/Keyboard'; 

const App = () => {
  return (
    <div className="calculator">
      <Display />
      <Keyboard />
    </div>
  );
};

export default App;


