import React, { FC } from 'react';
import styles from './Header.module.css';
import { Layout, Typography } from 'antd';

const { Header } = Layout;

const _Header: FC = () => {
  return (
    <Header className={styles.container}>
      <Typography.Title level={1} style={{ color: 'white', marginBottom: '0' }}>
        Hacker News
      </Typography.Title>
    </Header>
  );
};

export default _Header;
