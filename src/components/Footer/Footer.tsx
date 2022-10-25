import React, { FC } from 'react';
import styles from './Footer.module.css';
import { Layout } from 'antd';

const { Footer } = Layout;

const _Footer: FC = () => {
  return (
    <Footer className={styles.container}>
      <a className={styles.github} href="https://github.com/Aldar0K" target="blank">
        GitHub
      </a>
      <div className={styles.data}>
        <span className={styles.copyright}>ⓒ</span>
        <span className={styles.date}>2022</span>
      </div>
    </Footer>
  );
};

export default _Footer;
