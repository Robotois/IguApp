import mqtt from 'mqtt/dist/mqtt-browser';

const mqttConnect = (host) => {
  window.client = mqtt.connect({ host, port: 1884, clientId: 'IguApp' });

  window.client.on('connect', () => {
    console.log('MQTT connected');
    // client.subscribe('presence');
    // client.publish('presence', 'Hello mqtt');
  });

  window.client.on('offline', () => {
    console.log('Client offline');
  });
};

export default mqttConnect;

// export default deviceListener;
