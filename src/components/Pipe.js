import React, { useState } from 'react';
import './PipeDiagram.css';

const PipeDiagram = () => {
  const initialValves = Array.from({ length: 7 }, (_, index) => ({
    id: `valve${index + 1}`,
    status: 'Closed',
  }));

  const initialInletValves = Array.from({ length: 1 }, (_, index) => ({
    id: `inletValve${index + 1}`,
    status: 'Closed',
  }));

  const [valves, setValves] = useState(initialValves);
  const [inletValves, setInletValves] = useState(initialInletValves);

  const toggleValve = (id) => {
    setValves((prevValves) =>
      prevValves.map((valve) =>
        valve.id === id
          ? { ...valve, status: valve.status === 'Closed' ? 'Open' : 'Closed' }
          : valve
      )
    );
  };

  const toggleInletValve = (id) => {
    setInletValves((prevInletValves) =>
      prevInletValves.map((valve) =>
        valve.id === id
          ? { ...valve, status: valve.status === 'Closed' ? 'Open' : 'Closed' }
          : valve
      )
    );
  };
  return (
    <div className="horizontal-pipe">
      {/* T Junction */}
      <div className="t-junction" style={{ left: '50px' }}></div>

      {/* Inlet Valves */}
      {inletValves.map((valve, index) => (
        <div key={valve.id} className="inlet-valve" style={{ left: `${index === 0 ? 0 : 100}px` }}>
          <div className="valve-status">{valve.status === 'Open' ? 'OPN' : 'CLS'}</div>
          <div className="valve-number" style={{ color: valve.status === 'Open' ? 'green' : 'red' }}>
            {`IV ${index + 1}`}
          </div>
          <img 
            src={`${process.env.PUBLIC_URL}/valve-icon-${valve.status}.png`} 
            alt={valve.status} 
            className="valve-icon"
            onClick={() => toggleInletValve(valve.id)} 
          />
        </div>
      ))}

      {/* Regular Valves */}
      {valves.map((valve, index) => (
        <div key={valve.id} className="vertical-pipe" style={{ left: `${(index + 2) * 50}px` }}>
          <div className="valve-status">{valve.status === 'Open' ? 'OPN' : 'CLS'}</div>
          <div className="valve-number" style={{ color: valve.status === 'Open' ? 'green' : 'red' }}>
            {`VALV ${index + 1}`}
          </div>
          <img 
            src={`${process.env.PUBLIC_URL}/valve-icon-${valve.status}.png`} 
            alt={valve.status} 
            className="valve-icon"
            onClick={() => toggleValve(valve.id)} 
          />
        </div>
      ))}
    </div>
  );
};

export default PipeDiagram;
