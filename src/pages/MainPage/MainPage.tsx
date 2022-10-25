import React from 'react';
import styles from './MainPage.module.css';
import { Layout, Typography } from 'antd';

const { Content } = Layout;

const MainPage = () => {
  return (
    <Content className={styles.container}>
      <Typography.Title level={2}>MainPage</Typography.Title>
    </Content>
  );
};

export default MainPage;
