import React from 'react';
import styles from '../Header.module.css';

function Header({ children }) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li><a href="#home">Home</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#abbigliamento">Abbigliamento</a></li>
          <li><a href="#contatti">Contatti</a></li>
        </ul>
      </nav>
      {children}
    </header>
  );
}

export default Header;
