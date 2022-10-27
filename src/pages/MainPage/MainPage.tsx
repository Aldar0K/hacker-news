/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect } from 'react';
import { Spin, Typography } from 'antd';

import styles from './MainPage.module.css';

import Story from 'components/Story';
import { useGetStoriesQuery } from 'store/story/story.api';
import { REFETCH_TIME_GAP } from '../../constants';

const MainPage = () => {
  const { isLoading, isError, data: storyIds, refetch } = useGetStoriesQuery('new');

  useEffect(() => {
    const id = setInterval(() => {
      refetch();
    }, REFETCH_TIME_GAP);

    return () => clearInterval(id);
  }, []);

  return (
    <main className={`main ${styles.main}`}>
      <div className={`container ${styles.container}`}>
        <Typography.Title level={2}>Latest stories:</Typography.Title>
        {isLoading && <Spin size="large" />}
        {isError && <Typography.Title level={3}>Something went wrong...</Typography.Title>}
        <ul>{storyIds && storyIds.map((storyId) => <Story key={storyId} storyId={storyId} />)}</ul>
      </div>
    </main>
  );
};

export default MainPage;
