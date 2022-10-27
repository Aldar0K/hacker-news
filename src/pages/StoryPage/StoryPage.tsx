import React, { useState, useEffect } from 'react';
import styles from './StoryPage.module.css';
import { useParams } from 'react-router-dom';
import { Divider, Skeleton, Typography } from 'antd';
import { IStory } from 'models';
import { fetchStoryById } from 'API';
import { getDateFromUnixTimestamp } from 'utils';
import Comment from 'components/Comment';

interface IParams {
  id: string;
}

const StoryPage = () => {
  const [story, setStory] = useState<IStory | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const { id: storyId } = useParams<IParams>();

  useEffect(() => {
    fetchStoryById(Number(storyId))
      .then((data) => {
        setStory(data);
      })
      .catch((err: Error) => {
        console.log(err.message);
        setError(err);
      });
  }, [storyId]);

  return (
    <main className={`main ${styles.main}`}>
      <div className={`container ${styles.container}`}>
        {story && (
          <>
            <Typography.Title level={2}>{story.title}</Typography.Title>
            <Typography.Title level={3}>
              <a href={story.url} target="_blank" rel="noreferrer">
                Link
              </a>
            </Typography.Title>
            <Typography.Title level={3}>
              Posted: {getDateFromUnixTimestamp(story.time)}
            </Typography.Title>
            <Typography.Title level={3}>Author: {story.by}</Typography.Title>
            <Typography.Title level={3}>Comments: {story.descendants}</Typography.Title>

            <Divider />

            <ul>
              {story.kids &&
                story.kids.map((commentId) => <Comment key={commentId} commentId={commentId} />)}
            </ul>
          </>
        )}
        {error && (
          <Typography.Title level={4}>Something went wrong ({error.message})</Typography.Title>
        )}
        {!story && !error && <Skeleton />}
      </div>
    </main>
  );
};

export default StoryPage;
