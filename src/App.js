import React from 'react';
import ATCommands from './components/ATCommands';
import DataUpload from './components/DataUpload';
import './App.css';
import PipeDiagram from './components/Pipe';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>AFC Calibration Web App</h1>
        <div className="dashboard-wrapper">
          <div className="left-panel">
            {/* Add the content you want in the left panel here */}
            <ATCommands />
            <DataUpload />
          </div>
          <div className="right-panel">
            <div className="valve-control-dashboard">
              <PipeDiagram/>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
