import React, { FC } from 'react';
import { Layout, Typography } from 'antd';

const { Header } = Layout;

const _Header: FC = () => {
  return (
    <Header style={{ textAlign: 'center' }}>
      <Typography.Title level={1} style={{ color: 'white' }}>
        Hacker News
      </Typography.Title>
    </Header>
  );
};

export default _Header;
