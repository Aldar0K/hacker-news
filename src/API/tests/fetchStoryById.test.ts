import { fetchStoryById } from '../index';
import { ITEM_URL } from '../../constants';
import { IStory } from 'models';

const fakeJSON: IStory = {
  by: 'test',
  descendants: 42,
  id: 42,
  kids: [],
  score: 42,
  time: 42,
  title: 'test',
  type: 'story',
  url: 'test',
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

describe('when fetchStoryById is requested', () => {
  const id = 42;

  it('should call a required URL', async () => {
    await fetchStoryById(id);

    expect(global.fetch).toHaveBeenCalledWith(`${ITEM_URL}/${id}.json`);
  });

  it('should return json from the response', async () => {
    const result = await fetchStoryById(id);

    expect(result).toEqual(fakeJSON);
  });
});
