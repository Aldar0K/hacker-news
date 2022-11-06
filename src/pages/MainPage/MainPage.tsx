import React, { useEffect, useCallback } from 'react';
import { Button, Spin, Typography } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';

import styles from './MainPage.module.css';
import Story from 'components/Story';
import { fetchStoryIds, useAppDispatch, useAppSelector } from 'store';
import { REFETCH_TIME_GAP } from '../../constants';

const MainPage = () => {
  const dispatch = useAppDispatch();
  const { storyIds, loading, error } = useAppSelector((state) => state.storyIds);

  const refetch = useCallback(() => {
    dispatch(fetchStoryIds('new'));
  }, [dispatch]);

  useEffect(() => {
    if (!storyIds.length) refetch();
  }, [dispatch, refetch, storyIds.length]);

  useEffect(() => {
    const id = setInterval(() => {
      refetch();
    }, REFETCH_TIME_GAP);

    return () => clearInterval(id);
  }, [dispatch, refetch]);

  return (
    <main className={`main ${styles.main}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.heading}>
          <Typography.Title level={2}>Latest stories</Typography.Title>
          <Button type="primary" size="large" loading={loading} onClick={() => refetch()}>
            Refresh <ReloadOutlined />
          </Button>
        </div>

        {loading && <Spin size="large" />}

        {error && (
          <Typography.Title level={3} style={{ color: 'red' }}>
            Fetching problems ({error})
          </Typography.Title>
        )}

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
