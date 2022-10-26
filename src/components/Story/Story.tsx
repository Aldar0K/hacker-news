import React, { FC, useEffect, useState } from 'react';
import styles from './Story.module.css';
import { Typography } from 'antd';
import { fetchStoryById } from 'API';
import { IStory } from 'models';
import { getDateFromUnixTimestamp } from 'utils';
import { Link } from 'react-router-dom';

interface StoryProps {
  storyId: number;
}

const Story: FC<StoryProps> = ({ storyId }) => {
  const [story, setStory] = useState<IStory | null>(null);

  useEffect(() => {
    fetchStoryById(storyId)
      .then((data) => {
        setStory(data);
      })
      .catch((err: Error) => {
        console.log(err.message);
      });
  }, [storyId]);

  return story ? (
    <li className={styles.container}>
      <Link to={`/stories/${story.id}`}>
        <Typography.Title level={4}>{story.title}</Typography.Title>
      </Link>
      <Typography.Title level={5}>Score: {story.score}</Typography.Title>
      <Typography.Title level={5}>Author: {story.by}</Typography.Title>
      <Typography.Title level={5}>Posted: {getDateFromUnixTimestamp(story.time)}</Typography.Title>
      <Typography.Title level={5}>
        <a href={story.url} target="_blank" rel="noreferrer">
          Link
        </a>
      </Typography.Title>
    </li>
  ) : null;
};

export default Story;
