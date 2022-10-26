import { IStory } from 'models';

export const extractFields = (story: IStory) => ({
  id: story.id,
  title: story.title,
  rating: story.score,
  author: story.by,
  url: story.url,
  date: story.time,
});

export const getDateFromUnixTimestamp = (value: number) => {
  const date = new Date(value * 1000);
  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
};
