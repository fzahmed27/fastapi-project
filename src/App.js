import React from 'react';
import ValveDiagram from './components/Valve';
import ATCommands from './components/ATCommands';
import DataUpload from './components/DataUpload';
import './App.css';

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
            <div className="valve-control-dashboard">
              <h2>Valve Control</h2>
              <ValveDiagram />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
