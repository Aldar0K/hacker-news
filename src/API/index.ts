import { IStory, ItemResponse } from 'models';
import { ITEM_URL, NEWSTORIES_URL } from '../constants';

export const fetchStoryById = async (id: number): Promise<IStory> => {
  const response = await fetch(`${ITEM_URL}/${id}.json`);
  if (response.status === 404) throw new Error('Not found');

  const data: ItemResponse = await response.json();
  if (data === null) throw new Error('No matches');
  if (data.type !== 'story') throw new Error('Not a story');

  return data as IStory;
};

export const fetchNewStories = async (): Promise<Array<number>> => {
  const response = await fetch(NEWSTORIES_URL);
  if (response.status === 404) throw new Error('Not found');

  const data: Array<number> = await response.json();
  return data;
};
