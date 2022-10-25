import React, { FC } from 'react';
import styles from './Header.module.css';
import { Layout, Typography } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const _Header: FC = () => {
  return (
    <Header className={styles.container}>
      <Link to="/">
        <Typography.Title level={1} className={styles.title}>
          Hacker News
        </Typography.Title>
      </Link>
    </Header>
  );
};

export default _Header;
