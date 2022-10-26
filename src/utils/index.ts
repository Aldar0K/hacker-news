import { IStory } from 'models';

export const extractFields = (story: IStory) => ({
  id: story.id,
  title: story.title,
  rating: story.score,
  author: story.by,
  url: story.url,
  date: story.time,
});
