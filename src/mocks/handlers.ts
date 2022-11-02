import { rest } from 'msw';
import { IStory } from 'models';

const fakeJSON: IStory = {
  by: 'test author',
  descendants: 42,
  id: 42,
  score: 42,
  time: 42,
  title: 'test title',
  type: 'story',
  url: 'test url',
};

export const handlers = [
  rest.get('https://hacker-news.firebaseio.com/v0/item/42.json', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(fakeJSON));
  }),
];
