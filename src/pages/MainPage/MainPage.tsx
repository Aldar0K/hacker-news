import React, { useEffect, useState } from 'react';
import styles from './MainPage.module.css';
import { Typography } from 'antd';
import { fetchNewStories } from 'API';
import Story from 'components/Story';
import { MAX_STORIES } from '../../constants';

const MainPage = () => {
  const [storyIds, setStoryIds] = useState<Array<number>>([]);

  useEffect(() => {
    fetchNewStories()
      .then((data) => {
        const stories = data.filter((_, i) => i < MAX_STORIES);
        setStoryIds(stories);
      })
      .catch((err: Error) => {
        console.log(err.message);
      });
  }, []);

  return (
    <main className={`main ${styles.main}`}>
      <div className={`container ${styles.container}`}>
        <Typography.Title level={2}>MainPage</Typography.Title>
        <ul>
          {storyIds.map((storyId) => (
            <Story key={storyId} storyId={storyId} />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default MainPage;
