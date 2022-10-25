import React from 'react';
import styles from './NotFoundPage.module.css';
import { Layout, Typography } from 'antd';

const { Content } = Layout;

const NotFoundPage = () => {
  return (
    <Content className={styles.container}>
      <Typography.Title level={2}>Page not found (404)</Typography.Title>
    </Content>
  );
};

export default NotFoundPage;
