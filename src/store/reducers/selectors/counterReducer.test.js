import counterReducer, {
  decrement,
  increment,
  incrementByAmount,
} from '../counterSlice';

describe('getCounterValue', () => {
  test('increment', () => {
    expect(counterReducer({ count: 0 }, increment())).toEqual({ count: 1 });
  });
  test('decrement', () => {
    expect(counterReducer({ count: 2 }, decrement())).toEqual({ count: 1 });
  });
  test('increment with value', () => {
    expect(counterReducer({ count: 2 }, incrementByAmount(3))).toEqual({
      count: 5,
    });
  });
  test('with empty state', () => {
    expect(counterReducer(undefined, increment())).toEqual({ count: 1 });
    expect(counterReducer(undefined, decrement())).toEqual({ count: -1 });
  });
});
