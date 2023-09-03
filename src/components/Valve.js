import React, { useState } from 'react';
import './ValveDiagram.css';  // Import the CSS (create this file)

const ValveDiagram = () => {
  const initialValves = Array.from({ length: 7 }, (_, index) => ({
    id: `valve${index + 1}`,
    status: 'Closed',
  }));

  const [valves, setValves] = useState(initialValves);

  const toggleValve = (id) => {
    setValves((prevValves) =>
      prevValves.map((valve) =>
        valve.id === id
          ? {
              ...valve,
              status: valve.status === 'Closed' ? 'Open' : 'Closed',
            }
          : valve
      )
    );
  };

  return (
    <div className="diagram">
    <div className="inlet-section">
      <div className="inlet-valve">
        <img src={`${process.env.PUBLIC_URL}/inlet-valve-1.png`} alt="Inlet Valve 1" />
      </div>  {/* Inlet Valve 1 */}
      <div className="inlet-pipe vertical-pipe"></div>

      <div className="inlet-valve">
        <img src={`${process.env.PUBLIC_URL}/inlet-valve-2.png`} alt="Inlet Valve 2" />
      </div>  {/* Inlet Valve 2 */}
      </div>
      <div className="horizontal-pipe"></div>  {/* Horizontal pipe before Valve 1 */}
      {valves.map((valve, index) => (
        <React.Fragment key={valve.id}>
          {index !== 0 && <div className="pipe horizontal-pipe"></div>}
          <div className="valve" id={valve.id}>
            <div className="valve-number">{`Valve ${index + 1}`}</div>
            <img 
              src={`${process.env.PUBLIC_URL}/valve-icon-${valve.status}.png`} 
              alt={valve.status} 
              onClick={() => toggleValve(valve.id)} 
            />
            {valve.status}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ValveDiagram;

