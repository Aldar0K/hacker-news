import { IStory, ItemResponse } from 'models';
import { ITEM_URL } from '../constants';

export const fetchStoryById = async (id: number): Promise<IStory> => {
  const response = await fetch(`${ITEM_URL}/${id}.json`);
  const data: ItemResponse = await response.json();

  if (data === null) throw new Error('No matches');
  if (data.type !== 'story') throw new Error('Not a story');

  return data as IStory;
};
