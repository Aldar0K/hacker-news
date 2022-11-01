import { fetchNewStories } from '../index';
import { NEWSTORIES_URL } from '../../constants';

const fakeResponse: Array<number> = [42];

beforeEach(() => {
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeResponse) as Promise<Array<number>>,
    })
  );
});

afterEach(() => {
  jest.resetAllMocks();
});

describe('when fetchNewStories is requested', () => {
  it('should call a required URL', async () => {
    await fetchNewStories();

    expect(global.fetch).toHaveBeenCalledWith(NEWSTORIES_URL);
  });

  it('should return json from the response', async () => {
    const result = await fetchNewStories();

    expect(result).toEqual(fakeResponse);
  });
});
