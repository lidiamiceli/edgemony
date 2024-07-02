import React from 'react';
import styles from './components/Button.modules.css';

const Button = ({ onClick }) => {
  return (
    <button className={styles.Button} onClick={onClick}>
      <img src="/img/icon-dice.svg" alt="Icon" />
    </button>
  );
};

export default Button;