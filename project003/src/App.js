import { useState } from 'react';
import './App.css';
import Parent from './Components/Parent';

function App() {
  let [number, setNumber] = useState(20)
  return (
    <div>
      <h1>Hello World</h1>

      <br />

      <Parent num={number}/>

      <button onClick={()=> { setNumber (++number) } }>Update Number</button>
    </div>
  );
}

export default App;
