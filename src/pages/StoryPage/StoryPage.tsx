import React from 'react';
import styles from './StoryPage.module.css';
import { useParams } from 'react-router-dom';
import { Typography } from 'antd';

interface IParams {
  id: string;
}

const StoryPage = () => {
  const { id } = useParams<IParams>();

  return (
    <main className={`main ${styles.main}`}>
      <div className={`container ${styles.container}`}>
        <Typography.Title level={2}>ID: {id}</Typography.Title>
      </div>
    </main>
  );
};

export default StoryPage;
