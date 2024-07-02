import React from 'react';
import styles from './App.module.css';
import AdviceGen from './components/AdviceGen/AdviceGen/AdviceGen';

function App() {
  return (

    <div className={styles.app}>
      <AdviceGen />
    </div>
  );
}

export default App;