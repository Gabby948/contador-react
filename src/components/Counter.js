import React, { useState } from 'react';
import Button from './Button';


const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter-container">
      <h1>Contador con React</h1>
      <p>{count}</p>
      <div className="buttons-container">
        <Button onClick={increment} text="Incrementar" />
        <Button onClick={decrement} text="Decrementar" />
        <Button onClick={reset} text="Reiniciar" />
      </div>
    </div>
  );
};

export default Counter;