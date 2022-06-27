import counterReducer, { decrement, increment } from '../counterSlice';

describe('getCounterValue', () => {
  test('increment', () => {
    expect(counterReducer({ count: 0 }, increment())).toEqual({ count: 1 });
  });
  test('decrement', () => {
    expect(counterReducer({ count: 2 }, decrement())).toEqual({ count: 1 });
  });
  test('with empty state', () => {
    expect(counterReducer(undefined, increment())).toEqual({ count: 1 });
    expect(counterReducer(undefined, decrement())).toEqual({ count: -1 });
  });
});
