import mqtt from 'mqtt/dist/mqtt-browser';

window.client = mqtt.connect({ host: '192.168.1.65', port: 1884, clientId: 'IguApp' });

window.client.on('connect', () => {
  console.log('MQTT connected');
  // client.subscribe('presence');
  // client.publish('presence', 'Hello mqtt');
});

window.client.on('offline', () => {
  console.log('Client offline');
});

// export default deviceListener;
