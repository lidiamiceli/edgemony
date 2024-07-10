import React from 'react';
import styles from '../Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.copy}>
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
        <div className={styles.nav}>
          <ul className={styles.menu}>
            <li><a href="#home">Home</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#abbigliamento">Abbigliamento</a></li>
            <li><a href="#contatti">Contatti</a></li>
          </ul>
        </div>
        <div className={styles.social}>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
