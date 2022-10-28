import React from 'react';
import { Typography } from 'antd';

import styles from './NotFoundPage.module.css';

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
