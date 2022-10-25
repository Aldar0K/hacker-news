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

export interface ItemResponse {
  id: number;
  deleted?: boolean;
  type: 'job' | 'story' | 'comment' | 'poll' | 'pollopt';
  by?: string;
  time?: number;
  text?: string;
  dead?: boolean;
  parent?: boolean;
  poll?: number;
  kids?: Array<number>;
  url?: string;
  score?: number;
  title?: string;
  parts?: Array<number>;
  descendants?: number;
}
