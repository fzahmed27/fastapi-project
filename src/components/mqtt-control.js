import React, { useEffect } from 'react';
import mqtt from 'mqtt';

const App = () => {
  useEffect(() => {
    const client = mqtt.connect('ws://your-broker-address:9001');

    client.on('connect', function () {
      console.log('Connected to MQTT broker');
      client.subscribe('relay/1/status', function (err) {
        if (!err) {
          client.publish('relay/1/status', 'Hello from React');
        }
      });
    });

    client.on('message', function (topic, message) {
      // message is a Buffer
      console.log(message.toString());
    });
    
    return () => {
      client.end();
    };
  }, []);

  return (
    <div>
      <h1>Relay Control</h1>
      {/* Your UI components to control the relay */}
    </div>
  );
};

export default App;
