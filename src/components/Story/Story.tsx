import { Typography } from 'antd';
import { fetchStoryById } from 'API';
import { IStory } from 'models';
import React, { FC, useEffect, useState } from 'react';
import { getDateFromUnixTimestamp } from 'utils';

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
    <li>
      <Typography.Title level={4}>
        <a href={story.url} target="_blank" rel="noreferrer">
          {story.title}
        </a>
      </Typography.Title>
      <Typography.Title level={5}>Score: {story.score}</Typography.Title>
      <Typography.Title level={5}>Author: {story.by}</Typography.Title>
      <Typography.Title level={5}>Posted: {getDateFromUnixTimestamp(story.time)}</Typography.Title>
    </li>
  ) : null;
};

export default Story;
