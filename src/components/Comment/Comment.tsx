import React, { FC, useEffect, useState } from 'react';
import styles from './Story.module.css';
import { Skeleton, Typography } from 'antd';
import { fetchStoryById } from 'API';
import { getDateFromUnixTimestamp } from 'utils';
import { Link } from 'react-router-dom';
import { IComment } from 'models';

interface CommentProps {
  commentId: number;
}

const Comment: FC<CommentProps> = ({ commentId }) => {
  const [story, setStory] = useState<IComment | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchStoryById(commentId)
      .then((data) => {
        setStory(data);
      })
      .catch((err: Error) => {
        setError(err);
      });
  }, [commentId]);

  return (
    <li className={styles.container}>
      {story && (
        <>
          <Link to={`/stories/${story.id}`}>
            <Typography.Title level={4}>{story.title}</Typography.Title>
          </Link>
          <Typography.Title level={5}>Score: {story.score}</Typography.Title>
          <Typography.Title level={5}>Author: {story.by}</Typography.Title>
          <Typography.Title level={5}>
            Posted: {getDateFromUnixTimestamp(story.time)}
          </Typography.Title>
          <Typography.Title level={5}>
            <a href={story.url} target="_blank" rel="noreferrer">
              Link
            </a>
          </Typography.Title>
        </>
      )}
      {error && <Typography.Title level={4}>Score: {error.message}</Typography.Title>}
      {!story && !error && <Skeleton />}
    </li>
  );
};

export default Comment;
