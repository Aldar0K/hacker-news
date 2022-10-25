import React from 'react';
import styles from './MainPage.module.css';
import { Typography } from 'antd';

const MainPage = () => {
  return (
    <main className={`main ${styles.main}`}>
      <div className={`container ${styles.container}`}>
        <Typography.Title level={2}>MainPage</Typography.Title>
      </div>
    </main>
  );
};

export default MainPage;
