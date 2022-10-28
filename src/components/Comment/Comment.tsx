import React, { FC, useEffect, useState } from 'react';
import styles from './Comment.module.css';
import { Button, Divider, Skeleton, Typography } from 'antd';
import { fetchCommentById } from 'API';
import { IComment } from 'models';

interface CommentProps {
  commentId: number;
}

const Comment: FC<CommentProps> = ({ commentId }) => {
  const [comment, setComment] = useState<IComment | null>(null);
  const [showMore, setShowMore] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchCommentById(commentId)
      .then((data) => {
        setComment(data);
      })
      .catch((err: Error) => {
        setError(err);
      });
  }, [commentId]);

  return (
    <li className={styles.container}>
      {comment && (
        <>
          <Typography.Title level={4} className={styles.title}>
            {comment.by}
          </Typography.Title>
          <Typography.Text className={styles.text}>{comment.text}</Typography.Text>

          {comment.kids && (
            <div className={styles.answers}>
              <Typography.Title level={5}>{comment.kids.length} answer(s)</Typography.Title>
              <Button onClick={() => setShowMore(!showMore)}>{showMore ? 'Hide' : 'Show'}</Button>
            </div>
          )}

          {comment.kids && showMore && (
            <ul>
              {comment.kids.map((commentId) => (
                <Comment key={commentId} commentId={commentId} />
              ))}
            </ul>
          )}

          <Divider />
        </>
      )}
      {error && <Typography.Title level={4}>Score: {error.message}</Typography.Title>}
      {!comment && !error && <Skeleton />}
    </li>
  );
};

export default Comment;
