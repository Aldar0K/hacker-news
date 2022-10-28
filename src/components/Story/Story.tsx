import React, { FC, useEffect, useState } from 'react';
import styles from './Story.module.css';
import { Skeleton, Typography } from 'antd';
import { fetchStoryById } from 'API';
import { IStory } from 'models';
import { getDateFromUnixTimestamp } from 'utils';
import { Link } from 'react-router-dom';

interface StoryProps {
  storyId: number;
  index: number;
}

const Story: FC<StoryProps> = ({ storyId, index }) => {
  const [story, setStory] = useState<IStory | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchStoryById(storyId)
      .then((data) => {
        setStory(data);
      })
      .catch((err: Error) => {
        setError(err);
      });
  }, [storyId]);

  return (
    <li className={styles.container}>
      {story && (
        <>
          <div className={styles.heading}>
            <Link to={`/stories/${story.id}`} className={styles.link}>
              <Typography.Title level={4} className={styles.title}>
                {index + 1}. {story.title}
              </Typography.Title>
            </Link>
          </div>

          <div className={styles.info}>
            <Typography.Paragraph className={styles.info__item}>
              Author: {story.by}
            </Typography.Paragraph>
            <Typography.Paragraph className={styles.info__item}>
              Score: {story.score}
            </Typography.Paragraph>
            <Typography.Paragraph className={styles.info__item}>
              Posted: {getDateFromUnixTimestamp(story.time)}
            </Typography.Paragraph>
          </div>
        </>
      )}

      {error && (
        <Typography.Title level={4}>Something went wrong ({error.message})</Typography.Title>
      )}
      {!story && !error && <Skeleton />}
    </li>
  );
};

export default Story;
