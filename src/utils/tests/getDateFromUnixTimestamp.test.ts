import { getDateFromUnixTimestamp } from '../index';

describe('when a unix timestamp is passed to a function as an argument', () => {
  it('should return a correct data', () => {
    const testCases: Array<{ timestamp: number; date: string }> = [
      { timestamp: 1207886576, date: '11.04.2008' },
      { timestamp: 1175714200, date: '4.04.2007' },
      { timestamp: 1314211127, date: '24.08.2011' },
      { timestamp: 1203647620, date: '22.02.2008' },
    ];

    testCases.forEach(({ timestamp, date }) => {
      const result = getDateFromUnixTimestamp(timestamp);

      expect(result).toEqual(date);
    });
  });
});
