import React from 'react';
import styles from './NotFoundPage.module.css';
import { Typography } from 'antd';

const NotFoundPage = () => {
  return (
    <main className={`main ${styles.main}`}>
      <div className={`container ${styles.container}`}>
        <Typography.Title level={2}>Page not found (404)</Typography.Title>
      </div>
    </main>
  );
};

export default NotFoundPage;
