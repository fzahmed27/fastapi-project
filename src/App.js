import React from 'react';
import './App.css';
import ValveDiagram from './components/Valve';
import ATCommands from './components/ATCommands';
import DataUpload from './components/DataUpload';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>AFC Calibration Web App</h1>
        <div className="dashboard">
          <div className="left-panel">
            <ATCommands />
            <DataUpload />
          </div>
          <div className="right-panel">
            <ValveDiagram />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
