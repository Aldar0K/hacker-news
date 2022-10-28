import React, { useEffect } from 'react';
import { Button, Spin, Typography } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';

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
        <div className={styles.heading}>
          <Typography.Title level={2}>Latest stories</Typography.Title>
          <Button type="primary" size="large" loading={isLoading} onClick={() => refetch()}>
            Refresh <ReloadOutlined />
          </Button>
        </div>

        {isLoading && <Spin size="large" />}
        {isError && <Typography.Title level={3}>Fetching problems...</Typography.Title>}

        {storyIds && (
          <ul className={styles.stories}>
            {storyIds.map((storyId, i) => (
              <Story key={storyId} storyId={storyId} index={i} />
            ))}
          </ul>
        )}
      </div>
    </main>
  );
};

export default MainPage;
