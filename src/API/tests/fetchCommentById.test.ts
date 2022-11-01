import { fetchCommentById } from '../index';
import { ITEM_URL } from '../../constants';
import { IComment } from 'models';

const fakeJSON: IComment = {
  by: 'test',
  id: 42,
  kids: [],
  parent: 42,
  text: 'test',
  time: 42,
  type: 'comment',
};

beforeEach(() => {
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeJSON),
    })
  );
});

afterEach(() => {
  jest.resetAllMocks();
});

describe('when fetchCommentById is requested', () => {
  const id = 42;

  it('should call a required URL', async () => {
    await fetchCommentById(id);

    expect(global.fetch).toHaveBeenCalledWith(`${ITEM_URL}/${id}.json`);
  });

  it('should return json from the response', async () => {
    const result = await fetchCommentById(id);

    expect(result).toEqual(fakeJSON);
  });
});
