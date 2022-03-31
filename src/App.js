import './App.css';
import IsoBar from './IsoBar/IsoBar';
import React from 'react';

function App() {



  return (
    <div className="App">
      
      <IsoBar 
      lowLabel={"Low"} 
      highLabel={"High"} 
      titleLabel={"Pressure"} 
      colorTable={"colorTable"} 
      />
    </div>
  );
}

export default App;
