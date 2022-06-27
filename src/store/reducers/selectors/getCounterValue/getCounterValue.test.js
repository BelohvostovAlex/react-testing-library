import { counterSelector } from './getCounterValue';

describe('getCounterValue', () => {
  test('work with empty state', () => {
    expect(counterSelector({})).toBe(0);
  });

  test('selector with 100 value', () => {
    expect(
      counterSelector({
        counter: {
          count: 100,
        },
      })
    ).toBe(100);
  });
});
