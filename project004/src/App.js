import { useState } from 'react';
import './App.css';
import Parent from './Components/Parent';
import ValueContext from './ValueContext';

function App() {

  
  let val1 = useState(48)
  return (
    <ValueContext.Provider value={val1}>
    <div>

        <Parent />

        <br />

    </div>

   </ValueContext.Provider>
  );
}

export default App;
