import React, { useState } from 'react';
import ColorForm from './components/ColorForm';
import ColorDisplay from './components/ColorDisplay';
import SecondForm from './components/SecondForm';
import SecondDisplay from './components/SecondDisplay';
    
function App() {

  const [ boxColor, setBoxColor ] = useState([]);
  const [ newboxColor, setNewBoxColor ] = useState([]);
  return (
      <div className="App">
        <ColorForm boxColor = { boxColor } setBoxColor = { setBoxColor } />
        <ColorDisplay boxColor = { boxColor } />
        <hr />
        <SecondForm newboxColor = { newboxColor } setNewBoxColor = { setNewBoxColor } />
        <SecondDisplay newboxColor = { newboxColor } />
      </div>
  );
}

export default App;

