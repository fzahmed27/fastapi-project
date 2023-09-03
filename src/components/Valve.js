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
      {valves.map((valve, index) => (
        <React.Fragment key={valve.id}>
          {index !== 0 && <div className="pipe horizontal-pipe"></div>}
          <div className="valve" id={valve.id}>
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
