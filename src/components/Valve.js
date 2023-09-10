import React, { useState } from 'react';
import './ValveDiagram.css';
import PipeDiagram from './Pipe'
const ValveDiagram = () => {
  const initialValves = Array.from({ length: 7 }, (_, index) => ({
    id: `valve${index + 1}`,
    status: 'Closed',
  }));

const [valves, setValves] = useState(initialValves);

const [inletValves, setInletValves] = useState([
    { id: 'inletValve1', status: 'Closed', color: 'red' },
    { id: 'inletValve2', status: 'Closed', color: 'red' },
  ]);

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
          ? {
              ...valve,
              status: valve.status === 'Closed' ? 'Open' : 'Closed' }
          : valve
      )
    );
  };

  return (
    <div className="diagram">
      <div className="inlet-section">
        <div className="inlet-container">
          {/* Inlet Valve 1 */}
          <div className="inlet-valve-label">IV1</div>
          <div className="inlet-valve" id={inletValves[0].id}
               onClick={() => toggleInletValve(inletValves[0].id)}>
            {inletValves[0].status}
            <img src={`${process.env.PUBLIC_URL}/inlet-valve-${inletValves[0].status.toLowerCase()}-1.png`} alt={inletValves[0].status} />
          </div>
          
          {/* Inlet Valve 2 */}
          <div className="inlet-valve" id={inletValves[1].id}
               onClick={() => toggleInletValve(inletValves[1].id)}>
            <img src={`${process.env.PUBLIC_URL}/inlet-valve-${inletValves[1].status.toLowerCase()}-2.png`} alt={inletValves[1].status} />
            {inletValves[1].status}
            <div className="inlet-valve-label">IV2</div>
          </div>
        </div>
      </div>

      {valves.map((valve, index) => (
        <React.Fragment key={valve.id}>
          <PipeDiagram/>


    
  
        </React.Fragment>
      ))}
    </div>
  );
};

export default ValveDiagram;
