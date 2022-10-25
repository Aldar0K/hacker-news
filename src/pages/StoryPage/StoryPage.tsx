import React from 'react';
import styles from './StoryPage.module.css';
import { Layout, Typography } from 'antd';

const { Content } = Layout;

const StoryPage = () => {
  return (
    <Content className={styles.container}>
      <Typography.Title level={2}>StoryPage</Typography.Title>
    </Content>
  );
};

export default StoryPage;
