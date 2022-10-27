import React, { useEffect } from 'react';
import { Button, Spin, Typography } from 'antd';

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
  }, [refetch]);

  return (
    <main className={`main ${styles.main}`}>
      <div className={`container ${styles.container}`}>
        <Typography.Title level={2}>Latest stories:</Typography.Title>
        <Button type="primary" loading={isLoading} onClick={() => refetch()}>
          Refresh
        </Button>
        {isLoading && <Spin size="large" />}
        {isError && <Typography.Title level={3}>Something went wrong...</Typography.Title>}
        <ul>{storyIds && storyIds.map((storyId) => <Story key={storyId} storyId={storyId} />)}</ul>
      </div>
    </main>
  );
};

export default MainPage;
