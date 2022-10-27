export interface IStory {
  by: string;
  descendants: number;
  id: number;
  kids: Array<number>;
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}

export interface IComment {
  by: string;
  id: number;
  kids: Array<number>;
  parent: number;
  text: string;
  time: number;
  type: string;
}

export interface ItemResponse {
  id: number;
  deleted?: boolean;
  type: 'job' | 'story' | 'comment' | 'poll' | 'pollopt';
  by?: string;
  time?: number;
  text?: string;
  dead?: boolean;
  parent?: number;
  poll?: number;
  kids?: Array<number>;
  url?: string;
  score?: number;
  title?: string;
  parts?: Array<number>;
  descendants?: number;
}

export type StoriesResponse = Array<number>;
