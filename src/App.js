import React from 'react';
import './App.css';
import { useState } from 'react';
import Counter from './components/Counter';

function App() {
  const [likes, setLikes] = useState(1)
  const [value, setValue] = useState('text')

  function increment() {
    setLikes(likes + 1)
  }

  function decrement() {
    setLikes(likes - 1)
  }

  return (
    <div className="App">
      <h1>{likes}</h1>
      <h1>{value}</h1>
      <input
        type='text'
        value={value}
        onChange={event => setValue(event.target.value)}
      />
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <Counter />
    </div >
  );
}

export default App;
