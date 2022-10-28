import React, { FC } from 'react';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <Link to="/">
          <Typography.Title level={1} className={styles.title}>
            Hacker News
          </Typography.Title>
        </Link>
      </div>
    </header>
  );
};

export default Header;
