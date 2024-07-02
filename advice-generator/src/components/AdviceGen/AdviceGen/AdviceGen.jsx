import React, { useState } from 'react';
import styles from './AdviceGen.module.css';
import Button from './components/Button/Button';
import AdviceList from '../../../assets/AdviceList';

const AdviceGen = () => {
  const [advice, setAdvice] = useState(AdviceList[0]);
  const [adviceNumber, setAdviceNumber] = useState(117);

  const handleButtonClick = () => {
    const randomAdvice = AdviceList[Math.floor(Math.random() * AdviceList.length)];
    setAdvice(randomAdvice);
    setAdviceNumber(Math.floor(Math.random() * 200) + 1); 
  };

  return (
    <div className={styles.AdviceGen}>
      <h1>Advice #{adviceNumber}</h1>
      <p>{advice}</p>
      <div className={styles.divider}>
        <img
          src="/img/pattern-divider-mobile.svg"
          alt="Divider"
        />
      </div> 
      <Button onClick={handleButtonClick} />
    </div>
  );
};

export default AdviceGen;