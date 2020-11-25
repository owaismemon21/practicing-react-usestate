import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Header from './header';
import Counter from './counter';
import Bulb from './bulb';

function App() {
  let [isBulbOn, setBulb] = useState(false);
  let [count, setCount] = useState(0);
  return (
    <div className="App">
      <Header isBulbOn={isBulbOn} />
      <Counter count={count} />
      <Bulb isBulbOn={isBulbOn} />
      <button onClick={() => setCount(++count)}>+</button>
      <button onClick={() => setCount(--count)}>-</button>
      <button onClick={() => setBulb(!isBulbOn)}>Bulb On/Off</button>
    </div>
  );
}

export default App;
