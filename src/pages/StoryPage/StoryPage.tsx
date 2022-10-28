import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Divider, Skeleton, Typography, Breadcrumb } from 'antd';
import { LinkOutlined, ReloadOutlined } from '@ant-design/icons';

import styles from './StoryPage.module.css';
import { IStory } from 'models';
import { fetchStoryById } from 'API';
import { getDateFromUnixTimestamp } from 'utils';
import Comment from 'components/Comment';

interface IParams {
  id: string;
}

const StoryPage = () => {
  const { id: storyId } = useParams<IParams>();
  const [story, setStory] = useState<IStory | null>(null);
  const [error, setError] = useState<Error | null>(null);

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

  const handleReload = () => {
    setStory(null);
    setError(null);

    fetchStoryById(Number(storyId))
      .then((data) => {
        setStory(data);
      })
      .catch((err: Error) => {
        console.log(err.message);
        setError(err);
      });
  };

  return (
    <main className={`main ${styles.main}`}>
      <div className={`container ${styles.container}`}>
        {story && (
          <>
            <Breadcrumb className={styles.breadcrumb}>
              <Breadcrumb.Item>
                <Link to="/">Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to="/">stories</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to={`/stories/${storyId}`}>{storyId}</Link>
              </Breadcrumb.Item>
            </Breadcrumb>

            <div className={styles.heading}>
              <Typography.Title level={2} className={styles.title}>
                {story.title}
              </Typography.Title>
              <a href={story.url} target="_blank" rel="noreferrer" className={styles.link}>
                <LinkOutlined />
              </a>
            </div>

            <div className={styles.info}>
              <Typography.Paragraph className={styles.info__item}>
                Author: {story.by}
              </Typography.Paragraph>
              <Typography.Paragraph className={styles.info__item}>
                Posted: {getDateFromUnixTimestamp(story.time)}
              </Typography.Paragraph>
              <Typography.Paragraph className={styles.info__item}>
                Comments: {story.descendants}
              </Typography.Paragraph>
              <Button type="primary" onClick={handleReload}>
                Reload <ReloadOutlined />
              </Button>
            </div>

            <Divider />

            <ul className={styles.comments}>
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
