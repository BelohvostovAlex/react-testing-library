import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { decrement, increment } from '../../store/reducers/counterSlice';
import { counterSelector } from '../../store/reducers/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(counterSelector);
  console.log(count);

  const onIncrement = () => {
    dispatch(increment());
  };

  const onDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1 data-testid="count-title">{count}</h1>
      <button onClick={onIncrement} data-testid="increment-btn">
        Increment
      </button>
      <button onClick={onDecrement} data-testid="decrement-btn">
        decrement
      </button>
    </div>
  );
};
