import React, { useEffect, useState } from 'react';
import styles from './MainPage.module.css';
import { Spin, Typography } from 'antd';
import { fetchNewStories } from 'API';
import Story from 'components/Story';
import { MAX_STORIES } from '../../constants';
import { useGetStoriesQuery } from 'store/story/story.api';

const MainPage = () => {
  const { isLoading, isError, data: storyIds } = useGetStoriesQuery('new');

  return (
    <main className={`main ${styles.main}`}>
      <div className={`container ${styles.container}`}>
        <Typography.Title level={2}>MainPage</Typography.Title>
        {isLoading && <Spin size="large" />}
        {isError && <Typography.Title level={3}>Error</Typography.Title>}
        <ul>{storyIds && storyIds.map((storyId) => <Story key={storyId} storyId={storyId} />)}</ul>
      </div>
    </main>
  );
};

export default MainPage;
