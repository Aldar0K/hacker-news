import React, { FC } from 'react';
import styles from './Footer.module.css';

const _Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.github}>
          <a href="https://github.com/Aldar0K" target="blank">
            GitHub
          </a>
        </div>
        <div className={styles.data}>
          <span className={styles.copyright}>ⓒ</span>
          <span className={styles.date}>2022</span>
        </div>
      </div>
    </footer>
  );
};

export default _Footer;
