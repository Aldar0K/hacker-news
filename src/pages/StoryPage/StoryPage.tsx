import React from 'react';
import styles from './StoryPage.module.css';
import { useParams } from 'react-router-dom';
import { Layout, Typography } from 'antd';

const { Content } = Layout;

interface IParams {
  id: string;
}

const StoryPage = () => {
  const { id } = useParams<IParams>();

  return (
    <Content className={styles.container}>
      <Typography.Title level={2}>ID: {id}</Typography.Title>
    </Content>
  );
};

export default StoryPage;
