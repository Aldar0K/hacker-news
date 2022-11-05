import { rest } from 'msw';
import { IComment, IStory } from 'models';

const fakeStory: IStory = {
  by: 'test author',
  descendants: 42,
  id: 1,
  score: 42,
  time: 42,
  title: 'test title',
  type: 'story',
  url: 'test url',
};

const fakeComment: IComment = {
  by: 'test author',
  id: 2,
  parent: 42,
  text: 'test text',
  time: 42,
  type: 'comment',
};

const fakeCommentWithKids: IComment = {
  by: 'test author',
  id: 3,
  kids: [4],
  parent: 42,
  text: 'test text',
  time: 42,
  type: 'comment',
};

const fakeKidComment: IComment = {
  by: 'test kid author',
  id: 4,
  parent: 3,
  text: 'test kid text',
  time: 42,
  type: 'comment',
};

const fakeNewStories: Array<number> = [1];

export const handlers = [
  rest.get('https://hacker-news.firebaseio.com/v0/item/1.json', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(fakeStory));
  }),
  rest.get('https://hacker-news.firebaseio.com/v0/item/2.json', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(fakeComment));
  }),
  rest.get('https://hacker-news.firebaseio.com/v0/item/3.json', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(fakeCommentWithKids));
  }),
  rest.get('https://hacker-news.firebaseio.com/v0/item/4.json', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(fakeKidComment));
  }),
  rest.get('https://hacker-news.firebaseio.com/v0/item/5.json', (req, res, ctx) => {
    return res(ctx.status(404));
  }),
  rest.get('https://hacker-news.firebaseio.com/v0/item/6.json', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(null));
  }),
  rest.get('https://hacker-news.firebaseio.com/v0/newstories.json', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(fakeNewStories));
  }),
];
