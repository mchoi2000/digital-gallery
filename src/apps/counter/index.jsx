import './index.scss';
import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-app">
      <h2 className={count > 0 ? "positive" : count < 0 ? "negative" : null}>{ count }</h2>
      <div className="button__wrapper">
        <button onClick={() => setCount(count-1)}>-</button>
        <button onClick={() => setCount(count+1)}>+</button>
      </div>
    </div>
  );
}